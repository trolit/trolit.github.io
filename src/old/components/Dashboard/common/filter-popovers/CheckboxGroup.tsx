import { IconFilter, IconFilterOff } from '@tabler/icons-react';
import { Popover, Button, Checkbox, Container, ScrollArea, Text, Stack } from '@mantine/core';

import { IFilterOption } from '@/interfaces/IFilterOption';

interface IProps {
  value: string[];

  options: IFilterOption[];

  onValueUpdate: (value: string[]) => void;
}

export function CheckboxGroupFilterPopover({ value, options, onValueUpdate }: IProps) {
  const isValueEmpty = value.length === 0;

  const checkboxes = options.map(({ label, value: optionValue }) => (
    <Checkbox
      key={label}
      radius='xs'
      label={<Text>{label}</Text>}
      checked={value.includes(optionValue || label)}
      onChange={({ target: { checked } }) => {
        const source = optionValue || label;

        if (checked) {
          onValueUpdate([...value, optionValue || label]);

          return;
        }

        onValueUpdate(value.filter((element) => element !== source));
      }}
    />
  ));

  return (
    <Popover position='bottom' withArrow shadow='md' withinPortal>
      <Popover.Target>
        <Button variant='light' compact>
          {isValueEmpty ? <IconFilter /> : <IconFilterOff />}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Button disabled={isValueEmpty} mb={15} fullWidth variant='filled' compact onClick={() => onValueUpdate([])}>
          Clear {isValueEmpty ? '' : `(${value.length})`}
        </Button>

        <ScrollArea h={300}>
          <Container pl={0}>
            <Stack spacing={3}>{checkboxes}</Stack>
          </Container>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}
