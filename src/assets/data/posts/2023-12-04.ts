import { IPost } from '@/interfaces/dashboard/IPost';
import typeSafetyExampleImage from '@/assets/media/posts/2023-12-04/1.png';
import { Code, Header, Paragraph, Photo } from '@/services/useContentRenderer/components';

export const POST: IPost = {
  name: 'Vue x Composition API - try or not to try',

  abstract: `Composition API is more advanced approach when working with Vue as it offers high flexibility. I've already spent few months with big hopes but started to curse myself the longer I kept working in it, but I think that I've finally found something promising through example and decided to share it.`,

  tags: [{ text: 'Vue' }, { text: 'Composition API' }],

  date: '2023-12-04',

  references: {
    items: [
      {
        match: 'itvault',
        title: 'itvault',
        url: 'https://github.com/trolit/itvault',
      },

      {
        match: 'vee-validate',
        title: 'Vee Validate',
        url: 'https://vee-validate.logaretm.com/v4/',
      },
    ],

    renderInParagraphs: true,

    renderAtTheEnd: false,
  },

  components: [
    new Header({
      value: 'Vue x Composition API - try or not to try',

      overrideComponentProps: {
        order: 1,
      },
    }),

    new Paragraph({
      value: `I've started working on project itvault (with FE in Composition API) in September 2022. I didn't have backend ready yet (just authentication request). Due to that I didn't define many computed variables or watchers and stuck to the following approach:`,
    }),

    new Code({
      value: `import { computed, watch } from 'vue';

      computed(() => { ... });
      computed(() => { ... });

      watch(..., (currentValue, oldValue) => { ... });
      watch(..., (currentValue, oldValue) => { ... });
        `,

      prism: {
        language: 'typescript',
      },
    }),

    new Paragraph({
      value: `Then I've made break and returned to project on March 2023, focusing on backend part first. Month later I've jumped back to FE and noticed that those ref/computed variables and watchers are annoying me as <script> part is difficult to read! At that point I was considering 2 solutions - return to Options API or keep Composition API and define helpers. I've decided to implement helpers:`,
    }),

    new Code({
      value: `const { computed1, computed2 } = defineComputed({
        computed1() { ... },

        computed2() { ... }
      });

      defineWatchers({
        watcher1: {
          source: isActive,
          handler(value: boolean) {
            // ...
          }
        }
    });
          `,

      prism: {
        language: 'typescript',
      },
    }),

    new Paragraph({
      value: `I felt more comfortable with that approach but wait... It's literally Options API 😂 so why not just stick to Options API if I use Composition API like this... At that point I've adopted negative mindset towards Composition API that (1) source code does not look clean like in older API, (2) when I want to reference something reactive in script I have to do it through "value", (3) it requires more imagination (refactors) than Options API.`,
    }),

    new Paragraph({
      value: `When coworker asked "Why not Composition API" I've shared above POV and statement that I believe that the struggle of Composition API is worth but indeed it's much more difficult to use (you either need to find & adopt some ready user/company stack concept or implement your own and accept necessity to do multiple refactors). It's flexibility is powerful but in my opinion, it costs much more time to do something "production ready" than in traditional Options API way 🤔.`,
    }),

    new Paragraph({
      value: `I've slightly changed my opinion towards Composition API in December 2023. Basically, at FE I'm using vee-validate form library and in September 2023 I've created "defineForm" helper which I was using like this:`,
    }),

    new Code({
      value: `// <n-form-item
//    label="Name"
//    :required="true"
//    :feedback="getError('filename')"
//    :validation-status="hasError('filename')"
// >
//    <n-input v-model:value="filename" type="text" placeholder="Name" />
// </n-form-item>
     
import { ref } from "vue";
import { object, string } from "yup";
        
import { useFilesStore } from "@/store/files";
import { defineForm } from "@/helpers/defineForm";
import { useGeneralStore } from "@/store/general";

const filesStore = useFilesStore();
const generalStore = useGeneralStore();

const isLoading = ref(false);

// 1. Define form (initial values + schema)
const { fields, getError, hasError, handleSubmit, setValidationErrors } =
  defineForm(
    {
      filename: "",
    },
    object({
      filename: string().required(),
    })
  );

// 2. Extract ref variable for <template>
const {
    filename: { value: filename },
} = fields;

// 3. Set submit logic
const onSubmit = handleSubmit.withControlled(async formData => {
    isLoading.value = true;

    try {
      await filesStore.patchFilename(props.fileId, formData.filename);

      generalStore.messageProvider.success('File renamed');

      close();
    } catch (error) {
      console.error(error);

      setValidationErrors(error); // sets errors received from backend

      generalStore.messageProvider.error('File rename operation failed!');
    } finally {
      isLoading.value = false;
    }
});
      `,

      prism: {
        language: 'typescript',
      },
    }),

    new Paragraph({
      value: `Then in December 2023 I've started wondering if I couldn't pack that "defineForm" helper with submit related logic (try..catch, isLoading flag, state notification for user etc.). Aand I've created "defineFormApiRequest" thanks to which above component logic got refactored to the following state:`,
    }),

    new Code({
      value: `import { ref } from "vue";
import { object, string } from "yup";
        
import { useFilesStore } from "@/store/files";
import { defineFormApiRequest } from "@/helpers/defineFormApiRequest";

const filesStore = useFilesStore();

  const {
    vModel: { filename }, // 2. Extract ref variable for <template>
    isLoading,
    getError,
    hasError,
    onSubmit,
  } = defineFormApiRequest({
    // 1. Define form (initial values + schema)
    data: {
      filename: initialFilename,
    },
    
    schema: object({
      filename: string().required(),
    }),

    // 3. Set submit logic
    formCallHandler: async (formData, printSuccess) => {
      await filesStore.patchFilename(props.fileId, formData.filename);

      printSuccess("File renamed.");

      close();
    },

    errorHandler: (error, printError) => {
      printError("File rename operation failed!");
    },
  });
      `,

      prism: {
        language: 'typescript',
      },
    }),

    new Photo({
      description: 'Strong typing test passed ✅',

      overrideComponentProps: {
        height: 600,
        alt: 'Strong typing test',
        src: typeSafetyExampleImage,
      },
    }),

    new Paragraph({
      value: `This looks much better. I've finally managed to see "light in the tunnel" that Composition API deserves a chance but I have to spend more time on improvements than in Options API. I (probably) won't afford that much time to refactor every part of itvault's frontend as I'd like to spend (already limited) time on other ideas. But this refactor made me share my current experience that although Composition API is harder to use, it's great place for experimenting to create more and more reusable "diamonds".`,
    }),

    new Paragraph({
      value: `Overall (from economic POV) if I would have to implement frontend from the scratch, I wouldn't pick Composition API as it would require much more time to achieve maintainable app than using Options API. Options API forces us to use specific approach which - from the start - offers great maintainability and transparency (in terms of reading source code).`,
    }),
  ],
};
