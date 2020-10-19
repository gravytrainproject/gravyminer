# gravyminer
Mine GRV with Nodejs

GRAVY is a HFT Trading strategy on the EOS main-net. Its business logic is driven by miners who push mine actions to the chain at regular intervals. The more mine actions pushed to the system, the more arbitrage profits earned by the trading strategy. 

The GRAVYMINER is a Nodejs script which pushes mine actions at regular intervals to the GRAVY mining contract (gravyhftdefi). Miners donate their CPU resources and receive GRV in return for each successful mine action. GRV can be staked in order to earn a portion of EOS trading profits. 


# How to Mine GRV
<b>Step 1</b>: Register miner by pushing regminer action to gravyhftdefi contract e.g. 
 
> cleos push action gravyhftdefi regminer "[\"youracct\",\"8,GRV\"]" -p youracct@active

<b>Step 2</b>: Replace your account name (arb_account) and private key (pk) in miner.js

<b>Step 3</b>: Replace your preferred api node endpoint in miner.js

<b>Step 4</b>: Install dependencies

> npm install eosjs node-fetch

<b>Step 5</b>: Start mining!!

> node miner.js &> miner.log

# How to Stake GRV
<b>Step 1</b>: Mine or buy some GRV

<b>Step 2</b>: Push the stakegrv action e.g.
> cleos push action gravyhftdefi stakegrv "[\"youracct\",\"10.00000000 GRV\"]" -p youracct@active

<b>Step 3</b>: Each day EOS rewards are paid out pro-rata to your stake (4% of total staking reward pool is paid out daily)

# How to Unstake GRV

<b>Step 1</b>: Begin unstaking process
> cleos push action gravyhftdefi unstakegrv "[\"youracct\",\"10.00000000 GRV\"]" -p youracct@active

<b>Step 2</b>: Wait 24 hours...

<b>Step 3</b>: Complete unstake by pushing refundgrv action
> cleos push action gravyhftdefi refundgrv "[\"youracct\"]" -p youracct@active
