import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accBlog = await stdlib.newTestAccount(startingBalance);
const accSubscriber = await stdlib.newTestAccount(startingBalance);

const TESTPOST = 'Lorem ipsum';
const BLOGNAME = 'Testi';


const createStream = async () => {

  console.log('Stream starting...');

  const ctcBlog = accBlog.contract(backend);
  const ctcSubscriber = accSubscriber.contract(backend, ctcBlog.getInfo());

  await Promise.all([
    // backend.Blog(ctcBlog, {
    //   getParams: () => {
    //     console.log("Create blog ...")
    //     return {
    //       blogName: "Testi",
    //       blogOwner: ctcBlog
    //     };
    //   },
    // }),

    backend.Blog(ctcBlog, {
      createStream: () => {
        console.log(accBlog.networkAccount.addr)
        return ({
          blogOwner: accBlog.networkAccount.addr,
          id: BLOGNAME
        })
      }
    }),

    backend.Post(ctcBlog, {
      createPost: () => {
        console.log("Creating post ...")
        console.log(TESTPOST);
        return ({
          owner: accBlog.networkAccount.addr,
          text: TESTPOST
        })
      },
    }),

    backend.Subscriber(ctcSubscriber, {
      // seePost: (post) => {
      //   console.log("Seeing post ...")
      //   console.log(post)
      //   return;
      // }
      subscribe: () => {
        console.log("Subscribing ...")
        return;
      }
    }),
  ]);
  console.log('Goodbye!');
};

await createStream();
