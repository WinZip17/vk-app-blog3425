(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,i){e.exports=i(264)},264:function(e,t,i){"use strict";i.r(t);i(164),i(215);var n=i(0),r=i.n(n),c=i(23),a=i.n(c),s=i(34),o=i.n(s),l=i(95),u=i(96),m=i(101),p=i(97),h=i(102),v=i(3),E=(i(86),function(e){return r.a.createElement(v.i,{id:"films",activePanel:"tabs"},r.a.createElement(v.d,{id:"tabs"},r.a.createElement(v.e,{noShadow:!0},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u0447\u0435\u043a"),r.a.createElement(v.a,{vertical:"top"},r.a.createElement(v.g,{theme:"header",type:"buttons"},r.a.createElement(v.c,null,r.a.createElement(v.h,{onClick:function(){return e.setActiveCategory("films")},selected:"films"===e.state.activeCategory},"\u0424\u0438\u043b\u044c\u043c\u044b"),r.a.createElement(v.h,{onClick:function(){return e.setActiveCategory("cartoons")},selected:"cartoons"===e.state.activeCategory},"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b"),r.a.createElement(v.h,{onClick:function(){return e.setActiveCategory("series")},selected:"series"===e.state.activeCategory},"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"),r.a.createElement(v.h,{onClick:function(){return e.setActiveCategory("anime")},selected:"anime"===e.state.activeCategory},"\u0410\u043d\u0438\u043c\u0435")))),r.a.createElement(v.b,{title:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b"},r.a.createElement(v.g,{type:"buttons"},r.a.createElement(v.c,null,r.a.createElement(v.h,{onClick:function(){return e.setActiveFilter("top")},selected:"top"===e.state.activeFilter},"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"),r.a.createElement(v.h,{onClick:function(){return e.setActiveFilter("year")},selected:"year"===e.state.activeFilter},"\u0413\u043e\u0434"),r.a.createElement(v.h,{onClick:function(){return e.setActiveFilter("genre")},selected:"genre"===e.state.activeFilter},"\u0416\u0430\u043d\u0440"),r.a.createElement(v.h,{onClick:function(){return e.setActiveFilter("inter")},selected:"inter"===e.state.activeFilter},"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435")))),r.a.createElement(v.b,null,r.a.createElement("iframe",{width:"350",height:"250",src:"https://www.youtube.com/embed/yM1QjdoLmxQ",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))}),d=i(42),f=i(30),y=i(99),g=y.create({baseURL:"http://moonwalk.cc/api/"}),A=function(){return g.get("movies_updates.json?api_token=".concat("b36e2c01d03db7050e348d03d32f10a7")).then(function(e){return e.data})},b={token:"",isVisible:!1,activeArticle:"films",activeFilter:"top",activeCategory:"films",width:"20",height:"20",filmsList:{}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(f.a)({},e,{token:t.token});case"SET_ARTICLE":return Object(f.a)({},e,{activeArticle:t.article});case"SET_CATEGORY":return Object(f.a)({},e,{activeCategory:t.activeCategory});case"SET_FILTER":return Object(f.a)({},e,{activeFilter:t.activeFilter});case"SET_WIDTH":return Object(f.a)({},e,{width:t.width});case"SET_HEIGHT":return Object(f.a)({},e,{height:t.height});case"GET_NEW_FILMS_LIST":return Object(f.a)({},e,{filmsList:t.filmsList});default:return e}},w=function(){return r.a.createElement(v.i,null,"\u0422\u0443\u0442 \u0442\u0438\u043f\u0430 \u0444\u0438\u043b\u044c\u043c \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442")},T=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.setWidth(window.innerWidth),this.props.setHeight(window.innerHeight),this.props.getFilmsList()}},{key:"render",value:function(){return r.a.createElement(v.f,{activeView:this.props.main.activeArticle},r.a.createElement(E,{setActiveArticle:this.props.setActiveArticle,setActiveFilter:this.props.setActiveFilter,setActiveCategory:this.props.setActiveCategory,id:"films",state:this.props.main}),r.a.createElement(w,{setActiveArticle:this.props.setActiveArticle,setActiveFilter:this.props.setActiveFilter,state:this.props.main,id:"preview"}))}}]),t}(r.a.Component),F=Object(d.b)(function(e){return{main:e.main}},function(e){return{setActiveArticle:function(t){e(function(e){return{type:"SET_ARTICLE",article:e}}(t))},setActiveFilter:function(t){e(function(e){return{type:"SET_FILTER",activeFilter:e}}(t))},setActiveCategory:function(t){e(function(e){return{type:"SET_CATEGORY",activeCategory:e}}(t))},setWidth:function(t){e(function(e){return{type:"SET_WIDTH",width:e}}(t))},setHeight:function(t){e(function(e){return{type:"SET_HEIGHT",height:e}}(t))},getFilmsList:function(){e(function(e){A().then(function(t){e({type:"GET_NEW_FILMS_LIST",filmsList:t})})})}}})(T),O=i(35),_=i(100),j=Object(O.c)({main:C}),k=Object(O.d)(j,Object(O.a)(_.a));window.store=k;var S=k;o.a.send("VKWebAppInit",{}),a.a.render(r.a.createElement(d.a,{store:S},r.a.createElement(F,null)),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.3c80c3b4.chunk.js.map