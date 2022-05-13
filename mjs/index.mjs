import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const acc = await stdlib.newTestAccount(startingBalance);

const Creator = {
  meow: async () => {
    const meow = await ask(
      `Type in a blog post.. (1000 characters max including space)`
    );
    return meow;
  }
}

const Subscriber = {
  got: ({ text, owner }) => {
    console.log('----------new post----------');
    console.log(text)
    console.log(owner)
    console.log('----------------------------');
  }
}



const createStream = async () => {
  const isBlogOwner = await ask(
    `Do you want to create a blog?`,
    yesno
  );
  const who = isBlogOwner ? 'Owner' : 'Subscriber';

  console.log(`Starting as ${who}`);

  let ctc = null;
  if (isBlogOwner) {
    ctc = acc.contract(backend);
    backend.Creator(ctc, Creator)
    console.log('Deploying Blog...');
    const info = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log('Contract info. Subscriber need this to connect..')
    console.log(info);
  } else {
    const info = await ask(
      `Please paste the contract info of the blog you want to subscribe to:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
    backend.Subscriber(ctc, Subscriber);
    console.log("...Successfully Connected...")
  }
};

await createStream();
