#! /bin/bash
read -p 'Delay between trx cycles (in seconds)? : ' slp
for (( c=1; c<=9999999999999999; c++ ))
do  
    cleos wallet unlock --password PWD
    cleos push action gravyhftdefi stakegrv "["ACCT","10.00000000 GRV"]" -p ACCT@active
    sleep $slp
done
