import { PRIMARY_COLOR } from '@/config';
import { IPost } from '@/interfaces/dashboard/IPost';
import { Code, Header, Paragraph } from '@/services/usePostRenderer/components';

export const post: IPost = {
  name: `Flexible single line/multi-line formatting`,

  abstract: `Recently while I was working on one of the projects, Prettier was forcing single line formatting for tags when spread but I wanted them to stay spread. Here's simple tip on how to fix it.`,

  tags: [{ text: 'Prettier' }],

  date: '2021-12-27',

  components: [
    new Header({
      value: `Flexible single line/multi-line formatting`,

      overrideComponentProps: {
        order: 1,
      },
    }),

    new Paragraph({
      value: `Prettier combined with ESLint can sometimes cause headache problems. Even if we add dependencies that are supposed to help them work together by e.g. disabling conflicting rules. Because of that I've thought that my case concerns interaction of these tools. I've changed ESLint version, configuration and it did not help.`,
    }),

    new Paragraph({
      value: `Case - when formatting component's template, Prettier forced one line formatting on tags that exceeded length limit (80) while they were spread. The goal was to force Prettier to apply proper formatting or let developer choose without changing config file. Let's say we have label tag following results:`,
    }),

    new Code({
      value: `<!-- expected formatting (good) -->
<label for="search">
    Search
</label>
      
<!-- received formatting (wrong) -->
<label for="search"> Search </label>
      `,
      prism: {
        noCopy: true,

        language: 'markup',
      },
    }),

    new Paragraph({
      value: `Initially, I was told that the reason behind that are my IDE settings. I was given two different configurations, none of them solved problem.  After testing many different settings, I've looked at older version to check Prettier package. There was used prettier^1 and in newest update we've moved to prettier^2 (^ - caret symbol means newest version but taking into account that major version needs to match). It turned out that after  returning to prettier^1 problem was solved! Tags that did not exceed single line length limit could be set in two ways. What is the cause? I have my assumptions that are not confirmed but seems reasonable 🤔. Let's return to the label example and slightly modify it to picture the reason.`,
    }),

    new Code({
      value: `<b-container fluid>
    <b-row>
        <b-col>
            <!-- label1 -->
            <label for="search">
                Search
            </label>

            <!-- label2 -->
            <label for="search"> Search </label>
        </b-col>
    </b-row>
</b-container>`,
      prism: {
        noCopy: true,

        language: 'markup',
      },
    }),

    new Paragraph({
      value: `Label1 has 90 characters (including indentations) while label2, 52. It might seem that Prettier should leave label1 formatting because when spreading that tag among 3 lines we didn't exceed row limit (80). It does not work like that for prettier^2. Label1 will still be formatted to label2. I guess that in prettier^2 there was change in approach to indentation counting inside tags. If we take a look again at label1, exactly on 6th line`,
    }),

    new Code({
      value: `<b-container fluid>
    <b-row>
        <b-col>
            <!-- label1 -->
            <label for="search">
                Search
            </label>
        </b-col>
    </b-row>
</b-container>`,
      prism: {
        noCopy: true,

        language: 'markup',

        highlightLines: { 6: { color: PRIMARY_COLOR } },
      },
    }),

    new Paragraph({
      value: `20 spaces (4 tabs) between document start and Search word are not taken into account. Prettier (v2) treats that indentation like it would be single whitespace character and because of that label1 has 70 characters instead of 90 which means that it didn't exceed limit and is formatted into single line!`,
    }),

    new Paragraph({
      value: `Once we return to prettier^1, indentations inside label tag will be correctly taken into account (correctly in the context of set goal) and we will be able to write down label in two ways: label1 or label2 🤠👍`,
    }),
  ],
};
