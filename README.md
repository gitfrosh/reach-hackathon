# Reach on Algorand - Microblog #meow

A microblog implementation for Algorand on Reach platform. Creator initiates blog and subscriber receives posts in realtime.

Prerequisites:

-   Install the MyAlgoConnect wallet extension on [Chrome](https://www.google.com/chrome/.
-   Switch to testnet.
-   Get some ALGO at a faucet for the acount.

To see the demo in action run:

```bash
npm install
npm run start
```

Open http://localhost:3000 in Chrome;
create a new blog, copy the stream info into clipboard and subscribe to the blog at the same time. The 'meow' whatever you want.

If you modify `src/index.rsh`, you must run the `compile-rsh` script so that React will pick up the changes:

```bash
npm run compile-rsh
```

If you want to test the contract with plain javascript CLI, (set index.js to index.js.bk and get index.mjs from mjs folder into main folder) and run:

```bash
npm run run-rsh
```
