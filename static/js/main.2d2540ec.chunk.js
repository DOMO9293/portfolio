(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(e,t){!function(e){var t=e.noise={};function n(e,t,n){this.x=e,this.y=t,this.z=n}n.prototype.dot2=function(e,t){return this.x*e+this.y*t},n.prototype.dot3=function(e,t,n){return this.x*e+this.y*t+this.z*n};var r=[new n(1,1,0),new n(-1,1,0),new n(1,-1,0),new n(-1,-1,0),new n(1,0,1),new n(-1,0,1),new n(1,0,-1),new n(-1,0,-1),new n(0,1,1),new n(0,-1,1),new n(0,1,-1),new n(0,-1,-1)],a=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],o=new Array(512),i=new Array(512);t.seed=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t=0;t<256;t++){var n;n=1&t?a[t]^255&e:a[t]^e>>8&255,o[t]=o[t+256]=n,i[t]=i[t+256]=r[n%12]}},t.seed(0);var c=.5*(Math.sqrt(3)-1),l=(3-Math.sqrt(3))/6,s=1/6;function u(e){return e*e*e*(e*(6*e-15)+10)}function m(e,t,n){return(1-n)*e+n*t}t.simplex2=function(e,t){var n,r,a=(e+t)*c,s=Math.floor(e+a),u=Math.floor(t+a),m=(s+u)*l,f=e-s+m,p=t-u+m;f>p?(n=1,r=0):(n=0,r=1);var d=f-n+l,h=p-r+l,v=f-1+2*l,b=p-1+2*l,g=i[(s&=255)+o[u&=255]],E=i[s+n+o[u+r]],x=i[s+1+o[u+1]],y=.5-f*f-p*p,w=.5-d*d-h*h,O=.5-v*v-b*b;return 70*((y<0?0:(y*=y)*y*g.dot2(f,p))+(w<0?0:(w*=w)*w*E.dot2(d,h))+(O<0?0:(O*=O)*O*x.dot2(v,b)))},t.simplex3=function(e,t,n){var r,a,c,l,u,m,f=(e+t+n)*(1/3),p=Math.floor(e+f),d=Math.floor(t+f),h=Math.floor(n+f),v=(p+d+h)*s,b=e-p+v,g=t-d+v,E=n-h+v;b>=g?g>=E?(r=1,a=0,c=0,l=1,u=1,m=0):b>=E?(r=1,a=0,c=0,l=1,u=0,m=1):(r=0,a=0,c=1,l=1,u=0,m=1):g<E?(r=0,a=0,c=1,l=0,u=1,m=1):b<E?(r=0,a=1,c=0,l=0,u=1,m=1):(r=0,a=1,c=0,l=1,u=1,m=0);var x=b-r+s,y=g-a+s,w=E-c+s,O=b-l+2*s,j=g-u+2*s,k=E-m+2*s,M=b-1+.5,z=g-1+.5,C=E-1+.5,S=i[(p&=255)+o[(d&=255)+o[h&=255]]],A=i[p+r+o[d+a+o[h+c]]],B=i[p+l+o[d+u+o[h+m]]],G=i[p+1+o[d+1+o[h+1]]],R=.6-b*b-g*g-E*E,D=.6-x*x-y*y-w*w,F=.6-O*O-j*j-k*k,I=.6-M*M-z*z-C*C;return 32*((R<0?0:(R*=R)*R*S.dot3(b,g,E))+(D<0?0:(D*=D)*D*A.dot3(x,y,w))+(F<0?0:(F*=F)*F*B.dot3(O,j,k))+(I<0?0:(I*=I)*I*G.dot3(M,z,C)))},t.perlin2=function(e,t){var n=Math.floor(e),r=Math.floor(t);e-=n,t-=r;var a=i[(n&=255)+o[r&=255]].dot2(e,t),c=i[n+o[r+1]].dot2(e,t-1),l=i[n+1+o[r]].dot2(e-1,t),s=i[n+1+o[r+1]].dot2(e-1,t-1),f=u(e);return m(m(a,l,f),m(c,s,f),u(t))},t.perlin3=function(e,t,n){var r=Math.floor(e),a=Math.floor(t),c=Math.floor(n);e-=r,t-=a,n-=c;var l=i[(r&=255)+o[(a&=255)+o[c&=255]]].dot3(e,t,n),s=i[r+o[a+o[c+1]]].dot3(e,t,n-1),f=i[r+o[a+1+o[c]]].dot3(e,t-1,n),p=i[r+o[a+1+o[c+1]]].dot3(e,t-1,n-1),d=i[r+1+o[a+o[c]]].dot3(e-1,t,n),h=i[r+1+o[a+o[c+1]]].dot3(e-1,t,n-1),v=i[r+1+o[a+1+o[c]]].dot3(e-1,t-1,n),b=i[r+1+o[a+1+o[c+1]]].dot3(e-1,t-1,n-1),g=u(e),E=u(t),x=u(n);return m(m(m(l,d,g),m(s,h,g),x),m(m(f,v,g),m(p,b,g),x),E)}}(this)},42:function(e,t,n){e.exports=n.p+"static/media/home.35af9fa2.png"},43:function(e,t,n){e.exports=n.p+"static/media/chat.afce8b05.png"},44:function(e,t,n){e.exports=n.p+"static/media/orderDetail.00464ae4.png"},45:function(e,t,n){e.exports=n.p+"static/media/brum.ff43e1ea.mp4"},61:function(e,t,n){e.exports=n.p+"static/media/brum.631abf05.png"},62:function(e,t,n){e.exports=n.p+"static/media/foodo1.77af7a33.png"},63:function(e,t,n){e.exports=n.p+"static/media/virusweb.a7cfe2f8.png"},64:function(e,t,n){e.exports=n.p+"static/media/bold.8432a448.blob"},68:function(e,t,n){e.exports=n(84)},84:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(26),i=n.n(o),c=n(11),l=n(13),s=n(14),u={primaryColor:"#AF646B",mainGrey:"#707070",blue:"#1F4A5E",pink:"#E3A6A1",mainWhite:"#E3DDD3"};function m(){var e=Object(l.a)(["\n  color: ",";\n  top: 45vh;\n  left: 50vw;\n  transform: translate(-52%, 0%);\n  font-size: 6em;\n"]);return m=function(){return e},e}Object(s.b)((function(e){var t=e.className;return a.a.createElement("h1",{className:t},"Jaesook Jeong")}))(m(),u.mainGrey);var f=n(8),p=n(35),d=n(39),h=n(24),v=n.n(h),b=n(0),g=n(50);function E(e){var t=e.movement,n=e.moveto,o=Object(g.b)(4,(function(e){return{from:{position:[0,e,0]}}})),i=Object(c.a)(o,2),l=i[0],s=i[1];return Object(r.useEffect)((function(){return t&&void s((function(e){return{position:[n[e].x,e,n[e].z],delay:500*e}}))}),[]),new Array(4).fill().map((function(e,t){var n=new b.LineBasicMaterial({color:u[Object.keys(u)[t]]}),r=t,o=new b.Geometry;o.y=r/4*100*2;for(var i=0;i<=100;i++){var c=new b.Vector3;c.x=Math.cos(i/100*Math.PI*2),c.z=Math.sin(i/100*Math.PI*2),c._o=c.clone(),o.vertices.push(c)}return a.a.createElement(g.a.line,{key:t,userData:{verticesAmount:100},geometry:o,material:n,position:l[t].position})}))}function x(e){var t=e.mouse,n=e.clicked,o=Object(r.useRef)(),i=0,c=Object(f.i)(),l=c.size,s=c.viewport,u=l.width/s.width;return Object(f.g)((function(e,r){if(i=requestAnimationFrame(y),o.current.children)for(var a=0;a<o.current.children.length;a++){for(var c=o.current.children[a],l=0;l<=c.userData.verticesAmount;l++){var s=c.geometry.vertices[l],m=3*d.noise.simplex3(.009*s.x,.009*s.z+.006*i,.009*c.geometry.y);s.copy(s._o),s.multiplyScalar(100+m)}n&&(a%2===0?c.position.y+=.2*a:c.position.y-=.2*a),c.geometry.verticesNeedUpdate=!0}o.current&&(o.current.rotation.x=v()(.2*o.current.rotation.x+1.55,t.current[1]/u/200,.1),o.current.rotation.y=v()(.2*o.current.rotation.y,t.current[0]/u/200,.1))})),a.a.createElement("group",{ref:o,rotation:[1.55,0,0]},a.a.createElement(E,null))}function y(e){var t=e.mouse,n=e.clicked;return a.a.createElement(x,{mouse:t,clicked:n})}Object(f.e)({OrbitControls:p.b});var w=y,O=n(28),j=n(41),k=n.n(j),M=n(61),z=n.n(M),C=n(62),S=n.n(C),A=n(63),B=n.n(A),G=n(42),R=n.n(G),D=n(43),F=n.n(D),I=n(44),L=n.n(I),N=n(45),W=n.n(N),J={sections:3,pages:3,zoom:65,paragraphs:[{offset:.1,factor:1.75,header:"Brum",image:z.a,aspect:1.1,text:"errand service application, react-native,expo, styled-components,redux,hooks,jwt,react-navigator",repo:"https://github.com/DOMO9293/Brum-client",details:[R.a,F.a,L.a],description:{about:"Collaborative Project with the Company \u201c2Luck\u201d based in korea. The platform providing errand services within universities.",tech:"react-native,expo,redux,hook,jwt,react-navigator,styled-components",resource:"https://github.com/DOMO9293/Brum-clien",dist:"100"},vid:W.a},{offset:1,factor:2.25,header:"Racivid-20",image:B.a,aspect:1.7,text:"Applications that report only race-related issues, react, hook, three.js, react-three-fiber, ",repo:"https://github.com/DOMO9293/Brum-client",details:[R.a,F.a,L.a],description:{about:"Collaborative Project with the Company \u201c2Luck\u201d based in korea. The platform providing errand services within universities.",tech:"react-native,expo,redux,hook,jwt,react-navigator,styled-components",resource:"https://github.com/DOMO9293/Brum-clien",dist:"100"},vid:W.a},{offset:2,factor:2,header:"Foodo",image:S.a,aspect:1.7,text:"Grocery Shopping List App, react, react-router, chart.js, jwt",repo:"https://github.com/DOMO9293/Brum-client",details:[R.a,F.a,L.a],description:{about:"Collaborative Project with the Company \u201c2Luck\u201d based in korea. The platform providing errand services within universities.",tech:"react-native,expo,redux,hook,jwt,react-navigator,styled-components",resource:"https://github.com/DOMO9293/Brum-clien",dist:"100"},vid:W.a}],about:{whoami:"I'm Jaesook Jeong. A Korean front-end Developer, currently living in Germany.\n    I have serious passion for UI effects, animations dynamic user experiences.",promo:"Fill free to contact me!",skills:["HTML5","CSS3","Javascript","React","Redux","hook","React-native","Node.js","mysql","express","styled-components"],contact:["email: flqjsl@gmail.com","github: https://github.com/DOMO9293"]},top:Object(r.createRef)()},T=n(64),H=n.n(T);function P(e){var t=e.children,n=e.size,o=void 0===n?1:n,i=e.left,c=e.right,l=e.top,s=e.bottom,m=e.color,p=void 0===m?u.mainGrey:m,d=(e.opacity,e.height),h=void 0===d?.01:d,g=(e.layers,e.index),E=e.setClicked,x=Object(O.a)(e,["children","size","left","right","top","bottom","color","opacity","height","layers","index","setClicked"]);g=void 0!==g?g:null;var y=Object(f.h)(b.FontLoader,H.a),w=k()((function(){return new Promise((function(e){return e(new b.TextBufferGeometry(t,{font:y,size:1,height:h,curveSegments:32}))}))}),[t]),j=Object(r.useCallback)((function(e){var t=new b.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=i?0:c?-t.x:-t.x/2,e.position.y=l?0:s?-t.y:-t.y/2}),[i,c,l,s]),M=Object(r.useRef)(),z=J.top.current;Object(f.g)((function(){M.current.shift=v()(M.current.shift,(J.top.current-z)/100,.1),z=J.top.current}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("group",Object.assign({},x,{scale:[o,o,.1],onClick:function(e){99===g&&(console.log("yes!!"),E(!0))}}),a.a.createElement("mesh",{geometry:w,onUpdate:j,frustumCulled:!1,castShadow:!0,receiveShadow:!0},a.a.createElement("meshBasicMaterial",{ref:M,attach:"material",color:p}))))}var q=n(15);function U(){var e=Object(l.a)(["\n  position: absolute;\n  display: inline;\n  color: ",";\n  top: 93%;\n  left: 45%;\n  text-align: center;\n"]);return U=function(){return e},e}var Y=s.b.div(U(),u.blue),_=function(){var e=Object(r.useRef)([0,0]),t=Object(r.useState)(!1),n=Object(c.a)(t,2),o=n[0],i=n[1],l=Object(r.useState)(!1),s=Object(c.a)(l,2),m=s[0],p=s[1],d=Object(r.useCallback)((function(t){var n=t.clientX,r=t.clientY;e.current=[n-window.innerWidth/2,r-window.innerHeight/2]}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,null,"click anywhere!"),a.a.createElement(f.a,{camera:{position:[0,0,200]},shadowMap:!0,onMouseMove:d,onClick:function(){i(!0),setTimeout((function(){return p(!0)}),3e3)}},a.a.createElement("ambientLight",null),a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.b,{center:!0,className:"loading",children:"Loading..."})},a.a.createElement(w,{mouse:e,onMouseMove:d,clicked:o}),a.a.createElement(P,{left:!0,size:10,position:[0,10,0],color:u.mainGrey,index:99},"Jaesook Jeong"))),m&&a.a.createElement(q.a,{to:"/work"}))},V=Object(r.createContext)(0);function X(e){var t=e.children,n=e.offset,o=e.factor,i=Object(O.a)(e,["children","offset","factor"]),c=K(),l=c.offset,s=c.sectionHeight,u=Object(r.useRef)();return n=void 0!==n?n:l,Object(f.g)((function(){var e=u.current.position.y,t=J.top.current;u.current.position.y=v()(e,t/J.zoom*o,.1)})),a.a.createElement(V.Provider,{value:n},a.a.createElement("group",Object.assign({},i,{position:[0,-s*n*o,0]}),a.a.createElement("group",{ref:u},t)))}function K(){var e=J.sections,t=J.zoom,n=Object(f.i)(),a=n.size,o=n.viewport,i=Object(r.useContext)(V),c=o.width,l=o.height,s=c/t,u=l/t,m=a.width<700;return{viewport:o,offset:i,viewportWidth:c,viewportHeight:l,canvasWidth:s,canvasHeight:u,mobile:m,margin:s*(m?.2:.1),contentMaxWidth:s*(m?.8:.5),sectionHeight:u,offsetFactor:(i+1)/e}}n(65).a.init();var $=Object(r.forwardRef)((function(e,t){e.color;var n=e.shift,o=void 0===n?1:n,i=(e.opacity,e.args),c=e.map,l=Object(O.a)(e,["color","shift","opacity","args","map"]),s=K(),u=s.viewportHeight,m=s.offsetFactor,p=Object(f.h)(b.TextureLoader,c),d=Object(r.useRef)(),h=J.top.current;return Object(f.g)((function(){var e=J.pages,t=J.top;d.current.scale=v()(d.current.scale,m-t.current/((e-1)*u),.1),d.current.shift=v()(d.current.shift,(t.current-h)/o,.1),h=t.current})),a.a.createElement(a.a.Fragment,null,a.a.createElement("mesh",Object.assign({ref:t},l),a.a.createElement("meshBasicMaterial",{ref:d,attach:"material",map:p,transparent:!0}),a.a.createElement("planeBufferGeometry",{attach:"geometry",args:i,transparent:!0})))})),Q=n(46);function Z(){var e=Object(l.a)(["\n  height: ",'vh;\n  cursor: url("/cursor5.png"), auto;\n']);return Z=function(){return e},e}function ee(e){var t=e.index,n=e.offset,r=e.factor,o=e.header,i=e.aspect,c=e.text,l=e.image,s=(e.repo,K()),m=s.contentMaxWidth,f=s.canvasWidth,p=s.margin,d=s.mobile,h=i<1&&!d?.65:1,v=(f-m*h-p)/2,b=m*J.zoom*h,g=!(t%2);return a.a.createElement(X,{factor:r,offset:n},a.a.createElement("group",{position:[g?-v:v,0,0]},a.a.createElement($,{map:l,args:[1,1,32,32],shift:75,size:h,aspect:i,scale:[m*h,m*h/i,1],frustumCulled:!1,index:t}),a.a.createElement(Q.a,{style:{width:b/(d?1:2),textAlign:g?"left":"right",color:u.mainGrey,fontSize:20},position:[g||d?-m*h/2:0,-m*h/2/i-.4,1]},a.a.createElement("div",{tabIndex:t},c)),a.a.createElement(Q.a,{style:{width:b/(d?1:2),textAlign:g?"left":"right",fontSize:60,fontWeight:"800",color:u.mainGrey},position:[g?-m*h/2:m*h/2-9.5,m*h/i/2+1.1,-1]},a.a.createElement("div",null,o)),a.a.createElement(X,{factor:.2},a.a.createElement(P,{opacity:.5,size:.1*m,color:u.primaryColor,position:[(g?m:-m)/2*h,m*h/i/1.5,-10]},"0"+(t+1))),a.a.createElement(X,{factor:.2},a.a.createElement(P,{opacity:.5,size:.05*m,color:u.blue,position:[g?m/2*h+v:-m/2*h-v,m*h/i/1-10,-10]},"click!"))))}function te(){return a.a.createElement(a.a.Fragment,null,J.paragraphs.map((function(e,t){return a.a.createElement(ee,Object.assign({key:t,index:t},e))})))}function ne(){var e=Object(r.useState)([!1,null]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(r.useRef)(),l=function(e){return J.top.current=e.target.scrollTop};Object(r.useEffect)((function(){l({target:i.current})}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{concurrent:!0,pixelRatio:1,orthographic:!0,camera:{zoom:J.zoom,position:[0,0,500]}},a.a.createElement(r.Suspense,{fallback:a.a.createElement(Q.a,{center:!0,className:"loading",children:"Loading..."})},a.a.createElement(te,null))),a.a.createElement("div",{className:"scrollArea",ref:i,onScroll:l},new Array(J.sections).fill().map((function(e,t){return a.a.createElement(re,{key:t,id:"0"+t,onClick:function(e){return function(e,t){o([!0,t])}(0,t)}})}))),n[0]&&a.a.createElement(q.a,{to:"/details/".concat(n[1])}))}var re=s.b.div(Z(),J.pages/J.sections*100);function ae(){var e=Object(l.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  h1 {\n    position: absolute;\n    top: 43vh;\n    width: 95%;\n    font-size: 7rem;\n    color: ",";\n    opacity: 80%;\n    transition: all 0.5s ease;\n  }\n  p {\n    position: absolute;\n    font-size: 1.3rem;\n    font-style: italic;\n    top: 55vh;\n    width: 95%;\n    color: ",";\n    opacity: 90%;\n    transition: all 0.5s ease;\n  }\n  iframe {\n    height: 50vh;\n    width: 80vh;\n  }\n"]);return ae=function(){return e},e}var oe=s.b.div(ae(),u.pink,u.primaryColor);var ie=function(e){var t=e.str,n=e.text,r=e.vid;return a.a.createElement(oe,null,a.a.createElement("iframe",{src:r,title:"vid"}),a.a.createElement("h1",null,t),a.a.createElement("p",null,n))};function ce(){var e=Object(l.a)(["\n  width: 60%;\n  margin: 10px;\n\n  h1 {\n    margin-bottom: 10px;\n    color: ",";\n  }\n  p {\n    margin-bottom: 50px;\n    color: ",";\n  }\n"]);return ce=function(){return e},e}function le(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  place-items: center center;\n  grid-gap: 1em;\n  max-width: 90%;\n  max-height: 90%;\n  overflow: scroll;\n  img {\n    max-width: 100%;\n    max-height: 90%;\n  }\n"]);return le=function(){return e},e}function se(){var e=Object(l.a)(["\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]);return se=function(){return e},e}var ue=s.b.section(se()),me=s.b.div(le()),fe=s.b.div(ce(),u.blue,u.mainGrey);var pe=function(e){var t=e.images,n=e.description;return a.a.createElement(ue,null,a.a.createElement(me,{images:t},t.map((function(e,t){return a.a.createElement("img",{src:e,alt:"",key:t})})),a.a.createElement(fe,null,a.a.createElement("h1",null,"About this Project"),a.a.createElement("p",null,n.about),a.a.createElement("h1",null,"Technical Sheet"),a.a.createElement("p",null,n.tech),a.a.createElement("h1",null,"distribution "),a.a.createElement("p",null,n.dist,"%"),a.a.createElement("h1",null,"Resources "),a.a.createElement("p",null,n.resource))))};function de(){var e=Object(l.a)(["\n  background-color: ",";\n  transition: all 0.5s ease;\n"]);return de=function(){return e},e}var he=s.b.div(de(),(function(e){return e.activeBG?u.pink:u.mainWhite})),ve=function(e){var t=e.match,n=Object(r.useState)(!1),o=Object(c.a)(n,2),i=o[0],l=o[1],s=J.paragraphs[parseInt(t.params.index)].header,u=J.paragraphs[parseInt(t.params.index)].text;function m(){this.scrollY>this.innerHeight/2?l(!0):l(!1)}return Object(r.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[]),a.a.createElement(he,{activeBG:i},a.a.createElement(ie,{str:s,text:u,vid:J.paragraphs[parseInt(t.params.index)].vid}),a.a.createElement(pe,{images:J.paragraphs[parseInt(t.params.index)].details,description:J.paragraphs[parseInt(t.params.index)].description}))},be=n(22);function ge(){var e=Object(l.a)(["\n  pointer-events: none;\n  width: 50px;\nheight: 50px;\nposition: fixed;\npadding: 0.3rem;\nborder: 1px solid ",";\nbox-shadow: 1px 1px;\nborder-radius: 50%;\nopacity: 70%;\nmix-blend-mode: difference;\ntransition: transform 1s ease;\ntransform: translate(-50%, -50%);\n /*  width: 50px;\n  height: 50px;\n  position: fixed;\n\n  border: 1px dashed ",";\n  border-radius: 50%;\n  opacity: 70%;\n  mix-blend-mode: difference;\n  transition: 0.01s; */\n  /*  animation: animate 10s linear infinite;\n  \n  @keyframes animate {\n    0% {\n      transform: translate(-50%, -50%) rotate(0deg);\n    }\n    100% {\n      transform: translate(-50%, -50%) rotate(360deg);\n    }\n  } */\n"]);return ge=function(){return e},e}var Ee=s.b.div(ge(),(function(e){return e.color}),u.blue);var xe=function(){var e=Object(r.useRef)(),t=Object(r.useState)(u.blue),n=Object(c.a)(t,2),o=n[0],i=n[1],l=function(t){var n=t.clientX,r=t.clientY;e.current&&(e.current.style.left=n+"px",e.current.style.top=r+"px")};return Object(r.useEffect)((function(){window.addEventListener("pointermove",l),setInterval((function(){return i(u[Object.keys(u)[Math.floor(Math.random()*Object.keys(u).length)]])}),1e4)}),[]),a.a.createElement(Ee,{ref:e,color:o})};function ye(){var e=Object(l.a)(["\n  position: absolute;\n  top: 2%;\n  left: 2%;\n  font-size: 1.2em;\n  text-decoration: none;\n  text-align: center;\n  /*   display: inline;\n */\n  ul li {\n    list-style: none;\n    float: left;\n    width: 100px;\n    color: ",";\n  }\n  .text-link {\n    text-decoration: none;\n    color: inherit;\n  }\n  .right {\n    position: absolute;\n    text-decoration: none;\n    color: ",';\n    color: "white";\n    left: 91vw;\n  }\n\n  .text-link::after {\n    content: "";\n    display: block;\n    width: 0;\n    height: 2px;\n    background: ',";\n    transition: width 0.3s;\n  }\n  .text-link:hover::after {\n    width: 100%;\n    transition: width 0.3s;\n  }\n"]);return ye=function(){return e},e}var we=s.b.nav(ye(),u.mainGrey,u.mainGrey,u.mainGrey),Oe=function(){return a.a.createElement(we,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(be.c,{className:"text-link",to:"/about"},"about")),a.a.createElement("li",null,a.a.createElement(be.c,{className:"text-link",to:"/work"},"work")),a.a.createElement("li",null," ",a.a.createElement(be.c,{className:"text-link",to:"/work"},"contact"))),a.a.createElement(be.c,{className:"right text-link",to:"/"},"home"),a.a.createElement(xe,{className:"cursor"}))};function je(){var e=Object(r.useRef)(),t=0;return Object(f.g)((function(n,r){if(t=requestAnimationFrame(ke),e.current.children)for(var a=0;a<e.current.children.length;a++){for(var o=e.current.children[a],i=0;i<=o.userData.verticesAmount;i++){var c=o.geometry.vertices[i],l=3*d.noise.simplex3(.009*c.x,.009*c.z+.006*t,.009*o.geometry.y);c.copy(c._o),c.multiplyScalar(100+l)}o.geometry.verticesNeedUpdate=!0}})),a.a.createElement("group",{ref:e,rotation:[1.55,0,0]},a.a.createElement(E,{movement:!0,moveto:[{x:-120,z:120},{x:120,z:120},{x:-120,z:-120},{x:120,z:-120}]}))}function ke(){return a.a.createElement(je,null)}var Me=n(2),ze=n(49);function Ce(){var e=Object(l.a)(["\n  visibility: hidden;\n  color: ",";\n  position: absolute;\n  top: ","vh;\n  left: ","vw;\n  font-weight: ",";\n  max-width: 400px;\n  transform: translate(-50%, -50%);\n"]);return Ce=function(){return e},e}var Se=s.b.div(Ce(),(function(e){return e.color}),(function(e){return e.top}),(function(e){return e.left}),(function(e){return e.isbold?"700":"200"}));var Ae=function(e){var t=e.children,n=e.isbold,o=e.top,i=e.left,c=e.color,l=Object(r.useRef)(null),s=new Me.d;return Object(r.useEffect)((function(){ze.a.to(l,2,{css:{visibility:"visible"}}),s.from(l,1,{y:44,opacity:0,ease:Me.b.easeInOut,delay:2})})),a.a.createElement(Se,{ref:function(e){return l=e},top:o,left:i,isbold:n,color:c},t)};function Be(e){e.isbold;var t=Object(r.useRef)(null),n=J.about.whoami,o=J.about.promo,i=J.about.skills,c=J.about.contact;return Object(r.useEffect)((function(){console.log(t)})),a.a.createElement("div",{ref:function(e){return t=e}},a.a.createElement(Ae,{isbold:!0,top:15,left:37,color:u.blue},"Who am I?"),a.a.createElement(Ae,{top:30,left:38,color:u.blue},n),a.a.createElement(Ae,{isbold:!0,top:15,left:65,color:u.pink},"Skills"),a.a.createElement(Ae,{top:29,left:63,color:u.pink},a.a.createElement("ul",null,i.map((function(e,t){return a.a.createElement("li",{key:t},e)})))),a.a.createElement(Ae,{isbold:!0,top:73,left:35,color:u.primaryColor},o),a.a.createElement(Ae,{top:73,left:64,color:u.mainGrey},a.a.createElement("ul",null,c.map((function(e,t){return a.a.createElement("li",{key:t},e)})))))}var Ge=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{camera:{position:[0,0,350]},shadowMap:!0},a.a.createElement("ambientLight",null),a.a.createElement(ke,null)),a.a.createElement(Be,null))};function Re(){var e=Object(l.a)(["\n\n*{\n  margin:0;\n  padding:0;\n  box-sizing:border-box;\n  cursor: none;\n}\n.scrollArea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n}\n\n body{\n  font-size:100%;\n  background-color:",";\n  font-family: ","\n}\nCanvas{\n  height:100vh;\n}\n\n"]);return Re=function(){return e},e}var De=Object(s.a)(Re(),u.mainWhite,"'DM Mono', monospace;");var Fe=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(De,null),a.a.createElement(be.b,{basename:"/"},a.a.createElement(q.d,null,a.a.createElement(q.b,{exact:!0,path:"/",render:function(e){return a.a.createElement(_,null)}}),a.a.createElement(q.b,{path:"/about",component:Ge}),a.a.createElement(q.b,{path:"/work",component:ne}),a.a.createElement(q.b,{path:"/details/:index",component:ve})),a.a.createElement(Oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(be.a,null,a.a.createElement(Fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.2d2540ec.chunk.js.map