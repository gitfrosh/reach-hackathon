# Reach on Algorand - Microblog #meow

A microblog implementation for Algorand on Reach platform. Creator initiates blog and subscriber receives posts in realtime.

Prerequisites:

* Install the MyAlgoConnect wallet extension on both [Chrome](https://www.google.com/chrome/) and [Firefox](https://www.mozilla.org/en-US/firefox/).
* Switch to testnet.
* Get some ALGO at a faucet for both accounts.

To see the demo in action (set index.mjs to index.mjs.bk) and run:

```bash
npm install
npm run start
```

Open http://localhost:3000 in both Firefox and Chrome;
run the app as Creator on one, and Subscriber on the other.

If you modify `src/index.rsh`, you must run the `compile-rsh` script so that React will pick up the changes:

```bash
npm run compile-rsh
```
If you want to test the contract with plain javascript, (set index.js to index.js.bk) and run:
```bash
npm run run-rsh
```