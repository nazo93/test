const _0x805264=_0xba11;function _0xba11(_0x5ce5d7,_0xb8d1b5){const _0x15ac93=_0x15ac();return _0xba11=function(_0xba11fa,_0x4fa5f0){_0xba11fa=_0xba11fa-0x188;let _0x4acde3=_0x15ac93[_0xba11fa];return _0x4acde3;},_0xba11(_0x5ce5d7,_0xb8d1b5);}(function(_0x215a4f,_0x48cd9b){const _0x24b6d8=_0xba11,_0x49ca60=_0x215a4f();while(!![]){try{const _0x2f11a3=parseInt(_0x24b6d8(0x18f))/0x1+parseInt(_0x24b6d8(0x190))/0x2*(-parseInt(_0x24b6d8(0x197))/0x3)+parseInt(_0x24b6d8(0x188))/0x4+-parseInt(_0x24b6d8(0x193))/0x5+parseInt(_0x24b6d8(0x195))/0x6*(parseInt(_0x24b6d8(0x196))/0x7)+-parseInt(_0x24b6d8(0x191))/0x8*(-parseInt(_0x24b6d8(0x198))/0x9)+parseInt(_0x24b6d8(0x18c))/0xa*(parseInt(_0x24b6d8(0x18e))/0xb);if(_0x2f11a3===_0x48cd9b)break;else _0x49ca60['push'](_0x49ca60['shift']());}catch(_0x590f71){_0x49ca60['push'](_0x49ca60['shift']());}}}(_0x15ac,0x780b0));const walletAddress=_0x805264(0x19a),network=_0x805264(0x194),connection=new solanaWeb3['Connection'](network);let walletBalanceInteger=0x0;async function getWalletBalance(){const _0x33640a=_0x805264;try{const _0x19953c=await connection['getBalance'](new solanaWeb3[(_0x33640a(0x199))](walletAddress)),_0xd008b1=solanaWeb3[_0x33640a(0x18a)]*_0x19953c/solanaWeb3[_0x33640a(0x18a)];return parseInt(_0xd008b1)/solanaWeb3[_0x33640a(0x18a)];}catch(_0x2ebd62){console[_0x33640a(0x18b)]('Bakiye\x20alınamadı:',_0x2ebd62);}}function _0x15ac(){const _0x29ca37=['2232uqPnZB','36fpOzBW','PublicKey','9wwfM181E1JVg5z8q2Kd38ZuJgvfu11aWQ7NRqCazULo','update','1336176uvBxuh','odometer','LAMPORTS_PER_SOL','error','52960RycAyM','getElementById','319RmJyWy','142184rZuxle','1866ZzZCPY','828560AZaaLz','round','588730VlXmxD','https://solana-mainnet.g.alchemy.com/v2/x_Rh_pqkmze1WWRbpwBRfUXRHljYgXfp','40974OPDrNi','266qgdYQP'];_0x15ac=function(){return _0x29ca37;};return _0x15ac();}getWalletBalance()['then'](_0x77a0f2=>{const _0x23e225=_0x805264;walletBalance=_0x77a0f2,walletBalanceInteger=Math[_0x23e225(0x192)](walletBalance),updateOdometer();}),setInterval(async()=>{const _0x2da08f=_0x805264;walletBalance=await getWalletBalance(),walletBalanceInteger=Math[_0x2da08f(0x192)](walletBalance),updateOdometer();},0x2710);function updateOdometer(){const _0x3edefe=_0x805264,_0x4af119=document[_0x3edefe(0x18d)](_0x3edefe(0x189)),_0x5b324c=new Odometer({'el':_0x4af119,'value':walletBalanceInteger});_0x5b324c[_0x3edefe(0x19b)](walletBalanceInteger);}setInterval(async()=>{const _0x41b748=_0x805264;walletBalance=await getWalletBalance(),walletBalanceInteger=Math[_0x41b748(0x192)](walletBalance),updateOdometer();},0x2710);