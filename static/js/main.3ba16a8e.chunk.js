(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,,,,,function(e,t){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(5),s=a(3),l={currTab:"TAB_MAIN"},d=(a(26),Object(s.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TAB":return Object.assign({},e,{currTab:t.payload});default:return e}},Object(s.a)())),u=(a(27),function(){return r.a.createElement("div",{id:"tab-main"},r.a.createElement("div",{className:"circle background"}),r.a.createElement("div",{className:"circle outer"}),r.a.createElement("div",{className:"circle middle"}),r.a.createElement("div",{className:"circle inner"}),r.a.createElement("div",{className:"circle name"}))}),m=a(12),h=a(13),p=a(15),g=a(14),E=a(16),b=(a(28),function(e){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-out",onClick:function(){return e.toggleModal()}},r.a.createElement("div",{className:"top"}),r.a.createElement("div",{className:"right"}),r.a.createElement("div",{className:"bottom"}),r.a.createElement("div",{className:"left"})),r.a.createElement("div",{className:"modal-in"},r.a.createElement("div",{className:"modal__header"},e.title),r.a.createElement("div",{className:"modal__img"},r.a.createElement("img",{src:"/Portfolio/img/"+e.img,alt:"project image"})),r.a.createElement("p",{className:"modal__desc"},e.desc),r.a.createElement("div",{className:"modal__keywords"},r.a.createElement("div",{className:"modal__keywords__header"},"Keywords"),e.keywords.map(function(e,t){return r.a.createElement("div",{className:"keyword",key:t},e)})),r.a.createElement("div",{className:"modal__links"},r.a.createElement("a",{href:e.deployed,target:"_blank"},"Deployed Site"),r.a.createElement("a",{href:e.github,target:"_blank"},"Github Link"))))}),f=(a(29),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1},a.toggleModal=function(){a.setState({modal:!a.state.modal})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"proj-box"},this.state.modal?r.a.createElement(b,{title:this.props.proj.title,img:this.props.proj.img,keywords:this.props.proj.keywords,desc:this.props.proj.desc,github:this.props.proj.github,deployed:this.props.proj.deployed,toggleModal:this.toggleModal}):"",r.a.createElement("div",{className:"proj",onClick:function(){return e.toggleModal()}},r.a.createElement("div",{className:"proj__title"},this.props.proj.title)))}}]),t}(r.a.Component)),T=[{title:"{this}",img:"this.png",keywords:["Frontend","React.js","Redux","CSS3","SVG","SASS","Arts"],desc:"This website is a React.js Redux frontend app for my portfolio. This application shows React.js Redux application architecture and uses personal arts and CSS styles. All SVG images, including the background, are drawn by hand and inkscape.",github:"https://github.com/kikim1025/Portfolio",deployed:"https://kikim1025.github.io/Portfolio/"},{title:"React Calculator",img:"rc.png",keywords:["Frontend","React.js","Redux","Demo"],desc:"A frontend app, written to demonstarte React.js and Redux architecture and methodologies. This frontend app functions as a virtual calculator. The Redux stores the math displayed on the screen and provides actions upon each button click to update the math. After each button clicks, the logic will determine whether or not the input is valid, and update the display accordingly with either results or error messages. In terms of components, Redux is connected to a CalculatorContainer component, thereby providing connection to the presentational sub-components which constructs the way the UI looks. Detailed explanations on React Redux architecture and logic are shown on the readme file on the github repository page.",github:"https://github.com/kikim1025/Reacting-Calculadora",deployed:"https://kikim1025.github.io/Reacting-Calculadora/"},{title:"Sticky Messages",img:"sticky-messages.png",keywords:["MERN","Full Stack","RESTful API","React.js","Node.js","Express.js","MongoDB"],desc:"A MERN full-stack app that users can post sticky-messages to each other. This application primarily uses Node.js, Express.js, React.js and MongoDB to deploy a website users can log in and post messages to another user in a message board. On the backend, server is created using Node.js and Express.js, using RESTful API to communicate with client. MongoDB contains user data such as login, password, or user messages and their contents. The backend uses NPM packets such as Bcrypt to encrypt user passwords, and JSON Web Token for user authentification. On the frontend, the client code is written using React.js, using a sticky post-it themed style for each messages.",github:"https://github.com/kikim1025/Sticky-Messages",deployed:"https://sticky-messages.herokuapp.com/"}],k=(a(30),function(){return r.a.createElement("div",{id:"tab-projects"},T.map(function(e,t){return r.a.createElement(f,{proj:e,key:t})}))}),v=(a(31),function(){return r.a.createElement("div",{id:"contact"},r.a.createElement("div",{id:"contact__name"},"Ki Beom Kim"),r.a.createElement("div",{id:"contact__email"},"kikim1025@gmail.com"),r.a.createElement("a",{id:"contact__linkedin",href:"https://www.linkedin.com/in/ki-kim-670515177/",target:"_blank"},"LinkedIn Link"),r.a.createElement("a",{id:"contact__github",href:"https://github.com/kikim1025",target:"_blank"},"Github Repository Link"))}),_=(a(32),function(){return r.a.createElement("div",{id:"tab-contact"},r.a.createElement(v,null))}),y=(a(33),function(e){return r.a.createElement("div",{className:"button "+e.dir,onClick:function(){return e.changeTab(e.des)}},e.name)}),N=(a(34),function(e){return r.a.createElement("div",null,function(e,t){switch(e){case"TAB_MAIN":return r.a.createElement("nav",{id:"tab-menu"},r.a.createElement(y,{dir:"left",name:"Contact",des:"TAB_CONTACT",changeTab:t}),r.a.createElement("div",{id:"tab-menu__currTab"},"Main"),r.a.createElement(y,{dir:"right",name:"Projects",des:"TAB_PROJECTS",changeTab:t}));case"TAB_PROJECTS":return r.a.createElement("nav",{id:"tab-menu"},r.a.createElement(y,{dir:"left",name:"Main",des:"TAB_MAIN",changeTab:t}),r.a.createElement("div",{id:"tab-menu__currTab"},"Projects"),r.a.createElement(y,{dir:"right",name:"Contact",des:"TAB_CONTACT",changeTab:t}));case"TAB_CONTACT":return r.a.createElement("nav",{id:"tab-menu"},r.a.createElement(y,{dir:"left",name:"Projects",des:"TAB_PROJECTS",changeTab:t}),r.a.createElement("div",{id:"tab-menu__currTab"},"Contact"),r.a.createElement(y,{dir:"right",name:"Main",des:"TAB_MAIN",changeTab:t}));default:return r.a.createElement("div",null,"ERROR RETRIEVING TAB DATA")}}(e.currTab,e.changeTab))}),A=(a(35),function(e){return r.a.createElement("article",{id:"tab"},function(e){switch(e){case"TAB_MAIN":return r.a.createElement(u,null);case"TAB_PROJECTS":return r.a.createElement(k,null);case"TAB_CONTACT":return r.a.createElement(_,null);default:return r.a.createElement("div",null,"ERROR RETRIEVING TAB DATA")}}(e.currTab),r.a.createElement(N,{currTab:e.currTab,changeTab:e.changeTab}))}),j=Object(o.b)(function(e){return{currTab:e.currTab}},function(e){return{changeTab:function(t){return e(function(e){return{type:"CHANGE_TAB",payload:e}}(t))}}})(A),R=(a(36),function(){return r.a.createElement("div",{id:"page"},r.a.createElement(j,null))}),w=(a(37),function(){return r.a.createElement("div",{id:"App"},r.a.createElement(R,null))});i.a.render(r.a.createElement(o.a,{store:d},r.a.createElement(w,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.3ba16a8e.chunk.js.map