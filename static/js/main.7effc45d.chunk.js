(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,o){t.exports=o(22)},20:function(t,e,o){},22:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(11),i=o.n(r),c=o(7),l=o(1),d=o(2),s=o(4),u=o(3),p=o(5);var m={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},h=function(){return a.a.createElement("header",{style:m},a.a.createElement("h1",null,"TodoList"))},f=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ","",o),a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"x"))}}]),e}(n.Component),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=f,y=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(n.Component),g=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o.onChange=function(t){return o.setState({title:t.target.value})},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component),j=o(6),O=o.n(j),k=(o(20),function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{id:O.a.v4(),title:"Go to school",completed:!1},{id:O.a.v4(),title:"Develop a website",completed:!1},{id:O.a.v4(),title:"Work with pleasure",completed:!1}]},o.markComplete=function(t){o.setState({todos:o.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},o.delTodo=function(t){o.setState({todos:Object(c.a)(o.state.todos.filter(function(e){return e.id!==t}))})},o.addTodo=function(t){var e={id:O.a.v4(),title:t,completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[e])})},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(h,null),a.a.createElement(g,{addTodo:this.addTodo}),a.a.createElement(y,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo})))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.7effc45d.chunk.js.map