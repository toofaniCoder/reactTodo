(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(15),a(1)),l=a(2),s=a(4),u=a(3),d=a(5);var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"text-white m-0"},"What is your main focus for today?"))},f=r.a.createContext(),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isAddTodos:!0,editData:{userId:"",id:"",title:"",completed:""},todos:[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0}]},a.onDelete=function(e){var t=a.state.todos.filter(function(t){return t.id!=e});a.setState({todos:t})},a.onAdd=function(e,t,n){if(""!==e){var r={title:e,id:t,completed:!1};a.setState(function(e){return{todos:e.todos.concat(r)}})}},a.onEdit=function(e){a.setState({isAddTodos:!1});var t=a.state.todos.filter(function(t){if(t.id==e)return t}),n=t[0],r=n.userId,c=n.id,i=n.title,o=n.completed;a.setState({editData:{userId:r,id:c,title:i,completed:o}}),console.log(t)},a.onSave=function(e,t){var n=a.state.todos.map(function(a){var n=a.userId,r=a.id,c=a.completed;return a.id==e?{userId:n,id:r,title:t.current.value,completed:c}:a});a.setState({todos:n}),a.setState({isAddTodos:!0})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={data:this.state,onDelete:this.onDelete,onAdd:this.onAdd,onEdit:this.onEdit,onSave:this.onSave};return r.a.createElement(f.Provider,{value:e},this.props.children)}}]),t}(n.Component),h=f.Consumer,v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){var t=this;return r.a.createElement(h,null,function(e){var a=e.data.todos,n=e.onDelete,c=e.onEdit;return a.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"d-flex",key:e.id},r.a.createElement("span",{className:"mr-auto"},e.title),r.a.createElement("span",{className:"fas fa-pencil-alt mr-2",style:{cursor:"pointer"},onClick:c.bind(t,e.id)}),r.a.createElement("i",{className:"fas fa-trash-alt ml-2",style:{cursor:"pointer"},onClick:n.bind(t,e.id)})))})})}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v,null)}}]),t}(n.Component),E=a(6),j=a.n(E),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:""})},a.state={value:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h,null,function(t){var a=t.onAdd;return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"form-group pt-3"},r.a.createElement("input",{type:"text",className:"form-control",onChange:e.handleChange,value:e.state.value,required:!0}))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{className:"btn btn-primary shadow",style:{borderRadius:"50%",width:"50px",height:"50px",padding:"0px !important"},onClick:a.bind(e,e.state.value,j()())},r.a.createElement("i",{className:"fas fa-plus",style:{fontSize:"20px"}})))))})}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({value:""}),console.log(a.myRef.current.value)},a.myRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h,null,function(t){var a=t.data.editData,n=a.id,c=a.title;return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"form-group pt-3"},r.a.createElement("input",{type:"text",className:"form-control",defaultValue:c,ref:e.myRef,required:!0}))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{type:"submit",className:"btn btn-success shadow",style:{borderRadius:"50%",width:"50px",height:"50px",padding:"0px !important"},onClick:t.onSave.bind(e,n,e.myRef)},r.a.createElement("i",{className:"fas fa-check",style:{fontSize:"20px"}})))))})}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,function(e){return e.data.isAddTodos?r.a.createElement(y,null):r.a.createElement(O,null)})}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement("div",{className:"App d-flex justify-content-center pt-3"},r.a.createElement("div",{className:"card shadow-lg",style:{width:"30%"}},r.a.createElement("div",{className:"card-header bg-dark"},r.a.createElement(m,null)),r.a.createElement("div",{className:"card-body"},r.a.createElement(b,null),r.a.createElement(g,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.54deb073.chunk.js.map