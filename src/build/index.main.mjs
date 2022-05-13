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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'));
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v61, time: v60, didSend: v22, from: v59 } = txn1;
      
      ;
      const v62 = true;
      const v63 = v60;
      
      if (await (async () => {
        
        return v62;})()) {
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
  const {data: [], secs: v61, time: v60, didSend: v22, from: v59 } = txn1;
  ;
  let v62 = true;
  let v63 = v60;
  
  while (await (async () => {
    
    return v62;})()) {
    const v71 = stdlib.protect(ctc0, await interact.meow(), {
      at: './index.rsh:28:48:application',
      fs: ['at ./index.rsh:27:15:application call to [unknown function] (defined at: ./index.rsh:27:19:function exp)'],
      msg: 'meow',
      who: 'Creator'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v59, v71, v59],
      evt_cnt: 2,
      funcNum: 2,
      lct: v63,
      onlyIf: true,
      out_tys: [ctc0, ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:31:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v73, v74], secs: v76, time: v75, didSend: v38, from: v72 } = txn2;
        
        ;
        const v77 = stdlib.addressEq(v59, v72);
        ;
        const cv62 = true;
        const cv63 = v75;
        
        await (async () => {
          const v62 = cv62;
          const v63 = cv63;
          
          if (await (async () => {
            
            return v62;})()) {
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
      tys: [ctc1, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v73, v74], secs: v76, time: v75, didSend: v38, from: v72 } = txn2;
    ;
    const v77 = stdlib.addressEq(v59, v72);
    stdlib.assert(v77, {
      at: './index.rsh:31:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const cv62 = true;
    const cv63 = v75;
    
    v62 = cv62;
    v63 = cv63;
    
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v61, time: v60, didSend: v22, from: v59 } = txn1;
  ;
  let v62 = true;
  let v63 = v60;
  
  while (await (async () => {
    
    return v62;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 2,
      out_tys: [ctc0, ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v73, v74], secs: v76, time: v75, didSend: v38, from: v72 } = txn2;
    ;
    const v77 = stdlib.addressEq(v59, v72);
    stdlib.assert(v77, {
      at: './index.rsh:31:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v79 = {
      owner: v74,
      text: v73
      };
    stdlib.protect(ctc2, await interact.got(v79), {
      at: './index.rsh:33:23:application',
      fs: ['at ./index.rsh:33:23:application call to [unknown function] (defined at: ./index.rsh:33:23:function exp)', 'at ./index.rsh:33:23:application call to "liftedInteract" (defined at: ./index.rsh:33:23:application)'],
      msg: 'got',
      who: 'Subscriber'
      });
    
    const cv62 = true;
    const cv63 = v75;
    
    v62 = cv62;
    v63 = cv63;
    
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
  appApproval: `BiAFAAECA/QDJgIAAQAiNQAxGEEBDyhkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJAxAAEYkEkQlNAESRDQESSISTDQCEhFEKWRJNQM1/0k1BUkiIQRYNf4hBIEgWDX9gASwh8FuNP5QNP1QsDT/MQASRDT/IzIGQgApIhJEIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiACDMQAjMgZCAAA1/zX+Nf00/kEAFDT9KUsBVwAgZ0glNQEyBjUCQgAfQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
    at: './index.rsh:41:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:25:17:after expr stmt semicolon',
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
