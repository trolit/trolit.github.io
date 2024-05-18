import { IPost } from '@/types/IPost';
import { Code, Header, Paragraph } from '@/services/useContentRenderer/components';

const title = 'Hybrid API versioning';

export const POST: IPost = {
  name: title,

  abstract: `This text presents implementation of [resource]+[query] API versioning made for Node.js + Express.js that utilizes TypeScript. Even if you are not considering hybrid approach at all, you might wanna check it out for parts that might feel worth to adapt (or you can always go for RPC library 🤔).`,

  tags: [{ text: 'Node.js' }, { text: 'Express.js' }, { text: 'TypeScript' }, { text: 'itvault' }],

  date: '2024-05-18',

  references: {
    items: [
      {
        match: 'itvault',
        title: 'itvault',
        url: 'https://github.com/trolit/itvault',
      },
      {
        match: 'www.freecodecamp.org',
        title: 'How to version a REST API',
        url: 'https://www.freecodecamp.org/news/how-to-version-a-rest-api/',
      },
      {
        match: 'yup',
        title: 'yup',
        url: 'https://github.com/jquense/yup',
        excludeFromReferencesComponent: true,
      },
      {
        match: 'zod',
        title: 'zod',
        url: 'https://github.com/colinhacks/zod',
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
      value: `At an early stage of itvault backend development I was using leaf versioning (e.g. GET /users/v1). At some point I've started thinking about refactoring it to (programatically) more flexible approach that would leave me an option to update specific endpoint. I've found an article from Tim Kleier at www.freecodecamp.org which gave me wider perspective of pros and cons of potential ideas. I've decided to go with hybrid approach suggestion, that is URI path + query versioning over Headers. I do agree with author that Headers are not that transparent and elaborating API versioning is more of an art than science (anything is valid as long as it fits you and project needs).`,
    }),

    new Header({
      value: 'Part 1 - versioning through query params',
      className: 'text-xl',
    }),

    new Paragraph({
      value: `Start from defining custom request/response types to inform about structure of params/body/query and to be able to define common properties like version:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Request, Response } from "express";

      // to make the file a module and avoid the TypeScript error
      export {};
      
      declare global {
        namespace Express {
          export type CustomRequest<P = void, B = void, Q = void> = Request<
            P,
            unknown,
            B,
            Q & {
              version: string;
            }
          >;
        
          export type CustomResponse<T> = Response<T, Record<string, T>>;      
      }`,
    }),

    new Paragraph({
      value: `It's also necessary to define common contract for controller:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Response } from "express";

      export interface IBaseController {
        invoke<P, B, Q>(request: CustomRequest<P, B, Q>, response: Response): Promise<void | CustomResponse<any>>;
      }`,
    }),

    new Paragraph({
      value: `I'm using "CustomRequest" to maintain strong typing of passed data. "CustomResponse" is not needed as "invoke" method is responsible for triggering appropriate implementation of controller and that specific implementation is expected to check what type of data is returned, not generic invoker.`,
    }),

    new Paragraph({
      value: `In the next step, define "ControllerImplementation" type that exposes option to provide collection of implementations:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `export type ControllerImplementation = {
        version: number;
 
        handle: (
          request: CustomRequest<any, any, any>,
          response: CustomResponse<any>
        ) => Promise<void | CustomResponse<any>>;

        // optional information that can be returned to API consumer like 
        // url to specification, when particular version will be removed (date) etc.
        details?: {
          url?: string;
          incompatibileWith?: string[];
        };
      };`,
    }),

    new Paragraph({
      value: `These fundamentals allow to define shape of "BaseController":`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { IBaseController } from "types/controllers/IBaseController";

      export abstract class BaseController implements IBaseController {}`,
    }),

    new Paragraph({
      value: `Include basic properties:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { IBaseController } from "types/controllers/IBaseController";
      import { ControllerImplementation } from "types/controllers/ControllerImplementation";

      export abstract class BaseController implements IBaseController {
        static readonly ALL_VERSION_DEFINITIONS = {
          v1: 1,
          v2: 2,
          v3: 3,
        };
  
        abstract implementations: ControllerImplementation[];

        usedVersion: number;
      }`,
    }),

    new Paragraph({
      value: `Afterwards, add logic of "invoke" method, responsible for calling proper implementation of controller:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Response } from "express";
      import { StatusCodes as HTTP } from "http-status-codes";
      import { IBaseController } from "types/controllers/IBaseController";
      import { ControllerImplementation } from "types/controllers/ControllerImplementation";
      
      export abstract class BaseController implements IBaseController {
        static ALL_VERSION_DEFINITIONS = {
          v1: 1,
          v2: 2,
          v3: 3,
        };
      
        abstract implementations: ControllerImplementation[];
      
        usedVersion: number;

        public async invoke<P, B, Q>(
          request: CustomRequest<P, B, Q>,
          response: Response
        ) {
          const {
            query: { version },
          } = request;
      
          if (!version) {
            // return 500 because it should be catched earlier
            return response.status(HTTP.INTERNAL_SERVER_ERROR).send();
          }
      
          const implementation = this.implementations.find(
            implementation => implementation.version === parseInt(version)
          );
      
          if (!implementation) {
            // return 500 as invalid version should be catched earlier
            return response.status(HTTP.INTERNAL_SERVER_ERROR).send();
          }
      
          this.usedVersion = implementation.version;
      
          return implementation.handle(request, response);
        }
      }`,
    }),

    new Paragraph({
      value: `I also included function that is capable of adding extra information to response (available versions and details, if at least 1 more implementation is available). Notice that "usedVersion" property is required for that method to work as intended.`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `protected finalizeRequest<T>(
        response: CustomResponse<T>,
        code: HTTP,
        data?: T
      ): CustomResponse<T> {
        const versions = this.implementations
          .filter(({ version }) => version !== this.usedVersion)
          .map(({ version, details }) => ({ version, details }));
    
        if (!data) {
          return response.status(code).send();
        }
    
        if (!versions.length) {
          return response.status(code).send(data);
        }
    
        return response.status(code).send({ ...data, versions });
      }`,
    }),

    new Paragraph({
      value: `Having "BaseController" and "ControllerImplementation" in such way opens new possibilities. You could for instance add logic that allows to provide information until when endpoint is consumable and after reaching given date - disable it. I've used "BaseController" to include mapper service, so I can refer to it without injecting it through constructor in each controller.`,
    }),

    new Paragraph({
      value: `For further part of the text, let's imagine that we have POST method controller ("AddController") that creates entity and we expect it to have following payload:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `interface IBasePayload {
        name: string;
        description: string;
      }
      
      export interface IAddEditDTOv1 extends IBasePayload {}
      
      export interface IAddEditDTOv2 extends IBasePayload {
        videoId: string;
      }`,
    }),

    new Paragraph({
      value: `Controller types can look as follows:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { IAddEditDTOv1, IAddEditDTOv2 } from "@shared/types/...";
      
      export namespace AddControllerTypes {
        type BaseQuery = { refId: number };

        export namespace v1 {
          export type Body = IAddEditDTOv1;

          export type Request = CustomRequest<undefined, Body, BaseQuery>;
        }

        export namespace v2 {
          export type Body = IAddEditDTOv2;

          export type Request = CustomRequest<undefined, Body, BaseQuery>;
        }
      }`,
    }),

    new Paragraph({
      value: `I am using namespace as a way to organize types. I did notice comments claiming it to be deprecated feature that should be removed but for now I utilize it as I find it easy to use. Referring type looks pretty clear to me (e.g. "GetAllControllerTypes.v1.Query"). Please also notice that I'm exporting DTO under new type (Body) for the purpose of e.g. schema validation (yup, zod). I could refer to DTO directly in other parts of the project but that would cause more mess.`,
    }),

    new Paragraph({
      value: `Ok. So far, we've defined shape of controller to benefit from TypeScript's strong typing and to enforce the pattern of implementing controllers. Let's finally see how controller with two implementations looks like:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Response } from "express";
      import { StatusCodes as HTTP } from "http-status-codes";
      
      import { BaseController } from "...";
      import { AddControllerTypes } from "...";
      import { ControllerImplementation } from "...";
            
      const { v1, v2 } = BaseController.ALL_VERSION_DEFINITIONS;
      
      export class AddController extends BaseController {
        implementations: ControllerImplementation[] = [
          {
            version: v1,
            handle: this.v1.bind(this),
          },
          {
            version: v2,
            handle: this.v2.bind(this),
          },
        ];
      
        static readonly ALL_VERSIONS = [v1, v2];
      
        async v1(
          request: AddControllerTypes.v1.Request,
          response: Response  // here we can use CustomResponse if we want TypeScript to watch over what is returned
        ) {
          const {
            body: { name, description },
          } = request;

          return this.finalizeRequest(response, HTTP.CREATED, {});
        }

        async v2(
          request: AddControllerTypes.v2.Request,
          response: Response
        ) {
          const {
            body: { name, description, videoId },
          } = request;

          return this.finalizeRequest(response, HTTP.CREATED, {});
        }
      }`,
    }),

    new Paragraph({
      value: `Using "bind" when assigning functions to implementations collection is crucial as it marks that context of function is "AddController", not "BaseController". In other words if you are using "this" keyword in v1/v2 function, you refer to "AddController" class context.`,
    }),

    new Paragraph({
      value: `Aaand that's it when it comes to query params versioning implementation. I find that approach to be quite convenient. I didn't want to create separate file for each endpoint version. I also didn't want to have multiple callings of same controller in routes configuration and (as mentioned before) I wanted to put emphasis on TypeScript that if change happens in one place, other places return information that there is consistency mismatch. Moreover, prepared code works well with schema validations and dependency injection. Defining schema validation with types exposed in such way is as simple as:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Schema, object, string } from "yup";
      
      import { AddControllerTypes } from "...";
      
      // reminder of AddController body:
      // v1 -> { name, description }
      // v2 -> { name, description, videoId }

      export const v1BodySchema: Schema<AddControllerTypes.v1.Body> = object({
        name: string().trim().required(),
        description: string().trim().required(),
      });
      
      export const v2BodySchema: Schema<AddControllerTypes.v2.Body> = v1BodySchema.required().concat(
        object({
          videoId: string().trim().required(),
        })
      );
      `,
    }),

    new Paragraph({
      value: `and middleware that resolves controller and triggers "invoke" method can look as follows:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Response } from "express";
      import { container, InjectionToken } from "tsyringe";
      import { IBaseController } from "types/controllers/IBaseController";
      
      export const getInstanceOf = <T>(token: InjectionToken<T>): T => {
        return container.resolve(token);
      };

      // Note: before calling that middleware, validate if version is provided and matches available implementations
      export const processRequestWith =
        <T, P, B, Q>(Controller: InjectionToken<T>) =>
        (...args: [CustomRequest<P, B, Q>, Response]) => {
          const controller = <IBaseController>getInstanceOf(Controller);
      
          const [request, response] = args;
      
          controller.invoke(request, response);
        };
      `,
    }),

    new Header({
      value: 'Part 2 - resource versioning',
      className: 'text-xl',
    }),

    new Paragraph({
      value: `Resource versioning occurs when group of endpoints (related to particular entity) are assigned with version. Let's say that we have GET /v1/users and POST /v1/users. Version precedes resource name which means that resource is being versioned. You might wanna omit it and just use query params versioning. I'm including it for the sake of the text.`,
    }),

    new Paragraph({
      value: `It's implementation is not spectacular. It simply relies on files structure:`,
    }),

    new Code({
      language: '',
      value: `src/
      ├─ routes/
      │  ├─ v1/
      │  │  ├─ auth.ts
      │  │  ├─ blueprints.ts      
      │  ├─ v2/
      │  │  ├─ auth.ts
      │  │  ├─ blueprints.ts     
      `,
    }),

    new Paragraph({
      value: `and script that loads content, for example:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Application, Router } from "express";

      import { APP } from "@config";
      
      export const setupExpress = async (app: Application) => { 
        app.use(APP.ROUTES_PREFIX, await getRoutes());
      }
      
      async function getRoutes() {
        const routesDir = path.join(APP.BASE_DIR, "routes");
        const versions = fs.readdirSync(routesDir);
        const mainRouter = Router();
      
        for (const version of versions) {
          const versionRouter = Router();
          const registeredRouters: string[] = [];
          const routers = fs.readdirSync(path.join(routesDir, version));
      
          for (const router of routers) {
            // @NOTE consider adding dirs skip
      
            const dependency = await import(
              path.resolve(APP.BASE_DIR, "routes", version, router)
            );
      
            const [routeName] = router.split(".");
      
            versionRouter.use(\`/\${routeName}\`, dependency.default);
      
            registeredRouters.push(routeName);
          }
      
          mainRouter.use(\`/\${version}\`, versionRouter);
        }
      
        return mainRouter;
      }
      `,
    }),

    new Paragraph({
      value: `If you are looking for more practical example or more connections between controllers, validation schemas, routers that I've done, don't hesitate to scroll down through itvault project as in this text I only wanted to include simple snippets that give perspective.`,
    }),
  ],
};
