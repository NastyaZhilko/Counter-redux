(this["webpackJsonpcounter-redux"]=this["webpackJsonpcounter-redux"]||[]).push([[0],{13:function(e,t,a){e.exports={button:"Button_button__Dxyj4"}},2:function(e,t,a){e.exports={App:"App_App__1e8CC",Button:"App_Button__OxHgK",body:"App_body__woq_Y"}},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),l=a(7),r=a.n(l),u=(a(20),a(2)),i=a.n(u),d=a(13),o=a.n(d),b=function(e){return Object(n.jsx)("div",{className:o.a.button,children:Object(n.jsx)("button",{onClick:e.clickOnButton,disabled:e.disabledButton,children:e.title})})},j=a(6),x=a.n(j),m=function(e){return Object(n.jsx)("div",{children:e.message?Object(n.jsx)("h3",{className:"Incorrect value"===e.message?x.a.errorStyle:x.a.correctlyStyle,children:e.message}):Object(n.jsx)("h3",{className:e.value===e.maxValue?x.a.errorStyle:x.a.correctlyStyle,children:e.value})})},O=a(8),_=a.n(O),p=function(e){return Object(n.jsxs)("div",{className:_.a.input,children:[Object(n.jsx)("span",{children:e.title}),Object(n.jsx)("input",{className:e.value<0||e.message?_.a.errorStyle:_.a.correctlyStyle,onChange:function(t){e.changeValue(Number(t.currentTarget.value))},value:e.value,type:"number"})]})},v=a(5),V=a(3),S=function(e,t){var a={max:e,start:t};localStorage.setItem("counter",JSON.stringify(a))},g=function(){var e=localStorage.getItem("counter");return e?JSON.parse(e):{max:null,start:null}},y={count:g().start,startValue:g().start,maxValue:g().max,disabledInc:!1,disabledReset:!0,disabledSet:!0,message:""};var h=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.counter}));return Object(n.jsxs)("div",{className:i.a.App,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Settings"}),Object(n.jsxs)("div",{className:i.a.body,children:[Object(n.jsx)(p,{value:t.maxValue,title:"max value:",changeValue:function(t){e(function(e){return{type:"CHANGE_MAX_VALUE",maxValue:e}}(t))},message:t.maxValue<=t.startValue}),Object(n.jsx)(p,{value:t.startValue,title:"start value:",changeValue:function(t){e(function(e){return{type:"CHANGE_START_VALUE",startValue:e}}(t))},message:t.startValue>=t.maxValue}),Object(n.jsx)("div",{className:i.a.Button,children:Object(n.jsx)(b,{clickOnButton:function(){e({type:"SET_BUTTON"})},title:"set",disabledButton:t.disabledSet})})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Counter"}),Object(n.jsxs)("div",{className:i.a.body,children:[Object(n.jsx)(m,{value:t.count,maxValue:t.maxValue,message:t.message}),Object(n.jsxs)("div",{className:i.a.Button,children:[Object(n.jsx)(b,{clickOnButton:function(){e({type:"INC_BUTTON"})},title:"inc",disabledButton:t.disabledInc}),Object(n.jsx)(b,{clickOnButton:function(){e({type:"RESET_BUTTON"})},title:"reset",disabledButton:t.disabledReset})]})]})]})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))},N=a(4),T=Object(N.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC_BUTTON":var a=Object(V.a)({},e);return a.count<a.maxValue?(a.count=a.count+1,a.disabledInc=!1,a.disabledReset=!0):(a.disabledReset=!1,a.disabledInc=!0),a;case"RESET_BUTTON":var n=Object(V.a)({},e);return n.count=n.startValue,n.disabledInc=!1,n.disabledReset=!0,n;case"CHANGE_START_VALUE":var s=Object(V.a)({},e);return s.maxValue<=t.startValue||t.startValue<0?(s.startValue=t.startValue,s.disabledReset=!0,s.disabledInc=!0,s.disabledSet=!0,s.message="Incorrect value"):(s.startValue=t.startValue,s.disabledReset=!0,s.disabledInc=!0,s.disabledSet=!1,s.message="enter values and press 'set'"),s;case"CHANGE_MAX_VALUE":var c=Object(V.a)({},e);return t.maxValue<=c.startValue||c.startValue<0?(c.maxValue=t.maxValue,c.disabledReset=!0,c.disabledInc=!0,c.disabledSet=!0,c.message="Incorrect value"):(c.maxValue=t.maxValue,c.disabledReset=!0,c.disabledInc=!0,c.disabledSet=!1,c.message="enter values and press 'set'"),c;case"SET_BUTTON":var l=Object(V.a)({},e);return l.count=l.startValue,l.disabledSet=!0,l.disabledReset=!0,l.disabledInc=!1,l.message="",S(l.maxValue,l.startValue),l;default:return e}}}),I=Object(N.c)(T);window.store=I,r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v.a,{store:I,children:Object(n.jsx)(h,{})})}),document.getElementById("root")),f()},6:function(e,t,a){e.exports={correctlyStyle:"Input_correctlyStyle__25Z1E",errorStyle:"Input_errorStyle__1TcTk"}},8:function(e,t,a){e.exports={correctlyStyle:"InputSetting_correctlyStyle__1cZ-l",errorStyle:"InputSetting_errorStyle__YSMHj",input:"InputSetting_input__2roys"}}},[[27,1,2]]]);
//# sourceMappingURL=main.d2b0f83b.chunk.js.map