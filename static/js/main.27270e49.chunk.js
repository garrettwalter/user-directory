(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{61:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s(29),l=s.n(n),r=s(9),i=s(2),o=s(11),m=s(12),j=s(15),h=s(14),d=s(13),u=s.n(d),b=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"col d-flex justify-content-center p-3",children:Object(a.jsx)("img",{src:e.image,alt:"employee"})}),Object(a.jsxs)("div",{className:"card-header col d-flex justify-content-center",children:[e.firstName," ",e.lastName]}),Object(a.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(a.jsx)("li",{className:"list-group-item col d-flex justify-content-center",children:e.cell}),Object(a.jsx)("li",{className:"list-group-item col d-flex justify-content-center",children:e.email}),Object(a.jsxs)("li",{className:"list-group-item  col d-flex justify-content-center",children:[e.city,", ",e.state,", ",e.country]})]})]})})},x=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={image:"",cell:"",email:"",city:"",state:"",country:"",firstName:"",lastName:""},e.getNewEmployee=function(){u.a.get("https://randomuser.me/api/").then((function(t){console.log(t),e.setState({image:t.data.results[0].picture.large}),e.setState({cell:t.data.results[0].cell}),e.setState({email:t.data.results[0].email}),e.setState({city:t.data.results[0].location.city}),e.setState({state:t.data.results[0].location.state}),e.setState({country:t.data.results[0].location.country}),e.setState({firstName:t.data.results[0].name.first}),e.setState({lastName:t.data.results[0].name.last})})).catch((function(e){console.log(e)}))},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getNewEmployee()}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("h2",{className:"col d-flex justify-content-center p-3",children:"Meet a random employee:"})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-3"}),Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)(b,{image:this.state.image,cell:this.state.cell,email:this.state.email,firstName:this.state.firstName,lastName:this.state.lastName,city:this.state.city,country:this.state.country,state:this.state.state})}),Object(a.jsx)("div",{className:"col-sm-3"})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col text-center p-3",children:Object(a.jsx)("button",{className:"btn btn-dark",onClick:this.getNewEmployee,children:"NEW"})})})]})}}]),s}(c.Component),O=s(30),p=function(e){return u.a.get("https://randomuser.me/api/?sort=abc&results=20&gender="+e)};var f=function(e){return Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"d-flex justify-content-center mt-3",htmlFor:"exampleFormControlSelect1",children:"Load employees that are:"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-4"}),Object(a.jsxs)("select",{className:"col-sm-4 form-control mt-3",id:"search",onChange:e.handleInputChange,value:e.search,name:"search",children:[Object(a.jsx)("option",{children:"All"}),Object(a.jsx)("option",{children:"male"}),Object(a.jsx)("option",{children:"female"})]}),Object(a.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary d-flex justify-content-center mt-3",children:"Search"}),Object(a.jsx)("div",{className:"col-sm-4"})]})]})})};var v=function(e){return Object(a.jsx)("ul",{className:"list-group",children:e.results.map((function(e){return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("img",{alt:e.name.first,className:"img-fluid",src:e.picture.medium}),Object(a.jsxs)("h3",{className:"float-right",children:[e.name.first," ",e.name.last]}),Object(a.jsx)("p",{children:e.cell}),Object(a.jsx)("p",{children:e.email}),Object(a.jsxs)("p",{children:[e.location.city,", ",e.location.state,", ",e.location.country]})]},e.name.first+e.name.last)}))})},N=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={search:"",results:[]},e.searchEmployees=function(t){p(t).then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var s=t.target.name,a=t.target.value;e.setState(Object(O.a)({},s,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees(e.state.search)},e.handleClick=function(){e.state.results.sort((function(e,t){return e.last>t.last?1:-1}))},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.searchEmployees("male")}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("button",{search:this.state.search,className:"btn btn-primary",onClick:this.handleClick,children:"Sort By Name"})}),Object(a.jsx)(v,{results:this.state.results})]})}}]),s}(c.Component);var y=function(){var e=Object(i.e)();return Object(a.jsxs)("ul",{className:"nav nav-tabs navbar navbar-dark bg-primary",children:[Object(a.jsx)("li",{className:"navbar navbar-expand-lg bg-primary navbar-brand col d-flex justify-content-center",children:"USER DIRECTORY"}),Object(a.jsx)("li",{className:"nav-item bg-light",children:Object(a.jsx)(r.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item bg-light",children:Object(a.jsx)(r.b,{to:"/discover",className:"/discover"===e.pathname?"nav-link active":"nav-link",children:"Discover"})}),Object(a.jsx)("li",{className:"nav-item bg-light",children:Object(a.jsx)(r.b,{to:"/search",className:"/search"===e.pathname?"nav-link active":"nav-link",children:"Table"})})]})},g=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-1"}),Object(a.jsxs)("div",{className:"col-sm-10 justify-content-center m-5 p-5 text-center",children:[Object(a.jsx)("h1",{children:"Welcome to USER DIRECTORY!"}),Object(a.jsx)("h5",{children:"Visit the Discover tab to meet a random user or the Search tab to see all the users."})]}),Object(a.jsx)("div",{className:"col-sm-1"})]})})},S=function(){return Object(a.jsxs)(r.a,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(i.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(i.a,{exact:!0,path:"/discover",component:x}),Object(a.jsx)(i.a,{exact:!0,path:"/Search",component:N})]})};s(60);l.a.render(Object(a.jsx)(S,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.27270e49.chunk.js.map