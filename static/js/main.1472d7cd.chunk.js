(this["webpackJsonpnear-zoo-nft"]=this["webpackJsonpnear-zoo-nft"]||[]).push([[0],{110:function(t,e,n){},117:function(t,e){},127:function(t,e){},174:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(93),o=n.n(r),c=(n(110),n(31)),s=n(7),l=n.n(s),d="zoo-nft.adriano.testnet";var u=function(t){switch(t){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:d,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:d,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(t,"'."))}},m=n(46),p=(n(52),u("testnet"));function h(){return(h=Object(c.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.connect)(Object.assign({deps:{keyStore:new m.keyStores.BrowserLocalStorageKeyStore}},p));case 2:e=t.sent,window.walletConnection=new m.WalletConnection(e),window.accountId=window.walletConnection.getAccountId(),window.contract=new m.Contract(window.walletConnection.account(),p.contractName,{viewMethods:["nft_tokens_for_owner"],changeMethods:["nft_mint"]});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f=n(194),j=n(195),x=n(197),g=n(198),b=n(192),w=n(2);function O(){var t=window.walletConnection.account();return Object(w.jsx)(f.a,{sx:{flexGrow:1},children:Object(w.jsx)(j.a,{position:"static",children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(g.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"NEAR Zoo NFT"}),t.accountId?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g.a,{variant:"caption",children:t.accountId}),Object(w.jsx)(b.a,{sx:{marginLeft:2},variant:"outlined",color:"inherit",onClick:function(){return window.walletConnection.signOut(),void window.location.reload()},children:"Logout"})]}):Object(w.jsx)(b.a,{color:"inherit",onClick:function(){window.walletConnection.requestSignIn(p.contractName)},children:"Login"})]})})})}var v=[{title:"Lion",description:"A symbol of courage and bravery - the majestic lion king of animals.",class:"mammals"},{title:"Wolf",description:"An intelligent and freedom-loving predator, a relative of dogs of all breeds.",class:"mammals"},{title:"Capybara",description:"Kind and charming giant among rodents.",class:"mammals"},{title:"Giraffe",description:"An elegant giant, the tallest animal on Earth.",class:"mammals"},{title:"Hippopotamus",description:"The largest and strongest inhabitant of rivers and lakes in Africa.",class:"mammals"},{title:"NileCrocodile",description:"The largest and most formidable predator of African rivers and lakes.",class:"reptiles"},{title:"WaterAgama",description:"A beautiful and unusual oriental symbol of dragon.",class:"reptiles"},{title:"Barnacle",description:"A small, beautifully colored, few goose.",class:"birds"},{title:"Peacock",description:"One of the most beautiful birds in the world because of its luxurious plumage.",class:"birds"},{title:"Vulture",description:'The name of this bird comes from the Slavic word "strva", meaning "carrion", "waste".',class:"birds"},{title:"MarineToad",description:"One of the largest and most venomous toads in South America.",class:"amphibians"},{title:"AustralianBlueTreeFrog",description:"One of the largest tree frogs.",class:"amphibians"}],y=n(27);var k=function(){var t=window.walletConnection.account(),e=function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,a,i,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Math.floor(Math.random()*v.length),n=v[e],a=n.title,i=n.description,r={token_id:"".concat(window.accountId,"-").concat(a,"-").concat(Date.now()),metadata:{title:a,description:i,media:"https://adrianosingolani.github.io/near-zoo-nft/assets/".concat(a,".jpg")},receiver_id:window.accountId},console.log(r),t.next=6,window.contract.nft_mint(r,3e14,new y("1000000000000000000000000"));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)(f.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",marginY:4},children:Object(w.jsx)(f.a,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:Object(w.jsx)(b.a,{onClick:function(){return e()},disabled:!t.accountId,variant:"contained",children:"Mint new NFT"})})})},C=n(23),_=n(199),A=n(200);var I=function(){var t=Object(a.useState)([]),e=Object(C.a)(t,2),n=e[0],i=e[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){var t=Object(c.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.contract.nft_tokens_for_owner({account_id:window.accountId}).then((function(t){i(t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g.a,{variant:"h4",children:"Collection"}),Object(w.jsxs)(f.a,{sx:{marginBottom:4},children:[Object(w.jsx)(g.a,{variant:"h6",children:"Amphibians"}),Object(w.jsx)(f.a,{sx:{display:"flex",flexDirection:"row"},children:v.filter((function(t){return"amphibians"===t.class})).map((function(t,e){return Object(w.jsx)(_.a,{sx:{maxWidth:"350px",padding:1,border:"2px solid #777",marginRight:2},children:Object(w.jsx)(A.a,{component:"img",image:"https://adrianosingolani.github.io/near-zoo-nft/assets/".concat(t.title,".jpg"),alt:t.title,sx:n.some((function(e){return e.metadata.title===t.title}))?null:{filter:"grayscale(100%)",opacity:.5}})},"amphibian_".concat(e))}))})]}),Object(w.jsxs)(f.a,{sx:{marginBottom:4},children:[Object(w.jsx)(g.a,{variant:"h6",children:"Birds"}),Object(w.jsx)(f.a,{sx:{display:"flex",flexDirection:"row"},children:v.filter((function(t){return"birds"===t.class})).map((function(t,e){return Object(w.jsx)(_.a,{sx:{maxWidth:"350px",padding:1,border:"2px solid #777",marginRight:2},children:Object(w.jsx)(A.a,{component:"img",image:"https://adrianosingolani.github.io/near-zoo-nft/assets/".concat(t.title,".jpg"),alt:t.title,sx:n.some((function(e){return e.metadata.title===t.title}))?null:{filter:"grayscale(100%)",opacity:.5}})},"bird_".concat(e))}))})]}),Object(w.jsxs)(f.a,{sx:{marginBottom:4},children:[Object(w.jsx)(g.a,{variant:"h6",children:"Mammals"}),Object(w.jsx)(f.a,{sx:{display:"flex",flexDirection:"row"},children:v.filter((function(t){return"mammals"===t.class})).map((function(t,e){return Object(w.jsx)(_.a,{sx:{maxWidth:"350px",padding:1,border:"2px solid #777",marginRight:2},children:Object(w.jsx)(A.a,{component:"img",image:"https://adrianosingolani.github.io/near-zoo-nft/assets/".concat(t.title,".jpg"),alt:t.title,sx:n.some((function(e){return e.metadata.title===t.title}))?null:{filter:"grayscale(100%)",opacity:.5}})},"mammal_".concat(e))}))})]}),Object(w.jsxs)(f.a,{sx:{marginBottom:4},children:[Object(w.jsx)(g.a,{variant:"h6",children:"Reptiles"}),Object(w.jsx)(f.a,{sx:{display:"flex",flexDirection:"row"},children:v.filter((function(t){return"reptiles"===t.class})).map((function(t,e){return Object(w.jsx)(_.a,{sx:{maxWidth:"350px",padding:1,border:"2px solid #777",marginRight:2},children:Object(w.jsx)(A.a,{component:"img",image:"https://adrianosingolani.github.io/near-zoo-nft/assets/".concat(t.title,".jpg"),alt:t.title,sx:n.some((function(e){return e.metadata.title===t.title}))?null:{filter:"grayscale(100%)",opacity:.5}})},"reptile_".concat(e))}))})]})]})},B=n(201);var S=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(O,{}),Object(w.jsxs)(B.a,{children:[Object(w.jsx)(k,{}),Object(w.jsx)(I,{})]})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),r(t),o(t)}))};window.nearInitPromise=function(){return h.apply(this,arguments)}().then((function(){o.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(S,{})}))})).catch(console.error),F()}},[[174,1,2]]]);
//# sourceMappingURL=main.1472d7cd.chunk.js.map