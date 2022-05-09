// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:17:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:17:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v59, time: v58, didSend: v22, from: v57 } = txn1;
      
      ;
      const v60 = true;
      const v61 = v58;
      
      if (await (async () => {
        
        return v60;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v59, time: v58, didSend: v22, from: v57 } = txn1;
  ;
  let v60 = true;
  let v61 = v58;
  
  while (await (async () => {
    
    return v60;})()) {
    const v69 = stdlib.protect(ctc0, await interact.meow(), {
      at: './index.rsh:25:48:application',
      fs: ['at ./index.rsh:24:15:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
      msg: 'meow',
      who: 'Creator'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v57, v69],
      evt_cnt: 1,
      funcNum: 2,
      lct: v61,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:27:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v71], secs: v73, time: v72, didSend: v37, from: v70 } = txn2;
        
        ;
        const v74 = stdlib.addressEq(v57, v70);
        ;
        const cv60 = true;
        const cv61 = v72;
        
        await (async () => {
          const v60 = cv60;
          const v61 = cv61;
          
          if (await (async () => {
            
            return v60;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v71], secs: v73, time: v72, didSend: v37, from: v70 } = txn2;
    ;
    const v74 = stdlib.addressEq(v57, v70);
    stdlib.assert(v74, {
      at: './index.rsh:27:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const cv60 = true;
    const cv61 = v72;
    
    v60 = cv60;
    v61 = cv61;
    
    continue;
    
    }
  return;
  
  
  };
export async function Subscriber(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v59, time: v58, didSend: v22, from: v57 } = txn1;
  ;
  let v60 = true;
  let v61 = v58;
  
  while (await (async () => {
    
    return v60;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v71], secs: v73, time: v72, didSend: v37, from: v70 } = txn2;
    ;
    const v74 = stdlib.addressEq(v57, v70);
    stdlib.assert(v74, {
      at: './index.rsh:27:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    stdlib.protect(ctc1, await interact.got(v71), {
      at: './index.rsh:29:23:application',
      fs: ['at ./index.rsh:29:23:application call to [unknown function] (defined at: ./index.rsh:29:23:function exp)', 'at ./index.rsh:29:23:application call to "liftedInteract" (defined at: ./index.rsh:29:23:application)'],
      msg: 'got',
      who: 'Subscriber'
      });
    
    const cv60 = true;
    const cv61 = v72;
    
    v60 = cv60;
    v61 = cv61;
    
    continue;
    
    }
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECAyYCAAEAIjUAMRhBAQAoZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQAA3JBJEJTQBEkQ0BEkiEkw0AhIRRClkSTUDNf9JNQU1/oAEVtqdTjT+ULA0/zEAEkQ0/yMyBkIAKSISRCI0ARJENARJIhJMNAISEUSABF8Nq/qwgaCNBogAgzEAIzIGQgAANf81/jX9NP5BABQ0/SlLAVcAIGdIJTUBMgY1AkIAH0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:34:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:22:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Creator": Creator,
  "Subscriber": Subscriber
  };
export const _APIs = {
  };
