(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=a(6),l=a(5),s=function(){return r.a.createElement("section",{id:"main"},r.a.createElement("div",{className:"circle circle-background"}),r.a.createElement("div",{className:"circle circle-outer"}),r.a.createElement("div",{className:"circle circle-middle"}),r.a.createElement("div",{className:"circle circle-inner"}),r.a.createElement("div",{className:"circle circle-name"}))},d=a(16),m=a(17),u=a(21),p=a(18),h=a(22),g=function(e){return r.a.createElement("article",{className:"modal-box"},r.a.createElement("section",{className:"modal-out",onClick:function(){return e.toggleModal()}}),r.a.createElement("section",{className:"modal"},r.a.createElement("div",{className:"modal__header"},e.title),r.a.createElement("figure",{className:"modal__img"},r.a.createElement("img",{src:"/Portfolio/img/"+e.img,alt:"project image"})),r.a.createElement("p",{className:"modal__desc"},e.desc),r.a.createElement("div",{className:"modal__keywords"},r.a.createElement("div",{className:"modal__keywords__header"},"Keywords"),e.keywords.map(function(e,t){return r.a.createElement("div",{className:"keyword",key:t},e)})),r.a.createElement("div",{className:"modal__links"},r.a.createElement("a",{href:e.deployed,target:"_blank",rel:"noopener noreferrer"},"Deployed Site"),r.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github Link"))))},E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1},a.toggleModal=function(){a.setState({modal:!a.state.modal})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"proj-box"},this.state.modal?r.a.createElement(g,{title:this.props.proj.title,img:this.props.proj.img,keywords:this.props.proj.keywords,desc:this.props.proj.desc,github:this.props.proj.github,deployed:this.props.proj.deployed,toggleModal:this.toggleModal}):"",r.a.createElement("div",{className:"proj",onClick:function(){return e.toggleModal()}},r.a.createElement("div",{className:"proj__title"},this.props.proj.title)))}}]),t}(r.a.Component),b=[{title:"this",img:"this.png",keywords:["Frontend","React.js","React Router","CSS3","SASS","SVG"],desc:"This website is a React.js frontend app for my portfolio. This application shows React.js with React Router architecture and uses personal arts and CSS styles. React Router manages main, projects, and contact tabs, routing and redirecting based on URL. All SVG images, including the background, are drawn by hand and inkscape.",github:"https://github.com/kikim1025/Portfolio",deployed:"https://kikim1025.github.io/Portfolio/"},{title:"React Calculator",img:"rc.png",keywords:["Frontend","React.js","Redux","Redux Middleware","Demo"],desc:"A simple frontend app, written to demonstarte React.js and Redux architecture and methodologies. This frontend app functions as a virtual calculator. The Redux stores the math displayed on the screen and provides actions upon each button click to update the math. Upon each button inputs, the redux middleware process and logic will determine whether or not current input is valid and update the display accordingly with either a result or an error message. In terms of components, Redux is connected to a CalculatorContainer component, thereby providing connection to the presentational sub-components which constructs the way the UI looks. Detailed explanations on React Redux architecture and logic are shown on the readme file on the github repository page.",github:"https://github.com/kikim1025/Reacting-Calculadora",deployed:"https://kikim1025.github.io/Reacting-Calculadora/"},{title:"Company Hunter",img:"company-hunter.png",keywords:["Full Stack","RESTful API","React.js","Redux","Redux Thunk","Node.js","Express.js","MongoDB"],desc:"A MERN full stack app. App is used to view the list of companies, create a new company, edit a company data, and delete each data. On frontend, React is used for a SPA, and Redux is used to store retrieved company data array and modal data for specific chosen company for creating or editing. Redux Thunk middleware and Axios are used for the communication between client and server. On backend, Node.js is used with Express.js in RESTful API to host a server, saving company data in MongoDB.",github:"https://github.com/kikim1025/Company-Hunter",deployed:"https://cryptic-brook-28508.herokuapp.com/"}],f=function(){return r.a.createElement("section",{id:"projects"},b.map(function(e,t){return r.a.createElement(E,{proj:e,key:t})}))},k=function(){return r.a.createElement("section",{id:"contact"},r.a.createElement("article",{id:"contact-box"},r.a.createElement("div",{id:"contact__name"},"Ki Beom Kim"),r.a.createElement("div",{id:"contact__email"},"kikim1025@gmail.com"),r.a.createElement("a",{id:"contact__linkedin",href:"https://www.linkedin.com/in/ki-kim-670515177/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn Link"),r.a.createElement("a",{id:"contact__github",href:"https://github.com/kikim1025",target:"_blank",rel:"noopener noreferrer"},"Github Repository Link")))},y=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/Main",component:s}),r.a.createElement(l.b,{exact:!0,path:"/Projects",component:f}),r.a.createElement(l.b,{exact:!0,path:"/Contact",component:k}),r.a.createElement(l.a,{to:"/Main"}))},v=function(e){return r.a.createElement("span",{className:"button button--"+e.dir},r.a.createElement(i.b,{className:"button__link",to:"/"+e.name},e.name))},w=Object(l.g)(function(e){return function(e){switch(e){case"/Projects":return r.a.createElement("nav",{className:"navbar"},r.a.createElement(v,{dir:"left",name:"Main"}),r.a.createElement("div",{id:"navbar__name"},"Projects"),r.a.createElement(v,{dir:"right",name:"Contact"}));case"/Contact":return r.a.createElement("nav",{className:"navbar"},r.a.createElement(v,{dir:"left",name:"Projects"}),r.a.createElement("div",{id:"navbar__name"},"Contact"),r.a.createElement(v,{dir:"right",name:"Main"}));default:return r.a.createElement("nav",{className:"navbar"},r.a.createElement(v,{dir:"left",name:"Contact"}),r.a.createElement("div",{id:"navbar__name"},"Main"),r.a.createElement(v,{dir:"right",name:"Projects"}))}}(e.location.pathname)}),_=function(){return r.a.createElement("main",null,r.a.createElement(y,null),r.a.createElement(w,null))},j=function(){return r.a.createElement("div",{id:"App"},r.a.createElement(_,null))};a(32);c.a.render(r.a.createElement(i.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.09a37485.chunk.js.map