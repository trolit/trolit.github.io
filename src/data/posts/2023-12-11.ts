import { IPost } from '@/types/IPost';
import { Code, Header, Paragraph } from '@/services/useContentRenderer/components';

export const POST: IPost = {
  name: 'Real-time communication using Engine.IO',

  abstract: `Demonstration of real-time communication implementation made for itvault (PR #397). Engine.IO can be substituted with other option. Some parts of implementation were removed or changed to keep things simple.`,

  tags: [{ text: 'Vue.js' }, { text: 'Node.js' }, { text: 'TypeScript' }],

  date: '2023-12-11',

  references: {
    items: [
      {
        match: 'Engine.IO',
        title: 'Engine.IO',
        url: 'https://www.npmjs.com/package/engine.io',
      },

      {
        match: 'Engine.IO-client',
        title: 'Engine.IO-client',
        url: 'https://www.npmjs.com/package/engine.io-client',
      },

      {
        match: 'socket.io',
        title: 'socket.io',
        url: 'https://www.npmjs.com/package/socket.io',
      },

      {
        match: 'itvault',
        title: 'itvault',
        url: 'https://github.com/trolit/itvault',
      },

      {
        match: 'itvault (PR #397)',
        title: 'itvault (PR #397)',
        url: 'https://github.com/trolit/itvault/pull/397',
      },

      {
        match: 'ws',
        title: 'ws',
        url: 'https://www.npmjs.com/package/ws',
      },
    ],

    renderInParagraphs: false,

    renderAtTheEnd: true,
  },

  components: [
    new Header({
      value: 'Client <-> server communication using Engine.IO',
    }),

    new Paragraph({
      value: `You might wanna use different library depending on your requirements. I've selected Engine.IO because I didn't need features that socket.io offers (i.e. rooms, multiplexing). Socket.io framework is quite big (unpacked size 1.32MB) compared to Engine.IO library (162kB). If you are unsure which one to select, you can always try Engine.IO first and when you realize that you need socket.io specific feature, migration won't be a problem. Or you can go with different solution like (native WebSocket) ws library (which usage looks quite similiar).`,
    }),

    new Paragraph({
      value: `Keep in mind that socket.io/Engine.IO are not WebSockets implementation (they first establish a long-polling connection, then try to upgrade to better transports that are "tested" on the side, like WebSocket). In other words - you won't be able to connect to server/client through native WebSocket. If needed, you can remove long-polling connection attempt by changing "transports":`,
    }),

    new Code({
      language: 'typescript',
      value: `/**
      * The low-level transports that are enabled. WebTransport is disabled by default and must be manually enabled:
      *
      * @example
      * new Server({
      *   transports: ["polling", "websocket", "webtransport"]
      * });
      *
      * @default ["polling", "websocket"]
      */
     transports?: Transport[];`,
    }),

    new Header({
      value: 'Configuring shared module',
      className: 'text-[1.5rem]',
    }),

    new Paragraph({
      value: `Setup "shared" module/project to create "common" types and constants that will be used by both sides. I am using "project references" from TypeScript (v3.0+ feature). Considering project structure like this:`,
    }),

    new Paragraph({
      value: `Considering project structure like this:`,
    }),

    new Code({
      language: 'typescript',
      value: `├── shared/
      │   └── tsconfig.json
      ├── backend/
      │   └── tsconfig.json
      └── frontend/
          └── tsconfig.json`,
    }),

    new Paragraph({
      value: `adjust "backend/tsconfig.json" to include shared module:`,
    }),

    new Code({
      language: 'typescript',
      value: `
      "compilerOptions": {
        "baseUrl": "src",
        "paths": {
          "@shared/*": ["../../shared/src/*"]
        }
      },
      "references": [
        {
          "path": "../shared/tsconfig.json"
        }
      ]`,
    }),

    new Paragraph({
      value: `adjust "frontend/tsconfig.json" to include shared module:`,
    }),

    new Code({
      language: 'typescript',
      value: `
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@shared/*": ["../shared/src/*"]
        }
      },
      "references": [
        {
          "path": "../shared/tsconfig.json"
        }
      ]`,
    }),

    new Paragraph({
      value: `After that, modify backend's package.json build script to compile "shared" module`,
    }),

    new Code({
      language: 'typescript',
      value: `// --build, -b  Build one or more projects and their dependencies, if out of date
      "build": "npx tsc --build"`,
    }),

    new Paragraph({
      value: `Declare in shared module following types:`,
    }),

    new Code({
      language: 'typescript',
      value: `export type SocketSendMessage<T = void> = {
        type: string;
      
        data?: T;
      };
      
      export type SocketReceiveMessage<T> = {
        action: string;
      
        data: T;
      };`,
    }),

    new Paragraph({
      value: `and structure of actions that can occur under specific section of client's app. If there is need to have "global actions", add another section and cover that case in manager's "sendMessage" implementation.`,
    }),

    new Code({
      language: 'typescript',
      value: `export default {
        VIEW_DASHBOARD: {
          TYPE: "view-dashboard",
          ACTIONS: {
            CREATE_WORKSPACE: "create-workspace",
            UPDATE_WORKSPACE: "update-workspace",
          },
        },
      
        VIEW_WORKSPACE: {
          TYPE: "view-workspace",
          ACTIONS: {
            CREATE_BLUEPRINT: "create-blueprint",
            UPDATE_BLUEPRINT: "update-blueprint",
            DELETE_BLUEPRINT: "delete-blueprint",
            UPLOAD_FILES: "upload-files",
          },
        },
      };`,
    }),

    new Paragraph({
      value: `For instance, if last message from user was "view-dashboard", they can receive CREATE_WORKSPACE or UPDATE_WORKSPACE action.`,
    }),

    new Header({
      value: 'Configuring Engine.IO on server side',
      className: 'text-[1.5rem]',
    }),

    new Paragraph({
      value: `After adding Engine.IO library, it can be used in different ways (listening on a port, intercepting requests for server, passing in requests). I'm going to intercept requests therefore initialization looks as follows:`,
    }),

    new Code({
      language: 'typescript',
      value: `import { Server } from "engine.io";
      
      export const initializeEngineIO = () => {
        return new Server({
          cors: {
            origin: APP.URL, // FE URL
          }
        });
      };
      `,
    }),

    new Paragraph({
      value: `and then I'm using "attach" as explained in docs:`,
    }),

    new Code({
      language: 'typescript',
      value: `
      const app = express();
        
      const engineIo = initializeEngineIO();
      
      const serverInstance = http.createServer(app);
      
      engineIo.attach(serverInstance);

      // @TODO initialize Engine.IO send/receive logic
      
      serverInstance.listen(PORT, () => {});`,
    }),

    new Paragraph({
      value: `Since I have JWT token to maintain authentication status (and itvault is only accessible by authenticated users), I'm going to modify "initializeEngineIO" module to include token verification and handshake only if it's valid (and not expired):`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `import { Server } from "engine.io";

        export const initializeEngineIO = () => {
          return new Server({
            cors: {
              origin: APP.URL,
              credentials: true, // By default, CORS does not include cookies on cross-origin requests.
                                 // The client code must set the withCredentials property to true in order to give permission.
            },
            
            allowRequest: async (request: IncomingAllowRequestMessage, callback) => {
                const cookie = request.headers.cookie;
          
                if (!cookie) {
                  return callback("Missing credentials!", false);
                }

                // @TODO handle token check and pass user information on success (e.g. userId)
  
                request.userId = userId;
          
                return callback(null, true);
              },
          });
        };
        `,
    }),

    new Paragraph({
      value: `I've defined custom type for request (IncomingAllowRequestMessage) to assign userId to request on successful token verification:`,
    }),

    new Code({
      language: 'typescript',
      value: `import { IncomingMessage } from "http";

      export type IncomingAllowRequestMessage = IncomingMessage & { userId?: number };`,
    }),

    new Paragraph({
      value: `Engine.IO library initialization done. Handshake on valid token done. Time to solve "@TODO initialize Engine.IO send/receive logic" part.`,
    }),

    new Paragraph({
      value: `Implement connected sockets "Manager" (as single instance throughout the lifetime of an application) and class which wraps socket and includes own logic.`,
    }),

    new Paragraph({
      value: `Let's start from socket wrapper.`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `export class SocketServiceMember {
        uid: number;
      
        sid: string;
      
        private _token: string;

        private _socket: Socket;
      
        latestMessage?: SocketSendMessage<any>;
      
        getLatestMessageValue<T>(): T | undefined {
          return this.latestMessage?.data;
        }
      
        constructor(socket: Socket) {
          // @NOTE if we reached that point, we are free to cast request's type to "IncomingAllowRequestMessage'
          const castedRequest = <IncomingAllowRequestMessage>socket.request;

          assert(castedRequest.userId);

          this._socket = socket;
          this.sid = socket.transport.sid;
          this.uid = castedRequest.userId;

          // @TODO read from request.headers.cookie or pass through request (like userId)
          const token = ""
      
          this._token = token;      
       
          socket.on("message", (message: string) => {
            let parsedMessage: SocketSendMessage | null = null;
      
            try {
              parsedMessage = JSON.parse(message);
            } catch (error) {
              this.printMessage(<string>error);
            }
      
            if (!parsedMessage) {
              return;
            }
      
            const { type } = parsedMessage;
      
            this.latestMessage = parsedMessage;      
          });
      
          socket.on("close", () => {
            // @NOTE so Manager can "remove" that member
            this.sid = "";
          });
        }
      
        async sendMessage<T>(data: SocketReceiveMessage<T>): Promise<void> {
          // @TODO verify if token is not expired before sending message
            
          this._socket.send(JSON.stringify(data));
        }
      }
          `,
    }),

    new Paragraph({
      value: `Each "SocketServiceMember" listens for incoming messages and exposes function to send message to the socket. By storing last socket's message, server can decide whether action should be sent or not, reducing redundant calls. All these "members" will be kept by "SocketServiceManager" allowing it to send events:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `export class SocketServiceManager implements ISocketServiceManager {
        private _initialized: boolean;
      
        private _members: SocketServiceMember[];
      
        constructor(
          @inject(Di.EngineIO)
          private _engineIo: Server
        ) {
          this._members = [];
        }
      
        initialize() {
          if (this._initialized) {
            console.log("SocketService manager is already initialized!");
      
            return;
          }
      
          this._engineIo.on("connection", (socket: Socket) => {
            const member = new SocketServiceMember(socket);
      
            this._members.push(member);
            
            socket.on("close", () => {
              this._members = this._members.filter(member => !!member.sid);      
            });
          });
      
          this._initialized = true;
        }
      
        async sendMessage<T>(
          options: SocketReceiveMessage<T> & {
            filter?: (
              members: SocketServiceMember[]
            ) => Promise<SocketServiceMember[]> | SocketServiceMember[];
          }
        ): Promise<void> {
          const { action, filter, data } = options;
      
          if (!this._initialized) {
            throw Error("SocketService manager not initialized!");
          }
      
          // @NOTE [1] determine TYPE and filter members with it
          const socketMessageKey = Object.keys(SOCKET_MESSAGES).find(message => {
            const actions =
              SOCKET_MESSAGES[message as keyof typeof SOCKET_MESSAGES].ACTIONS;
      
            return Object.values(actions).includes(action);
          });
      
          if (!socketMessageKey) {
            throw Error();
          }
      
          const type =
            SOCKET_MESSAGES[socketMessageKey as keyof typeof SOCKET_MESSAGES].TYPE;
      
          let validMembers: SocketServiceMember[] = [];
      
          validMembers = this._members.filter(
            ({ latestMessage }) => !!latestMessage && latestMessage.type === type
          );
      
          if (!validMembers.length) {
            return;
          }
      
          // @NOTE [2] handle additional filter (if provided)
          if (filter) {
            validMembers = await filter(validMembers);
          }
      
          for (const member of validMembers) {
            member.sendMessage<T>({ action, data });
          }
        }
      }`,
    }),

    new Paragraph({
      value: `Return to backend initialization to initialize Manager service:`,
    }),

    new Code({
      language: 'typescript',
      value: `
      const app = express();
        
      const engineIo = initializeEngineIO();
      
      const serverInstance = http.createServer(app);
      
      engineIo.attach(serverInstance);

      const socketServiceManager = // @TODO resolve SocketServiceManager dependency;
    
      socketServiceManager.initialize();
      
      serverInstance.listen(PORT, () => {});`,
    }),

    new Paragraph({
      value: `To send message to each ServiceSocketMember access SocketServiceManager dependency and use "sendMessage". Provide action name and data. Filter is optional.`,
    }),

    new Code({
      language: 'typescript',
      value: `const { UPDATE_WORKSPACE } = SOCKET_MESSAGES.VIEW_DASHBOARD.ACTIONS;

      this._socketServiceManager.sendMessage<UpdateWorkspaceData>({
        action: UPDATE_WORKSPACE,
  
        data: { id, ...body },
  
        // @NOTE collection of members that match the "action" provided above
        filter: async members => {
          // returns members that are permitted to receive event
        },
      });`,
    }),

    new Header({
      value: 'Configuring Engine.IO on client side',
      className: 'text-[1.5rem]',
    }),

    new Paragraph({
      value: `Assuming that "Engine.IO client library" have already been added, three more things need to be covered: (1) connection initialization, (2) option to send message to the server (3) option to handle message from the server.`,
    }),

    new Paragraph({
      value: `I've added (1) and (2) to one of the Pinia store's:`,
    }),

    new Code({
      lineNumbers: true,
      language: 'typescript',
      value: `interface IState {
        socket: Socket | null;
        wasSocketInitialized: boolean;
      }
      
      export const useAuthStore = defineStore("auth", {
        state: (): IState => ({
          socket: null,
          wasSocketInitialized: false,
        }),
      
        getters: {
          SOCKET_MESSAGE_TYPE() {
            return SOCKET_MESSAGES;
          },
        },
      
        actions: {
          initializeSocket() {
            this.wasSocketInitialized = true;
      
            // @TODO if not logged in, return
      
            const socket = new Socket('ws://...', {
              withCredentials: true,
            });
      
            socket.on("open", () => {
              this.socket = socket;
            });
          },
      
          socketSendMessage<T = void>(data: SocketSendMessage<T>): Promise<void> {
            return new Promise(resolve => {
              const interval = setInterval(() => {
                if (!this.socket) {
                  return;
                }
      
                // @TODO consider throwing error after e.g. 10 seconds of waiting?

                if (this.socket) {
                  clearInterval(interval);
      
                  this.socket.send(JSON.stringify(data));
      
                  resolve();
                }
              }, 1000);
            });
          },
        },
      });`,
    }),

    new Paragraph({
      value: `In case of (3), I've defined "helper":`,
    }),

    new Code({
      language: 'typescript',
      value: `export const onSocketReceiveMessage = (
        onMessage: <T>(data: SocketReceiveMessage<T>) => void
      ) => {
        const authStore = useAuthStore();
        const { socket } = storeToRefs(authStore);
      
        watch(socket, value => {
          if (!value) {
            return;
          }
      
          value.on("message", data => {
            let parsedData;
      
            try {
              parsedData = JSON.parse(data);
      
              onMessage(parsedData);
            } catch (error) {
              console.log("Failed to parse incoming message!");
            }
          });
        });
      };`,
    }),

    new Paragraph({
      value: `Everything is ready to be used. Trigger "initializeSocket" in root (or widely used) component. In my case it's header. It appears on each page for authenticated users.`,
    }),

    new Code({
      language: 'typescript',
      value: `const authStore = useAuthStore();
      
      onBeforeMount(() => {
        authStore.initializeSocket();
      });`,
    }),

    new Paragraph({
      value: `Inform server about entering dashboard by executing code below:`,
    }),

    new Code({
      language: 'typescript',
      value: `const authStore = useAuthStore();
      
      authStore.socketSendMessage({
        type: authStore.SOCKET_MESSAGE_TYPE.VIEW_DASHBOARD.TYPE,
      });`,
    }),

    new Paragraph({
      value: `and handle workspace update (if such event occurs):`,
    }),

    new Code({
      language: 'typescript',
      value: `onSocketReceiveMessage(({ action, data }) => {
        if (
          action ===
          authStore.SOCKET_MESSAGE_TYPE.VIEW_DASHBOARD.ACTIONS.UPDATE_WORKSPACE
        ) {
          workspacesStore.onUpdate(data as UpdateWorkspaceData);
      
          return;
        }
      });`,
    }),

    new Paragraph({
      value: `Done.`,
    }),
  ],
};
