import { IPost } from '@/types/IPost';
import { Code, Header, Paragraph } from '@/services/useContentRenderer/components';

const title = 'Contract constructor based mapper';

export const POST: IPost = {
  name: title,

  abstract: `Utility that converts objects allows to "pack up" mapping logic and achieve better code readability. Positive experience with AutoMapper inspired me to bring something to itvault. If you don't want to use decorators to configure transformations, feel free to check it out 🔥`,

  tags: [{ text: 'TypeScript' }, { text: 'mapper' }, { text: 'itvault' }, { text: 'owom' }],

  date: '2024-06-02',

  references: {
    items: [
      {
        title: 'itvault (GitHub repository)',
        match: 'itvault',
        url: 'https://github.com/trolit/itvault',
      },
      {
        title: 'owom (GitHub repository)',
        match: 'owom',
        url: 'https://github.com/trolit/owom',
      },
      {
        title: 'BaseMapper.ts',
        match: 'BaseMapper.ts',
        url: 'https://github.com/trolit/itvault/blob/develop/backend/src/mappers/BaseMapper.ts',
        excludeFromReferencesComponent: true,
      },
      {
        title: 'EntityMapper.ts',
        match: 'EntityMapper.ts',
        url: 'https://github.com/trolit/itvault/blob/develop/backend/src/services/EntityMapperService.ts',
        excludeFromReferencesComponent: true,
      },
    ],
    renderInParagraphs: true,
    renderAtTheEnd: true,
  },

  components: [
    new Header({
      value: title,
    }),

    new Paragraph({
      value: `Apart from not using decorators to define properties transformations I wanted mapper to be simple and utilize strong-typing not only in backend project but other parts of TypeScript monorepo. This short text demonstrates how it works in itvault:`,
    }),

    new Paragraph({
      value: `The first thing to do is to define an DTO (Data Transfer Object) - structure of data that goes in or out of the request. It should be placed in module that is going to be shared across 2 or more parts of the project. It needs to be of interface type because that opens an option to implement it into class:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `export interface IUserDTO {
        id: number;
        email: string;
        fullName: string;
        isActive: boolean;
      }`,
    }),

    new Paragraph({
      value: `Then it's possible to define mapper logic on the backend. It should inherit BaseMapper.ts, responsible for mapping keys that are supposed to be inherited:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `export class UserMapper extends BaseMapper<User> {
        constructor(data: User) {
          super(data, ["id", "email", "fullName"]); // <------------ keys to inherit

          const { deletedAt } = data;

          this.isActive = !deletedAt;
        }
      }`,
    }),

    new Paragraph({
      value: `Thanks to generic type, those keys are checked against typos or model changes. In order to achieve synchronized strong-typing across monorepo, it's crucial to implement previously created contract:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `export class UserMapper extends BaseMapper<User> implements IUserDTO {
        constructor(data: User) {
          super(data, ["id", "email", "fullName"]);

          const { deletedAt } = data;

          this.isActive = !deletedAt;
        }
      }`,
    }),

    new Paragraph({
      value: `which forces to place properties definitions:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `export class UserMapper extends BaseMapper<User> implements IUserDTO {
        id: number;
        email: string;
        fullName: string;
        isActive: boolean;

        constructor(data: User) {
          super(data, ["id", "email", "fullName"]);

          const { deletedAt } = data;

          this.isActive = !deletedAt;
        }
      }`,
    }),

    new Paragraph({
      value: `Although it might look as redefinition, TypeScript ensures proper contract implementation so there is no space for typos. The last thing to do is to define some service. It only needs to instantiate mapper within required data but it's good to have more understandable syntax, e.g. EntityMapper.ts was implemented in itvault to utilize mapper in following way:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `mapper.map(user).to(UserMapper); // for one object
      mapper.map(users).to(UserMapper); // for many objects`,
    }),

    new Paragraph({
      value: `If you are interested in contract constructor based mapper, head to owom repository as I've extracted that solution there (plus expanded it a bit). It includes an option to use IoC library to resolve mappers and allows to pass custom data. There is no reverse mapping but if you would need one, consider adding interface that - when implemented - forces mapper to define "reverseMap" function and then implementation of function that triggers it 🤔`,
    }),
  ],
};
