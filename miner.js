const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const fetch = require('node-fetch');
const { TextEncoder, TextDecoder } = require('util');

const arb_account = "youraccountname";
const pk = "yourpk";

const mining_interval_ms = 1000;  // time in between each mine action, set as appropriate for your amount of CPU resources

const api_endpoint = "node_endpoint";
// e.g. "http://127.0.0.1:8888" or ask your BP for the endpoint url they provide

const signatureProvider = new JsSignatureProvider([pk]);
const rpc = new JsonRpc(api_endpoint, { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

async function heartbeat(){


        var t = new Date();
        console.log(t);

        var new_beat1 = {
          account: "gravyhftdefi",
          name: 'mine',
          authorization: [{
             actor: arb_account,
             permission: 'active',
          }],
          data: {
            miner: arb_account,
            rando: parseInt(Math.random() * 100000),
            symbol: "8,GRV"
          }
        };

        api.transact({
            actions: [new_beat1]
          }, {
            blocksBehind: 3,
            expireSeconds: 9,
          }).catch((error) => {
              console.error(error);
          });
}

heartbeat();
my_timer = setInterval(heartbeat, mining_interval);
