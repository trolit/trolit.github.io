import { IPost } from '@/types/IPost';
import { Code, Header, Paragraph } from '@/services/useContentRenderer/components';

export const POST: IPost = {
  name: `Flexible single line, multi-line formatting`,

  abstract: `While working on one project, Prettier was forcing single line formatting for tags when spread but I wanted them to stay spread. Fix is relatively simple although I've spent some time to find reason behind that.`,

  tags: [{ text: 'Prettier' }],

  date: '2021-12-27',

  components: [
    new Header({
      value: `Flexible single line, multi-line formatting`,
    }),

    new Paragraph({
      value: `Prettier combined with ESLint can sometimes cause headache problems, even when adding dependencies that are supposed to help. I've thought that my case concerns interaction of these tools. I've changed ESLint version, it's configuration and it did not help.`,
    }),

    new Paragraph({
      value: `When formatting component's template, Prettier forced one line formatting on tags that exceeded length limit (80) while they were spread. The goal was to force Prettier to apply expected formatting or let developer choose between two options without changing config file. Let's say we have label tag following results:`,
    }),

    new Code({
      language: 'markup',
      lineNumbers: true,
      value: `
      <!-- expected formatting (good) -->
      <label for="search">
          Search
      </label>
            
      <!-- received formatting (wrong) -->
      <label for="search"> Search </label>
      `,
    }),

    new Paragraph({
      value: `Initially, I was told that the reason behind that are my IDE settings. I was given two different configurations, none of them solved it. After testing many different settings, I've looked at older version to check prettier package. There was used prettier v1 and in newest update we've moved to prettier v2. It turned out that returning to prettier v1 solved problem! Tags that did not exceed single line length limit could again be set in two ways. What is the cause? I have my assumptions that are not confirmed but seems reasonable 🤔. Let's return to the label example to picture the reason.`,
    }),

    new Code({
      language: 'markup',
      lineNumbers: true,
      value: `
      <b-container fluid>
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
    }),

    new Paragraph({
      value: `Label1 has 90 characters while label2 - 52 (including indentation). It might seem that Prettier should leave label1 formatting because when spreading that tag among 3 lines it does not exceed length limit (80). Well, it does not work like that in prettier v2. Label1 will still be formatted to label2. I guess that in prettier v2 there was change in default approach to indentation counting inside tags. If we take a look again at label1, exactly on 6th line`,
    }),

    new Code({
      language: 'markup',
      lineNumbers: true,
      value: `
      <b-container fluid>
          <b-row>
              <b-col>
                  <!-- label1 -->
                  <label for="search">
                      Search
                  </label>
              </b-col>
          </b-row>
      </b-container>`,
    }),

    new Paragraph({
      value: `20 spaces (4 tabs) between document start and Search word are not taken into account. Prettier (v2) treats that indentation like it would be single whitespace character and because of that label1 has 70 characters instead of 90 which means that it didn't exceed limit and is formatted into single line. Once we return to prettier v1, indentations inside label tag will be correctly taken into account (correctly in the context of set goal - fix without changing prettier config file) and we will be able to write down label in two ways: label1 or label2 🤠👍. There is probably some setting in v2 to allows to change strategy but I didn't spend on time to find that out.`,
    }),
  ],
};
