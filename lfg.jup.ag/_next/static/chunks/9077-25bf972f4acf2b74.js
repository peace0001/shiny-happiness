"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9077,2580,4566],{54566:function(e,t,n){n.r(t);var r=n(93981),i=n(13838),a=n(5941),s=n(25546),l=n(29541);t.default=function(e){var t,n=e.tokenInfo,o=e.amount,c=e.maxDecimals,u=e.prefix,d=(0,a.y6)(),x=d.tokenPriceMap,f=d.getUSDValue,p=n.address;(0,r.useEffect)((function(){p&&f([p])}),[p,f]);var h=p&&(null===(t=x[p])||void 0===t?void 0:t.usd)||0,m=new i.Z(o||0).mul(h).toNumber();return!m||m<=0?(0,l.jsx)(l.Fragment,{children:""}):c&&new i.Z(m).lte(.1)?(0,l.jsxs)(l.Fragment,{children:[u,"$",s.uf.format(m,c)]}):(0,l.jsxs)(l.Fragment,{children:[u,"$",s.uf.format(m,2)]})}},71130:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(93981),i=n(50269),a=n(89388),s=n(29541),l=function(e){var t=e.children,n=e.className,i=void 0===n?"":n,l=e.height,o=e.maxHeight,c=e.expanded,u=(0,r.useState)(l),d=u[0],x=u[1];(0,r.useEffect)((function(){x(c?o:l)}),[l,o,c]);var f=c?"animate-fade-in":"animate-fade-out";return(0,s.jsx)("div",{className:(0,a.cn)("transition-all duration-200 overflow-hidden",f,i),style:{height:d,maxHeight:o},children:t})},o=function(e){var t=e.message,n=e.iconSize,r=void 0===n?20:n,o=e.className;return(0,s.jsx)(l,{height:0,maxHeight:"auto",expanded:Boolean(t),children:(0,s.jsxs)("div",{className:(0,a.cn)("md:px-6 mt-1 flex items-center text-xs fill-current text-black-50 dark:text-white font-semibold",o),children:[(0,s.jsx)(i.Z,{width:r,style:{minWidth:r},height:r}),(0,s.jsx)("span",{className:"ml-2",children:t})]})})}},17463:function(e,t,n){n.d(t,{x:function(){return S}});var r=n(97620),i=n(73360),a=n(7761),s=n(93981),l=n(59394),o=n(85394),c=n(54524),u=n(88951),d=n(5941),x=n(97431),f=n(64138),p=n(39268),h=n.n(p),m=n(25546),g=n(57731),v=n(22580),b=n(86150),j=n(89388),w=n(57917),y=n(72257),k=n(2997),N=n(29541),S=(h()((function(){return Promise.all([n.e(7497),n.e(9523),n.e(7061),n.e(6514),n.e(5145),n.e(5841),n.e(4371),n.e(1360),n.e(9799)]).then(n.bind(n,99584))}),{ssr:!1,loading:function(){return(0,N.jsx)(f.Z,{width:448,height:595})},loadableGenerated:{webpack:function(){return[99584]}}}),function(e){var t=e.toastProps,n=t.closeToast,f=t.toastId,p=e.className,h=e.customTitle,S=((0,d.Os)().publicKey,(0,w.Sk)(f.toString())),C=S.tx,O=S.errorTitle,M=S.description,P=S.shouldShowFeedbackLink,I=S.shouldShowUpdatePriorityFee,F=S.customTitle,L=S.shouldShowShareLink,Z=(0,d.jB)().asLegacyTransaction,T=(0,k.JT)(),E=T.openModal,_=(T.closeModal,s.useState(!1)),A=(0,r.Z)(_,2),D=A[0],R=A[1],V=(0,s.useCallback)((function(){E((0,N.jsx)(y.ZP,{filterDisplay:"priorityOnly"}),{canDismiss:!1})}),[E]),U=(0,s.useMemo)((function(){return{waitingWalletToSign:!C&&!O,hasPendingTxs:"loading"===(null===C||void 0===C?void 0:C.status)||(null===C||void 0===C?void 0:C.hasAdditionalPendingSteps),isSwapSuccess:"success"===(null===C||void 0===C?void 0:C.status)}}),[C,O]),G=U.waitingWalletToSign,B=U.hasPendingTxs,H=U.isSwapSuccess,W=(0,s.useRef)(null);if((0,s.useEffect)((function(){var e,t;(G||!C||B||W.current||(W.current=new m.o6(n,5e3)),D)?null===(e=W.current)||void 0===e||e.pause():null===(t=W.current)||void 0===t||t.resume()}),[B,G,n,C,D]),!C&&!O)return null;var z=F||h||(G?a.ag._("Waiting for wallet to sign transaction"):B?a.ag._("Confirming transaction"):H?a.ag._("Swap Success"):a.ag._("Swap Failed{0}",{0:O&&" (".concat(O,")")}));return(0,N.jsxs)("div",{className:(0,j.cn)("bg-white dark:bg-black dark:text-white px-6 py-5 shadow-lg rounded-lg max-w-[420px]",p),children:[(0,N.jsx)("div",{className:"flex justify-between items-center mb-1",children:(0,N.jsx)("div",{className:"text-lg font-semibold",children:z})}),(0,N.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,N.jsxs)("div",{className:"text-[13px] leading-4 text-black-50 dark:text-white-50",children:[M,!Z&&O&&!C&&(0,N.jsx)("div",{children:(0,N.jsx)(i.cC,{id:"This wallet might not support Versioned Transaction, turn it off and try again."})}),(0,N.jsx)("div",{className:"text-xs flex flex-col text-black-75 dark:text-white-75",children:function(){if(!C)return null;var e=C.status,t=C.txid,n=C.additionalSteps;return"fail-no-txid"===e?(0,N.jsx)("span",{children:C.stepText}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"flex space-x-2.5 mt-2",children:[("loading"===e||G)&&(0,N.jsx)(o.Z,{width:20,height:20}),"unknown"===e&&(0,N.jsx)(g.Z,{width:20,height:20}),"fail"===e&&(0,N.jsx)(c.Z,{width:20,height:20}),"success"===e&&(0,N.jsx)(u.Z,{width:20,height:20}),(0,N.jsxs)("span",{className:"my-auto flex whitespace-nowrap space-x-0.5",children:[t?(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(l.Z,{txid:t})}):null,C.stepText&&(0,N.jsxs)(N.Fragment,{children:[t&&(0,N.jsx)("span",{children:":"}),(0,N.jsx)("span",{className:(0,j.cn)(t&&"pl-0.5"),children:C.stepText})]})]})]}),null===n||void 0===n?void 0:n.map((function(e,t){return(0,N.jsx)("div",{children:e},t)}))]})}()})]}),L&&null!==C&&void 0!==C&&C.txid?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("button",{type:"button",onClick:function(){return R(!0)},className:(0,j.cn)("rounded-lg flex px-3 py-2  fill-current space-x-2 text-xs font-semibold items-center w-auto self-start border border-white/10","hover:bg-v2-primary/5 hover:border-v2-primary/10 hover:text-v2-primary"),children:[(0,N.jsx)("span",{children:a.ag._("Share")}),(0,N.jsx)(b.Z,{})]}),(0,N.jsx)(v.default,{txid:C.txid,open:D,onClose:function(){return R(!1)}})]}):null,I&&(0,N.jsx)("div",{className:"flex items-center space-x-2",children:(0,N.jsx)("button",{className:"bg-v2-background border hover:dark:border-v2-primary/50 hover:text-v2-primary dark:border-white/[.35] py-1 px-3 rounded flex items-center text-xs dark:text-white/35 w-fit",onClick:function(){n(),V()},children:(0,N.jsx)(i.cC,{id:"Update Priority Fee"})})}),P?(0,N.jsx)("div",{className:"flex items-center space-x-2",children:(0,N.jsxs)("a",{className:"bg-transparent border border-black/[.35] dark:border-white/[.35] py-1 px-2 rounded flex items-center text-xs dark:text-white/50 text-black/50 w-fit",href:"https://discord.gg/jup",target:"_blank",rel:"noreferrer",children:[(0,N.jsx)("div",{className:"mr-1 w-4 h-4 text-black/50 dark:text-white/50",children:(0,N.jsx)(x.Z,{width:16,height:16})}),(0,N.jsx)(i.cC,{id:"Discord"})]})}):null]})]})})},16330:function(e,t,n){var r=n(93981),i=n(87821),a=n(5941),s=n(25546),l=n(89388),o=n(29541),c=r.forwardRef((function(e,t){e.testId;var n=e.name,c=e.onChange,u=e.onChangeWithoutEffect,d=e.value,x=e.disabled,f=void 0!==x&&x,p=e.decimals,h=void 0===p?6:p,m=e.onMouseOver,g=e.onFocus,v=e.className,b=e.placeholder,j=e.customWithValueLimit,w=e.suffix,y=(0,a.MG)().constants.MAX_INPUT_LIMIT,k=r.useMemo((function(){return function(e){var t=e.floatValue;return j?!t||j(t):!t||t<=y}}),[y,j]),N=String(d).length>=9?"text-sm sm:text-base lg:text-lg":"text-lg",S=","===s.A5?".":",",C=","===s.A5?",":".";return(0,o.jsx)(i.Z,{name:n,inputMode:"decimal","data-lpignore":"true",decimalSeparator:C,allowedDecimalSeparators:[".",","],value:null!==d&&void 0!==d?d:"",thousandSeparator:S,decimalScale:h,allowNegative:!1,allowLeadingZeros:!1,disabled:f,isAllowed:k,suffix:w,onChange:function(e){var t=e.target.value,n=(0,s.jj)(t).replaceAll(",","");u&&u(n)},onValueChange:function(e){e.value!==(null===d||void 0===d?void 0:d.toString())&&c&&c(e.value)},isNumericString:!0,placeholder:null!==b&&void 0!==b?b:"0.00",className:(0,l.cn)("h-full w-full bg-transparent disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25 outline-none",N,v),onMouseOver:m||void 0,onFocus:g||void 0,getInputRef:t})}));t.Z=c},22580:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(27195),i=n(8857),a=n.n(i),s=n(7761),l=n(12197),o=n(93981),c=n(12866),u=n(85216),d=n(16178),x=n(85394),f=n(89388),p=n(47222),h=function(e){return new Promise((function(t){return setTimeout(t,e)}))},m=n(24628),g=n(29541),v=1e3,b=function(e){var t=e.txid,n=e.open,i=e.onClose,b=(0,o.useRef)(null),j=(0,o.useRef)(null);(0,l.O3)(j,(function(){var e;return null===(e=b.current)||void 0===e?void 0:e.close()}));var w=(0,o.useMemo)((function(){return(0,p.cK)(t)}),[t]),y=function(e,t){var n=(0,o.useRef)(0),i=(0,o.useState)(null),s=i[0],l=i[1];return(0,o.useEffect)((function(){l(null)}),[t]),(0,o.useEffect)((function(){function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://stats.jup.ag/transactions/".concat(t));case 3:if(200===(r=e.sent).status){e.next=6;break}throw"Failed to fetch metadata";case 6:return e.next=8,r.json();case 8:s=e.sent,l(s),e.next=20;break;case 12:if(e.prev=12,e.t0=e.catch(0),!(n.current<30)){e.next=20;break}return n.current+=1,e.next=18,h(v);case 18:return e.next=20,i();case 20:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}e&&!s&&i()}),[t,s,e]),s}(n,t),k=(0,o.useMemo)((function(){return t?(0,p.W3)(t):""}),[t]),N=(0,o.useState)(!1),S=N[0],C=N[1],O=(0,o.useState)(""),M=O[0],P=O[1],I=(0,o.useCallback)((function(){k&&(navigator.clipboard.writeText(k),C(!0),setTimeout((function(){C(!1)}),1500))}),[k]),F=function(e,t){var n=(0,o.useRef)(0),i=(0,o.useState)(null),l=i[0],c=i[1],u=(0,o.useState)(null),d=u[0],f=u[1],p=(0,o.useState)(null),m=p[0],b=p[1],j=(0,o.useCallback)((function(){b((0,g.jsxs)("div",{className:"h-full w-full flex flex-col space-y-4 items-center justify-center text-xs flex-wrap",children:[(0,g.jsx)("span",{className:"p-6 text-center",children:s.ag._("Generating Image...")}),(0,g.jsx)(x.Z,{})]}))}),[]),w=(0,o.useCallback)((0,r.Z)(a().mark((function e(){var r,i,s,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.blob();case 6:return i=e.sent,s=URL.createObjectURL(i),l=new Promise((function(e,t){var n=new Image;n.src=s,n.onload=function(){c(s),f(i),b(null),e()},n.onerror=t})),e.next=11,l;case 11:e.next=22;break;case 13:if(e.prev=13,e.t0=e.catch(0),j(),!(n.current<30)){e.next=22;break}return n.current+=1,e.next=20,h(v);case 20:console.log("retrying...",n.current),w();case 22:case"end":return e.stop()}}),e,null,[[0,13]])}))),[t,j]);return(0,o.useEffect)((function(){t&&e&&w()}),[t,w,e]),(0,o.useEffect)((function(){n.current>30&&b((0,g.jsxs)("div",{className:"h-full w-full flex flex-col items-center justify-center text-xs flex-wrap p-6",children:[(0,g.jsx)("span",{className:"text-center",children:s.ag._("Failed to generate swap image.")}),(0,g.jsx)("span",{className:"mt-2 text-center",children:s.ag._("Please try again later.")})]}))}),[]),{imageSrc:l,imageBlob:d,errorMessage:m}}(n,w),L=F.imageSrc,Z=F.imageBlob,T=F.errorMessage,E=(0,o.useMemo)((function(){return"undefined"!==typeof window.navigator.share}),[]),_=(0,o.useMemo)((function(){if(!y)return"";var e=new URLSearchParams({text:"I just swapped ".concat(y.inSymbol," for ").concat(y.outSymbol," on Jupiter!"),url:k,via:"JupiterExchange"});return"http://twitter.com/share?".concat(e.toString())}),[k,y]),A=(0,o.useCallback)((function(){if(!y)return"";if(E){var e=["I just swapped ".concat(y.inSymbol," for ").concat(y.outSymbol," on Jupiter!"),k].join("\n");navigator.share({title:"Jupiter",text:e,files:Z?[new File([Z],"".concat(y.inSymbol," ").concat(y.outSymbol," Swap.png"),{type:"image/png"})]:void 0}).then((function(){})).catch((function(){}))}}),[y,E,k,Z]),D=(0,o.useCallback)((function(){var e;null===(e=b.current)||void 0===e||e.close(),i()}),[i,b]);(0,o.useEffect)((function(){if(b.current&&(n?b.current.open||b.current.showModal():b.current.close()),n){var e=b.current;return null===e||void 0===e||e.addEventListener("close",D),function(){null===e||void 0===e||e.removeEventListener("close",D)}}}),[D,n]);var R=(0,o.useCallback)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,navigator.clipboard.write([new ClipboardItem({"image/png":Z})]);case 5:P(s.ag._("Copied to clipboard!")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0),P(s.ag._("Failed to copy"));case 12:return e.prev=12,setTimeout((function(){P("")}),1500),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,8,12,15]])}))),[Z]);return n?(0,g.jsx)("dialog",{role:"dialog","aria-modal":"true",className:"top-0 left-0 h-full w-full flex items-center justify-center bg-black/25 backdrop-blur-md animate-fade-in cursor-auto",ref:b,children:(0,g.jsxs)("div",{ref:j,className:"max-w-[90wv] max-h-[90vh] w-[326px] rounded-xl overflow-hidden relative",children:[(0,g.jsx)("div",{className:"absolute right-3 top-3 cursor-pointer",onClick:D,children:(0,g.jsx)(c.Z,{width:12,height:12})}),(0,g.jsxs)("div",{className:"bg-tuna rounded-lg shadow-lg",children:[(0,g.jsxs)("div",{className:"h-[184px] w-[326px]",children:[T||null,!T&&L?(0,g.jsx)("img",{src:L,alt:"Share tx ".concat(t),className:"w-full h-full"}):null]}),(0,g.jsxs)("div",{className:"max-h-[50vh] overflow-y-scroll hideScrollbar px-4 py-5 bg-[#1B2229]",children:[E?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"text-xs text-white/75",children:s.ag._("Share to")}),(0,g.jsx)("div",{className:"mt-2 space-y-2",children:(0,g.jsxs)("button",{onClick:A,className:(0,f.cn)("flex space-x-2 text-xs items-center rounded-lg bg-v2-lily/5 border border-v2-lily/[.15] px-4 py-3 w-full hover:bg-v2-lily/10",T?"!cursor-not-allowed pointer-events-none opacity-50":""),children:[(0,g.jsx)(m.Z,{width:16,height:16}),(0,g.jsx)("div",{className:"font-semibold",children:s.ag._("Share")})]})})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"text-xs text-white/75",children:s.ag._("Copy Image")}),(0,g.jsx)("div",{className:"mt-2 space-y-2",children:(0,g.jsx)("button",{type:"button",disabled:Boolean(T||M),className:(0,f.cn)("flex space-x-2 text-xs items-center rounded-lg bg-v2-lily/5 border border-v2-lily/[.15] px-4 py-3 w-full hover:bg-v2-lily/10",T?"!cursor-not-allowed pointer-events-none opacity-50":""),onClick:R,children:(0,g.jsx)("div",{className:"font-semibold",children:M||s.ag._("Copy Image")})})}),(0,g.jsx)("div",{className:"mt-4 text-xs text-white/75",children:s.ag._("Share to")}),(0,g.jsx)("div",{className:"mt-2 space-y-2",children:(0,g.jsxs)("a",{target:"_blank",href:_,rel:"noopener noreferrer",className:(0,f.cn)("flex space-x-2 text-xs items-center rounded-lg bg-v2-lily/5 border border-v2-lily/[.15] px-4 py-3 w-full hover:bg-v2-lily/10",T?"!cursor-not-allowed pointer-events-none opacity-50":""),children:[(0,g.jsx)(d.Z,{width:16,height:16}),(0,g.jsx)("div",{className:"font-semibold",children:s.ag._("X / Twitter")})]})})]}),(0,g.jsxs)("div",{className:"mt-5 flex items-center justify-between text-xs",children:[(0,g.jsx)("div",{children:s.ag._("or copy swap link")}),(0,g.jsxs)("div",{onClick:I,className:(0,f.cn)("cursor-pointer bg-black/[.35] rounded-lg px-3 py-2  w-[184px]  space-x-2 flex items-center justify-between",T?"!cursor-not-allowed opacity-50":""),children:[(0,g.jsx)("span",{className:"whitespace-nowrap truncate w-[82%] overflow-hidden",children:S?s.ag._("Copied!"):k}),(0,g.jsx)(u.Z,{width:20,height:20})]})]})]})]})]})}):null}},16941:function(e,t,n){var r,i=n(65066),a=n(93981),s=n(89388),l=n(29541);t.Z=function(e){var t=e.idx,n=e.itemsCount,o=e.className,c=void 0===o?"":o,u=e.onClick,d=e.highlighted,x=e.roundBorder,f=e.children,p="left"===x?"v2-border-gradient-left":"right"===x?"v2-border-gradient-right":void 0,h=(0,a.useMemo)((function(){if(t>0&&t<n)return"border-l border-black/10 dark:border-white/5"}),[t,n]);return(0,l.jsx)("button",{type:"button",className:(0,s.cn)(r||(r=(0,i.Z)([""," "," "," "," relative"])),d?"v2-border-gradient ".concat(p," bg-v2-dark-gradient bg-transparent"):"",h,"relative flex-1 py-4 px-1 text-black-50 dark:text-white-50 dark:bg-[#1B1B1E]",c),onClick:u,children:(0,l.jsx)("div",{className:"h-full w-full leading-none flex justify-center items-center",children:f})})}},72257:function(e,t,n){n.d(t,{yi:function(){return _},x9:function(){return E},BF:function(){return A},ZP:function(){return R},zY:function(){return D}});var r=n(27195),i=n(63956),a=n(8857),s=n.n(a),l=n(73360),o=n(7761),c=n(93981),u=n(71048),d=n(87821),x=n(89388),f=n(5941),p=n(88680),h=n(6691),m=n(11003),g=n(16941),v=n(71130),b=n(50269),j=n(40558),w=n(44710),y=n(29541),k=function(e){var t=e.value,n=e.onClick;return(0,y.jsxs)("div",{className:"px-5 py-3 flex justify-between items-center",children:[(0,y.jsxs)("div",{className:"flex items-center cursor-pointer text-black-75 dark:text-white-75 text-xs mr-4",children:[(0,y.jsx)(l.cC,{id:"Direct Route Only"}),(0,y.jsx)(j.Z,{variant:"dark",content:(0,y.jsx)("span",{className:"flex max-w-[10rem] rounded-lg text-xs text-white-75",children:(0,y.jsx)(l.cC,{id:"It ensure only direct routing and also disable split trade trading"})}),children:(0,y.jsx)("div",{className:"flex items-center ml-1 text-white/30 fill-current",children:(0,y.jsx)(b.Z,{height:16,width:16})})})]}),(0,y.jsx)("div",{className:"flex justify-center",children:(0,y.jsx)(w.default,{active:t,onClick:n})})]})},N=n(12866),S=n(25546),C=function(e){var t=e.value,n=e.onClick;return(0,y.jsxs)("div",{className:"px-5 py-2 flex justify-between items-center",children:[(0,y.jsxs)("div",{className:"flex items-center cursor-pointer text-black-75 dark:text-white-75 text-xs mr-4",children:[(0,y.jsx)(l.cC,{id:"Use wSOL"}),(0,y.jsx)(j.Z,{variant:"dark",offset:[16,2.5],content:(0,y.jsx)("span",{className:"flex max-w-[10rem] rounded-lg text-xs text-white-75 ",children:(0,y.jsx)(l.cC,{id:"SOL swaps will transact in wSOL instead of SOL."})}),children:(0,y.jsx)("div",{className:"flex items-center ml-1 text-white/30 fill-current",children:(0,y.jsx)(b.Z,{height:16,width:16})})})]}),(0,y.jsx)("div",{className:"flex justify-center",children:(0,y.jsx)(w.default,{active:t,onClick:n})})]})},O=function(e){var t=e.value,n=e.onClick;return(0,y.jsxs)("div",{className:"px-5 py-2 flex justify-between items-center",children:[(0,y.jsxs)("div",{className:"flex items-center cursor-pointer text-black-75 dark:text-white-75 text-xs mr-4",children:[(0,y.jsx)(l.cC,{id:"Versioned Transaction"}),(0,y.jsx)(j.Z,{variant:"dark",content:(0,y.jsx)("span",{className:"flex rounded-lg text-xs text-white-75",children:(0,y.jsx)(l.cC,{id:"Versioned Tx is a significant upgrade that allows for more advanced routings and better prices! Make sure your connected wallet is compatible before toggling on Ver. Tx. Current compatible wallets: Phantom, Solflare, Glow and Backpack"})}),children:(0,y.jsx)("div",{className:"flex items-center ml-1 text-white/30 fill-current",children:(0,y.jsx)(b.Z,{height:16,width:16})})})]}),(0,y.jsx)("div",{className:"flex justify-center",children:(0,y.jsx)(w.default,{active:t,onClick:n})})]})},M=n(99438),P=n(13838),I=function(e){var t=e.newSlippage,n=e.onClickAccept,r=e.onClickReject;return(0,y.jsx)("div",{className:"max-w-[480px]",children:(0,y.jsxs)("div",{className:"p-6 pb-5 bg-jupiter-red",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsx)("h2",{className:"text-lg font-bold text-white",children:(0,y.jsx)(l.cC,{id:"Warning: High slippage!"})}),(0,y.jsx)("button",{className:"text-white/50",onClick:r,children:(0,y.jsx)(N.Z,{width:12,height:12})})]}),(0,y.jsxs)("div",{className:"text-white/75 mt-4 text-sm space-x-1",children:[(0,y.jsx)("span",{children:(0,y.jsx)(l.cC,{id:"Your transaction may be frontrun and result in an unfavourable trade."})}),(0,y.jsx)("span",{children:(0,y.jsx)(l.cC,{id:"The recommended slippage is between {MINIMUM_SUGGESTED_SLIPPAGE}% to {MAXIMUM_SUGGESTED_SLIPPAGE}%",values:{MINIMUM_SUGGESTED_SLIPPAGE:E,MAXIMUM_SUGGESTED_SLIPPAGE:_}})})]}),(0,y.jsx)("p",{className:"text-white/75 mt-6 text-sm",children:(0,y.jsx)(l.cC,{id:"Are you sure you want to set it to {newSlippage}%?",values:{newSlippage:t}})}),(0,y.jsx)("button",{type:"button",className:"mt-6 font-semibold w-full rounded-lg flex justify-center items-center p-4 border  dark:border-white/50 text-base bg-transparent hover:bg-black/40",onClick:n,children:(0,y.jsx)(l.cC,{id:"I know what I\u2019m doing. Let\u2019s go!"})}),(0,y.jsx)("button",{type:"button",className:"mt-3 font-semibold text-white w-full rounded-lg flex justify-center items-center p-4 bg-black/80 hover:bg-black text-base",onClick:r,children:(0,y.jsx)(l.cC,{id:"Cancel"})})]})})},F=function(e){var t=e.width,n=void 0===t?10:t,r=e.height,i=void 0===r?10:r;return(0,y.jsx)("svg",{width:n,height:i,viewBox:"0 0 10 10",fill:"transparent",xmlns:"http://www.w3.org/2000/svg",children:(0,y.jsx)("path",{d:"M8.33329 2.5L3.74996 7.08333L1.66663 5",stroke:"#768222",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})})},L=n(2997);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=.5,_=5,A=[{text:o.ag._("Market"),description:o.ag._("85% percentile fees from last 20 blocks"),value:"auto",max:.001},{text:o.ag._("High"),description:o.ag._("5x Market fee"),value:"high",max:.005},{text:o.ag._("Turbo"),description:o.ag._("10x Market fee"),value:"turbo",max:.01}],D=function(e){var t=e.slippageInput,n=(0,c.useMemo)((function(){return Number(t)<=E}),[t]),r=(0,c.useMemo)((function(){return Number(t)>_}),[t]),i=(0,c.useMemo)((function(){return Number(t)>5}),[t]),a=(0,c.useMemo)((function(){return n?(0,y.jsx)(l.cC,{id:"Your transaction may fail"}):r?(0,y.jsx)(l.cC,{id:"Your transaction may be frontrun and result in an unfavourable trade."}):""}),[r,n]);return{isTooLow:n,isTooHigh:r,shouldShowWarning:i,slippageSuggestionText:a}},R=function e(t){var n=t.filterDisplay,i=t.sessionSlippage,a=(0,f.MG)().constants.DEFAULT_SLIPPAGE,w=(0,L.JT)(),Z=w.openModal,E=w.closeModal,_=(0,f.mQ)(),R=_.slippage,V=_.setSlippage,U=(0,h.Fg)().mode,G=(0,f.jB)(),B=G.onlyDirectRoutes,H=G.setOnlyDirectRoutes,W=G.setUseWSol,z=G.useWSol,J=G.asLegacyTransaction,X=G.setAsLegacyTransaction,Q=null!==i&&void 0!==i?i:R,Y=(0,c.useMemo)((function(){return["0.5","1",String(a)]}),[a]),K=(0,c.useMemo)((function(){return Y.find((function(e){return Number(e)===Q}))}),[Q,Y]),$=(0,f.BT)(),q=$.prioritizationFee,ee=$.setPrioritizationFee,te=(0,c.useMemo)((function(){return A.find((function(e){return JSON.stringify(e.value)===JSON.stringify(q)}))}),[q]),ne=(0,u.cI)({defaultValues:T(T(T({},"undefined"!==typeof Q?K?{slippagePreset:String(K)}:{slippageInput:String(Q)}:{}),"undefined"!==typeof q&&"undefined"!==typeof te?{priorityInSOLPreset:te.value}:{priorityInSOLInput:q}),{},{onlyDirectRoutes:B,useWSol:z,asLegacyTransaction:J})}),re=(0,p.lm)().toast,ie=(0,c.useState)(!K),ae=ie[0],se=ie[1],le=ne.watch("slippageInput"),oe=ne.watch("slippagePreset"),ce=(0,c.useMemo)((function(){return Number(le)>=0&&Number(le)<=50}),[le]),ue=D({slippageInput:le||oe}),de=ue.slippageSuggestionText,xe=ue.shouldShowWarning,fe=(0,c.useRef)(),pe=(0,c.useState)("undefined"===typeof te),he=pe[0],me=pe[1],ge=ne.watch("priorityInSOLPreset"),ve=(0,c.useRef)(),be=ne.watch("priorityInSOLInput"),je=(0,c.useMemo)((function(){return Number(be)<=f.H2}),[be]),we=(0,c.useMemo)((function(){return Number(be)>f.H2?(0,y.jsx)(l.cC,{id:"Warning, max priority fee is over the suggested amount of {0} SOL.",values:{0:S.uf.format(f.H2)}}):""}),[be]),ye=(ae?Number(le)<0||Number.isNaN(Number(le))||""===le:!oe&&!ce)||!(!he||"undefined"!==typeof be)||"undefined"===typeof ge&&!je,ke=ne.watch("onlyDirectRoutes"),Ne=ne.watch("useWSol"),Se=ne.watch("asLegacyTransaction"),Ce=(0,c.useCallback)(function(){var t=(0,r.Z)(s().mark((function t(r){var i,a,l,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ye){t.next=2;break}return t.abrupt("return");case 2:if(i=Number(r.slippageInput||r.slippagePreset),"slippageOnly"!==n||"number"!==typeof i){t.next=13;break}if(!xe){t.next=12;break}return t.next=7,new Promise((function(t){setTimeout((function(){Z((0,y.jsx)(I,{newSlippage:i,onClickAccept:function(){V(i),E(),t(!0)},onClickReject:function(){setTimeout((function(){Z((0,y.jsx)(e,{filterDisplay:"slippageOnly"}))}),0),t(!1)}}),{canDismiss:!1,containerStyle:{background:"none"}})}),0)}));case 7:if(t.sent){t.next=10;break}return t.abrupt("return");case 10:t.next=13;break;case 12:V(i);case 13:a=r.priorityInSOLInput||r.priorityInSOLPreset,console.log({priorityInput:a}),"number"!==typeof a?a&&ee(a):"number"===typeof(l=Number(a))&&ee(l),H(r.onlyDirectRoutes),W(r.useWSol),X(r.asLegacyTransaction),c=function(){switch(n){case"generalOnly":return o.ag._("Swap settings updated.");case"priorityOnly":return o.ag._("Priority fee updated.");case"slippageOnly":return o.ag._("Slippage updated.")}}(),re({render:function(e){return(0,y.jsx)(m.ZJ,T(T({},e),{},{variant:m.Lb.SUCCESS,title:o.ag._("Settings saved"),description:c}))}}),E();case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[E,n,ye,Z,X,H,ee,V,W,xe,re]);return(0,y.jsx)("div",{className:(0,x.cn)("max-w-md w-screen bg-white dark:bg-[#1B2229] dark:text-white"),children:(0,y.jsxs)("form",{onSubmit:ne.handleSubmit(Ce),className:(0,x.cn)("w-full"),children:[(0,y.jsxs)("div",{className:"flex justify-between items-center p-5 pt-7 ",children:[(0,y.jsxs)("div",{className:"text-2xl font-semibold flex",children:["priorityOnly"===n?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.cC,{id:"Transaction Priority"}),(0,y.jsx)(j.Z,{variant:"dark",buttonContentClassName:"my-auto cursor-pointer",content:(0,y.jsx)("span",{className:"flex rounded-lg text-xs text-white/75",children:(0,y.jsx)(l.cC,{id:"The priority fee is paid to the Solana network. This additional fee helps boost how a transaction is prioritized against others, resulting in faster transaction execution times."})}),children:(0,y.jsx)("div",{className:"flex ml-2.5 items-center text-black/75 dark:text-white/30 fill-current",children:(0,y.jsx)(b.Z,{width:16,height:16})})})]}):null,"slippageOnly"===n?(0,y.jsx)(l.cC,{id:"Slippage Settings"}):null,"generalOnly"===n?(0,y.jsx)(l.cC,{id:"General Settings"}):null]}),(0,y.jsx)("div",{className:"text-black dark:text-white fill-current cursor-pointer",onClick:function(){return E()},children:(0,y.jsx)(N.Z,{width:16,height:16})})]}),(0,y.jsxs)("div",{className:(0,x.cn)("max-h-[70vh] overflow-y-auto","webkit-scrollbar ".concat(U===h.hY.DARK?"webkit-scrollbar-dark":"")),children:["priorityOnly"===n?(0,y.jsxs)("div",{className:(0,x.cn)("mt-4 px-5"),children:[(0,y.jsx)("div",{className:"flex items-center mt-2.5 rounded-xl  overflow-hidden",children:(0,y.jsx)(u.Qr,{name:"priorityInSOLPreset",control:ne.control,render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,y.jsx)("div",{className:"flex flex-col w-full space-y-2",children:A.map((function(e,t){var i=e.text,a=e.description,s=e.value,o=e.max,c=i,u=r===s;return(0,y.jsxs)("button",{type:"button",className:(0,x.cn)("p-4 h-[76px] rounded-xl w-full flex flex-col relative bg-[#E8F9FF]/5",u?"border-2 border-[#C7F284]":"border border-[#E8F9FF]/10"),onClick:function(){ne.setValue("priorityInSOLInput",void 0),n(s),me(!1)},children:[(0,y.jsxs)("span",{className:"text-[#E8F9FF] flex space-x-2 items-center",children:[(0,y.jsx)("span",{className:"font-semibold",children:c}),(0,y.jsx)("span",{className:"block text-[11px] px-2 bg-[#E8F9FF1A] border border-[#E8F9FF33] rounded-full h-[22px] py-[2px]",children:(0,y.jsx)(l.cC,{id:"Max: {max} SOL",values:{max:o}})})]}),(0,y.jsx)("span",{className:"text-xs text-[#E8F9FF]/50",children:a}),(0,y.jsx)("span",{className:(0,x.cn)("absolute top-4 right-4 w-4 h-4 rounded-full border flex justify-center items-center",u?"border-none bg-[#C7F284]":"border-[#E8F9FF]/30 bg-[#E8F9FF]/5"),children:u&&(0,y.jsx)(F,{})})]},t)}))})}})}),(0,y.jsxs)("div",{className:"mt-2.5",children:[(0,y.jsx)("span",{className:"dark:text-white/75 font-500 text-sm",children:"or set manually:"}),(0,y.jsx)("span",{className:"ml-1 text-[11px] px-2 bg-[#E8F9FF1A] border border-[#E8F9FF33] rounded-full h-[22px] py-[2px]",children:(0,y.jsx)(l.cC,{id:"Max: {0} SOL",values:{0:2}})}),(0,y.jsxs)("div",{className:"relative mt-2.5 h-full ".concat(he?"v2-border-gradient v2-border-gradient-center ":""),children:[(0,y.jsx)(u.Qr,{name:"priorityInSOLInput",control:ne.control,render:function(e){var t=e.field,n=t.onChange,r=t.value,i=","===S.A5?".":",";return(0,y.jsx)(d.Z,{inputMode:"decimal",value:"undefined"===typeof r?"":r,decimalScale:9,thousandSeparator:i,getInputRef:function(e){return ve.current=e},allowNegative:!1,allowedDecimalSeparators:[".",","],onValueChange:function(e){var t=e.floatValue;n(t),"undefined"!==typeof t&&ne.setValue("priorityInSOLPreset",void 0)},onFocus:function(){var e;null===(e=ve.current)||void 0===e||e.focus(),me(!0)},maxLength:12,placeholder:"0.0000",isNumericString:!0,className:(0,x.cn)("outline-none text-left h-full w-full dark:bg-[#1B1B1E] placeholder:text-black/25 dark:placeholder:text-white/25 py-4 px-5 text-sm rounded-xl ring-1 ring-black/10 dark:ring-white/5 dark:text-white-50 text-black-50 pointer-events-all relative"),decimalSeparator:S.A5})}}),(0,y.jsx)("span",{className:"absolute right-4 top-4 text-sm text-black/50 dark:text-white/50",children:"SOL"})]}),"number"===typeof be&&0!==be?(0,y.jsx)("span",{className:"text-xs dark:text-white-50 text-black-50",children:(0,y.jsx)(l.cC,{id:"This will cost an additional {0} SOL.",values:{0:new P.Z(be||0).toString()}})}):null,he&&!je&&(0,y.jsx)(v.Z,{iconSize:14,className:"!text-jupiter-primary !px-0",message:o.ag._("Priority fee is capped at {0} SOL",{0:S.uf.format(f.H2)})}),"undefined"===typeof ge&&we&&(0,y.jsx)(v.Z,{iconSize:14,className:"!text-jupiter-primary !px-0 mb-2",message:we})]})]}):null,"slippageOnly"===n?(0,y.jsxs)("div",{className:(0,x.cn)("mt-4 px-5"),children:[(0,y.jsxs)("div",{className:"flex items-center mt-2.5 rounded-xl ring-1 ring-black/10 dark:ring-white/5 overflow-hidden text-sm h-[52px]",children:[(0,y.jsx)(u.Qr,{name:"slippagePreset",control:ne.control,render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,y.jsx)(y.Fragment,{children:Y.map((function(e,t){var i=S.uf.format(Number(e))+"%";return(0,y.jsx)(g.Z,{idx:t,itemsCount:Y.length,className:"h-full",roundBorder:0===t?"left":void 0,highlighted:!ae&&Number(r)===Number(e),onClick:function(){se(!1),ne.setValue("slippageInput",void 0),setTimeout((function(){n(e)}),0)},children:i},t)}))})}}),(0,y.jsxs)("div",{onClick:function(){var e;null===(e=fe.current)||void 0===e||e.focus(),se(!0)},className:"flex items-center justify-between cursor-text w-[140px] lg:w-[174px] h-full text-black-50 dark:text-white-50 dark:bg-[#1B1B1E] px-4 text-sm relative border-l border-black-10 dark:border-white/5 ".concat(ae?"v2-border-gradient v2-border-gradient-right bg-v2-dark-gradient bg-transparent ":""),children:[(0,y.jsx)("span",{className:"text-xs lg:text-sm",children:(0,y.jsx)(l.cC,{id:"Custom"})}),(0,y.jsx)(u.Qr,{name:"slippageInput",control:ne.control,render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,y.jsx)(d.Z,{inputMode:"decimal",value:"undefined"===typeof r?"":r,decimalScale:2,isAllowed:function(e){return(e.floatValue||0)<=100&&(e.floatValue||0)>=0},allowedDecimalSeparators:[".",","],getInputRef:function(e){return fe.current=e},allowNegative:!1,onValueChange:function(e){var t=e.value;n(t),"undefined"!==typeof t&&ne.setValue("slippagePreset",void 0)},allowLeadingZeros:!1,isNumericString:!0,suffix:"%",className:"outline-none h-full w-full bg-transparent py-4 px-2 lg:px-5 text-sm rounded-lg placeholder:text-black/25 dark:placeholder:text-white/25 dark:text-white-50 text-black-50 text-right pointer-events-all",decimalSeparator:S.A5,placeholder:","===S.A5?"0,00%":"0.00%"})}})]})]}),ae&&!ce&&(0,y.jsx)(v.Z,{iconSize:14,className:"!text-jupiter-primary !px-0 !mt-2",message:o.ag._("Please set a slippage value that is within {MINIMUM_SLIPPAGE}% to {MAXIMUM_SLIPPAGE}%",{MINIMUM_SLIPPAGE:0,MAXIMUM_SLIPPAGE:50})}),de&&(0,y.jsx)(v.Z,{iconSize:14,className:"!text-jupiter-primary !px-0 !mt-2",message:de})]}):null,"generalOnly"===n?(0,y.jsxs)("div",{className:(0,x.cn)("mt-4"),children:[(0,y.jsx)(k,{value:ke,onClick:function(){return ne.setValue("onlyDirectRoutes",!ke)}}),(0,y.jsx)(C,{value:Ne,onClick:function(){return ne.setValue("useWSol",!Ne)}}),(0,y.jsx)(O,{value:!Se,onClick:function(){return ne.setValue("asLegacyTransaction",!Se)}})]}):null,(0,y.jsx)("div",{className:"px-5 pb-5",children:(0,y.jsx)(M.Z,{type:"submit",className:"w-full mt-4 border border-[#C7F284]/20",disabled:ye,size:"md",children:(0,y.jsx)(l.cC,{id:"Save Settings"})})})]})]})})}},44710:function(e,t,n){n.r(t);var r=n(89388),i=n(29541);t.default=function(e){var t=e.active,n=e.onClick,a=e.className,s=e.dotClassName,l=e.activeClassName,o=e.inactiveClassName,c=(0,r.cn)("bg-white transform translate-x-full",l),u=(0,r.cn)("bg-white dark:bg-white-35",o);return(0,i.jsx)("button",{type:"button",className:(0,r.cn)("w-9 h-5 flex items-center rounded-full p-0.5 cursor-pointer",{"bg-[#71E5EC]":t,"bg-[#010101]":!t},a),onClick:function(){return n(!t)},children:(0,i.jsx)("div",{className:(0,r.cn)("h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out",t?c:u,s)})})}},11017:function(e,t,n){n(93981);var r=n(29541);t.Z=function(e){var t=e.className,n=void 0===t?"":t,i=e.width,a=void 0===i?8:i,s=e.height,l=void 0===s?7:s;return(0,r.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:l,fill:"none",viewBox:"0 0 8 7",children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.647 3.674H.69c-.91 0-.91-1.38 0-1.38h4.957L3.89.537c-.659-.659.314-1.631.973-.972l2.949 2.949c.25.25.25.69 0 .972l-2.95 2.95c-.658.627-1.63-.346-.972-.973l1.757-1.788z",clipRule:"evenodd"})})}},94223:function(e,t,n){n(93981);var r=n(29541);t.Z=function(e){var t=e.width,n=void 0===t?32:t,i=e.height,a=void 0===i?32:i;return(0,r.jsx)("svg",{width:n,height:a,viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.1425 8.45597H5.22047L5.22025 8.45592C4.66944 8.40838 4.15821 8.1496 3.79392 7.73368C3.52351 7.52371 3.34106 7.22064 3.28188 6.88329C3.24718 5.65089 4.6625 4.79883 5.9425 4.79883H22.3996C23.1264 4.80107 23.8229 5.09067 24.3368 5.60455C24.8507 6.11843 25.1403 6.81496 25.1425 7.54168V8.45597ZM26.0564 10.2846H5.02779C4.54289 10.2846 4.07777 10.092 3.73473 9.74912C3.39187 9.40605 3.19922 8.94094 3.19922 8.45605V25.8275C3.19922 26.555 3.4882 27.2526 4.00248 27.7671C4.51698 28.2814 5.21451 28.5703 5.94208 28.5703H26.0564C26.7839 28.5703 27.4814 28.2814 27.996 27.7671C28.5102 27.2526 28.7992 26.555 28.7992 25.8275V23.0846H24.2278C22.9213 23.0846 21.7139 22.3875 21.0607 21.2561C20.4074 20.1246 20.4074 18.7303 21.0607 17.5989C21.7139 16.4675 22.9213 15.7703 24.2278 15.7703H28.7992V13.0275C28.7992 12.2999 28.5102 11.6024 27.996 11.0879C27.4815 10.5736 26.7839 10.2846 26.0564 10.2846ZM22.4014 19.4277C22.4014 19.9126 22.594 20.3777 22.9369 20.7208C23.2799 21.0636 23.7451 21.2563 24.2299 21.2563H28.8014V17.5991H24.2299C23.745 17.5991 23.2799 17.7918 22.9369 18.1346C22.594 18.4777 22.4014 18.9428 22.4014 19.4277Z",fill:"currentColor"})})}},49803:function(e,t,n){n.d(t,{e:function(){return s}});var r=n(9364),i=n(3011),a=(n(93981),n(29541)),s=(0,r.MT)();t.Z=function(e){var t=e.children;return(0,a.jsx)(i.zt,{store:s,children:t})}},57917:function(e,t,n){n.d(t,{SR:function(){return f},Sk:function(){return x}});var r=n(63956),i=n(9364),a=n(3011),s=n(93981),l=n(49803);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={tx:void 0,errorTitle:"",shouldShowFeedbackLink:!1,shouldShowUpdatePriorityFee:!1,shouldShowShareLink:!1},d=(0,i.cn)({}),x=function(e){return(0,a.Dv)(d,{store:l.e})[e]||u},f=function(){var e=(0,a.b9)(d,{store:l.e}),t=(0,s.useCallback)((function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e((function(e){return c(c({},e),{},(0,r.Z)({},t,c(c(c(c({},u),e[t]),i),{},{tx:n})))}))}),[e]),n=(0,s.useCallback)((function(t){e((function(e){return e[t]=c({},u),e}))}),[e]);return{addNotificationTx:t,updateNotificationTxStatus:(0,s.useCallback)((function(t,n,r){e((function(e){var i,a=null===e||void 0===e||null===(i=e[t])||void 0===i?void 0:i.tx;return a&&(a=c(c(c({},a),n),{},{hasAdditionalPendingSteps:null===r||void 0===r?void 0:r.hasAdditionalPendingSteps,additionalSteps:null===r||void 0===r?void 0:r.additionalSteps}),e[t].tx=a,"fail"!==n.status&&"fail-no-txid"!==n.status||(e[t].shouldShowFeedbackLink=!0)),c({},e)}))}),[e]),resetNotificationMultipleTxs:n,updateNotificationMetadata:(0,s.useCallback)((function(t,n){e((function(e){return c(c({},e),{},(0,r.Z)({},t,c(c({},e[t]),n)))}))}),[e])}}},47222:function(e,t,n){n.d(t,{L5:function(){return a},SV:function(){return s},W3:function(){return i},cK:function(){return r}});var r=function(e){var t="api/swap/".concat(e),n=s();if(n.includes("vercel.app")){var r=n.replace("jupiter","dynamic-og");return"".concat(r,"/").concat(t)}return"https://og.jup.ag/".concat(t)},i=function(e){return"".concat(s(),"/share/").concat(e)},a=function(e){var t=e.inSymbol,n=e.outSymbol,r=e.amount,i=e.baseUrl;return"".concat(i,"/swap/").concat(t,"-").concat(n,"?inAmount=").concat(r)},s=function(){var e,t="jupiter-launchpad-git-jup-jup-gao-sheng-wowcats.vercel.app";return t=null!==(e=t)&&void 0!==e&&e.includes("vercel.app")?"https://".concat("jupiter-launchpad-git-jup-jup-gao-sheng-wowcats.vercel.app"):"https://jup.ag",window.location.origin}}}]);
//# sourceMappingURL=9077-25bf972f4acf2b74.js.map