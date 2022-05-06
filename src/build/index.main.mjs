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
      1: [ctc0],
      4: [ctc0],
      5: [ctc0]
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_Address;
  
  
  const v84 = stdlib.protect(ctc0, interact.meow, 'for Creator\'s interact field meow');
  
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
      
      
      const {data: [], secs: v87, time: v86, didSend: v23, from: v85 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v23, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v90, time: v89, didSend: v27, from: v88 } = txn2;
  ;
  let v91 = true;
  let v92 = v89;
  
  while (await (async () => {
    
    return v91;})()) {
    const txn3 = await (ctc.sendrecv({
      args: [v85, v84],
      evt_cnt: 1,
      funcNum: 3,
      lct: v92,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:23:16:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v106], secs: v108, time: v107, didSend: v54, from: v105 } = txn3;
        
        ;
        const v110 = stdlib.addressEq(v85, v105);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v106], secs: v108, time: v107, didSend: v54, from: v105 } = txn3;
    ;
    const v110 = stdlib.addressEq(v85, v105);
    stdlib.assert(v110, {
      at: './index.rsh:20:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn4 = await (ctc.sendrecv({
      args: [v85],
      evt_cnt: 0,
      funcNum: 4,
      lct: v107,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:32:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v113, time: v112, didSend: v60, from: v111 } = txn4;
        
        ;
        const v114 = stdlib.addressEq(v85, v111);
        ;
        const cv91 = true;
        const cv92 = v112;
        
        await (async () => {
          const v91 = cv91;
          const v92 = cv92;
          
          if (await (async () => {
            
            return v91;})()) {
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
      tys: [ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v113, time: v112, didSend: v60, from: v111 } = txn4;
    ;
    const v114 = stdlib.addressEq(v85, v111);
    stdlib.assert(v114, {
      at: './index.rsh:32:17:dot',
      fs: ['at ./index.rsh:30:20:application call to [unknown function] (defined at: ./index.rsh:30:20:function exp)'],
      msg: 'sender correct',
      who: 'Creator'
      });
    const cv91 = true;
    const cv92 = v112;
    
    v91 = cv91;
    v92 = cv92;
    
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v23, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v85],
    evt_cnt: 0,
    funcNum: 1,
    lct: v86,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:18:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v90, time: v89, didSend: v27, from: v88 } = txn2;
      
      ;
      const v91 = true;
      const v92 = v89;
      
      if (await (async () => {
        
        return v91;})()) {
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
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v90, time: v89, didSend: v27, from: v88 } = txn2;
  ;
  let v91 = true;
  let v92 = v89;
  
  while (await (async () => {
    
    return v91;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v106], secs: v108, time: v107, didSend: v54, from: v105 } = txn3;
    ;
    const v110 = stdlib.addressEq(v85, v105);
    stdlib.assert(v110, {
      at: './index.rsh:20:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v113, time: v112, didSend: v60, from: v111 } = txn4;
    ;
    const v114 = stdlib.addressEq(v85, v111);
    stdlib.assert(v114, {
      at: './index.rsh:32:17:dot',
      fs: ['at ./index.rsh:30:20:application call to [unknown function] (defined at: ./index.rsh:30:20:function exp)'],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    stdlib.protect(ctc1, await interact.got(v106), {
      at: './index.rsh:35:29:application',
      fs: ['at ./index.rsh:34:21:application call to [unknown function] (defined at: ./index.rsh:34:25:function exp)', 'at ./index.rsh:30:20:application call to [unknown function] (defined at: ./index.rsh:30:20:function exp)'],
      msg: 'got',
      who: 'Subscriber'
      });
    
    const cv91 = true;
    const cv92 = v112;
    
    v91 = cv91;
    v92 = cv92;
    
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
  appApproval: `BiAEAAEEBSYCAQAAIjUAMRhBAXUpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEDDEAAdkkkDEAALyQSRCU0ARJENARJIhJMNAISEUQoZEk1AzX/gASRJzTzsDT/MQASRDT/IzIGQgCgSCQ0ARJENARJIhJMNAISEUQoZEk1AzX/STUFNf6ABHWAyX80/lCwNP8xABJENP8oSwFXACBnSCU1ATIGNQJCAJxJIwxAACYjEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEmouRdLA0AyMyBkIAM0giNAESRDQESSISTDQCEhFEgARfDav6sIGgjQaIAI4xAChLAVcAIGdIIzUBMgY1AkIAPTX/Nf41/TT+QQAUNP0oSwFXACBnSCQ1ATIGNQJCAB5CAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
  1: {
    at: './index.rsh:17:28:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:41:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:20:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:31:23:after expr stmt semicolon',
    fs: ['at ./index.rsh:30:20:application call to [unknown function] (defined at: ./index.rsh:30:20:function exp)'],
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
