(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a.p+"static/media/defaultPoster.c971e3c9.png"},196:function(e,t,a){e.exports=a(309)},308:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);a(197),a(248);var n=a(0),r=a.n(n),i=a(37),o=a.n(i),c=a(40),s=a.n(c),l=a(150),u=a(128),m=a(129),v=a(151),p=a(130),E=a(152),f=a(9),d=a(36),y=a(13),h=a(136),g="7f129085d2f372833fcc5e2116e4d0a4",O=h.create({baseURL:"https://kodikapi.com/"}),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"updated_at",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"foreign-movie",n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=(arguments.length>4&&arguments[4],arguments.length>5&&void 0!==arguments[5]?arguments[5]:null);!0===n&&(n="");var i="&genres=".concat(r);return null===r&&(i=""),O.get("list?token=".concat(g,"&limit=").concat(21,"&sort=").concat(e,"&order=").concat(t,"&types=").concat(a,"&camrip=").concat(n).concat(i,"&with_material_data=true")).then(function(e){return e.data}).catch(function(e){console.log(e)})},_=function(e){return O.get("search?token=".concat(g,"&title=").concat(e,"&with_material_data=true")).then(function(e){return e.data}).catch(function(e){console.log(e)})},S=a(69),A={token:"",isVisible:!1,activeView:"content",activeArticle:"films",activeFilter:"top",activeCategory:"films",searchCategory:"",subCategory:[],width:"20",height:"20",filmsList:{},activeStory:null,activeModal:null,modalHistory:[],scheme:!1,isReady:r.a.createElement(S.a,null),defaultIframeUrl:"",moviesInfo:{id:"",title:"",title_orig:"",other_title:"",link:"",year:"",kinopoisk_id:"",imdb_id:"",camrip:"",created_at:"",updated_at:"",material_data:{poster_url:""}},currentListOptions:{limit:21,sort:"updated_at",order:"desc",types:"foreign-movie,russian-movie",year:"",camrip:!0,genres:null},nextListOptions:{limit:21,sort:"updated_at",order:"desc",types:"foreign-movie,russian-movie",year:"",camrip:!0,genres:null},search:""},T=function(e){return{type:"SET_ARTICLE",article:e}},I=function(e){return{type:"SET_VIEW",activeView:e}},b=function(e){return{type:"SET_FILTER",activeFilter:e}},M=function(e){return{type:"SET_CATEGORY",activeCategory:e}},L=function(e){return{type:"SET_STORY",activeStory:e}},k=function(e){return{type:"SET_ACTIVE_MODAL_PAGE",activeModal:e}},j=function(e){return{type:"SET_SCHEME",scheme:e}},R=function(e){return{type:"SET_IFRAME_URL",defaultIframeUrl:e}},N=function(e){return{type:"SET_MOVIE_INFO",moviesInfo:e}},V=function(e){return{type:"SET_MODAL_HISTORY",modalHistory:e}},w=function(e){return{type:"SET_WIDTH",width:e}},H=function(e){return{type:"SET_HEIGHT",height:e}},G=function(e){return{type:"GET_NEW_MOVIE_LIST",filmsList:e}},x=function(e){return{type:"SET_MOVIE_SORT",sort:e}},F=function(e){return{type:"SET_MOVIE_ORDER",order:e}},P=function(e){return{type:"SET_MOVIE_TYPES",types:e}},U=function(e){return{type:"SET_MOVIE_CAMRIP",camrip:e}},Y=function(e){return{type:"SET_MOVIE_YEAR",year:e}},D=function(e){var t=e.sort,a=e.order,n=e.types,r=e.camrip,i=e.year,o=e.genres;return function(e){C(t,a,n,r,i,o).then(function(t){e(G(t))})}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(y.a)({},e,{token:t.token});case"SET_ARTICLE":return Object(y.a)({},e,{activeArticle:t.article});case"SET_VIEW":return Object(y.a)({},e,{activeView:t.activeView});case"SET_CATEGORY":return Object(y.a)({},e,{activeCategory:t.activeCategory});case"SET_FILTER":return Object(y.a)({},e,{activeFilter:t.activeFilter});case"SET_STORY":return Object(y.a)({},e,{activeStory:t.activeStory});case"SET_SCHEME":var a=document.createAttribute("scheme");return a.value=t.scheme?"client_dark":"client_light",document.body.attributes.setNamedItem(a),Object(y.a)({},e,{scheme:t.scheme});case"SET_ACTIVE_MODAL_PAGE":return Object(y.a)({},e,{activeModal:t.activeModal});case"SET_MODAL_HISTORY":return Object(y.a)({},e,{modalHistory:t.modalHistory});case"SET_IFRAME_URL":var n=t.defaultIframeUrl;return n.includes("http:")&&(n="https"+n.slice(4)),Object(y.a)({},e,{defaultIframeUrl:t.defaultIframeUrl});case"SET_MOVIE_INFO":return Object(y.a)({},e,{moviesInfo:t.moviesInfo});case"SET_WIDTH":return Object(y.a)({},e,{width:t.width});case"SET_HEIGHT":return Object(y.a)({},e,{height:t.height});case"GET_NEW_MOVIE_LIST":return Object(y.a)({},e,{filmsList:t.filmsList.results,isReady:null});case"SET_MOVIE_SORT":return""===t.sort?e:Object(y.a)({},e,{nextListOptions:Object(y.a)({},e.nextListOptions,{sort:t.sort})});case"SET_MOVIE_ORDER":return""===t.order?e:Object(y.a)({},e,{nextListOptions:Object(y.a)({},e.nextListOptions,{order:t.order})});case"SET_MOVIE_TYPES":return""===t.types?e:Object(y.a)({},e,{nextListOptions:Object(y.a)({},e.nextListOptions,{types:t.types})});case"SET_MOVIE_CAMRIP":return Object(y.a)({},e,{nextListOptions:Object(y.a)({},e.nextListOptions,{camrip:t.camrip})});case"SET_MOVIE_GENRES":return""===t.genres?e:Object(y.a)({},e,{nextListOptions:Object(y.a)({},e.nextListOptions,{genres:t.genres})});case"SET_MOVIE_YEAR":return Object(y.a)({},e,e.listOptions.year=t.year);case"ON_CHANGE_SEARCH":return Object(y.a)({},e,{search:t.value});case"CHANGE_LIST_OPTIONS":return Object(y.a)({},e,{currentListOptions:t.nextListOptions});case"ON_CHANGE_FILTER_CATEGORY":switch(t.searchCategory){case"movie":return Object(y.a)({},e,{searchCategory:t.searchCategory,subCategory:[{value:"foreign-movie",name:"\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043d\u044b\u0435"},{value:"russian-movie",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0435"}]});case"cartoons":return Object(y.a)({},e,{searchCategory:t.searchCategory,subCategory:[{value:"foreign-cartoon",name:"\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043d\u044b\u0435"},{value:"soviet-cartoon",name:"\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0438\u0435"},{value:"russian-cartoon",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0435"},{value:"cartoon-serial",name:"\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043d\u044b\u0435 \u043c\u0443\u043b\u044c\u0442\u0441\u0435\u0440\u0438\u0430\u043b\u044b"},{value:"russian-cartoon-serial",name:"\u0420\u0443\u0441\u043a\u0438\u0435 \u043c\u0443\u043b\u044c\u0442\u0441\u0435\u0440\u0438\u0430\u043b\u044b"}]});case"series":return Object(y.a)({},e,{searchCategory:t.searchCategory,subCategory:[{value:"foreign-serial",name:"\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b"},{value:"documentary-serial",name:"\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043d\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b"},{value:"cartoon-serial",name:"\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043d\u044b\u0435 \u043c\u0443\u043b\u044c\u0442\u0441\u0435\u0440\u0438\u0430\u043b\u044b"},{value:"russian-serial",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b"},{value:"russian-documentary-serial",name:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b"},{value:"russian-cartoon-serial",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0435 \u043c\u0443\u043b\u044c\u0442\u0441\u0435\u0440\u0438\u0430\u043b\u044b"},{value:"anime-serial",name:"\u0410\u043d\u0438\u043c\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b"}]});case"anime":return Object(y.a)({},e,{searchCategory:t.searchCategory,subCategory:[{value:"anime",name:"\u0410\u043d\u0438\u043c\u0435"},{value:"anime-serial",name:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b \u0430\u043d\u0438\u043c\u0435"}]});default:return Object(y.a)({},e,{searchCategory:t.searchCategory,subCategory:[]})}default:return e}},B=(a(65),function(e){return r.a.createElement("div",{className:"moviesCell",onClick:function(){e.setIframeUrl(e.movies.link),e.setMoviesInfo(e.movies),e.setActiveModal("MODAL_PAGE_PLAY")}},r.a.createElement("div",{className:"moviesCellDiv"},r.a.createElement("div",{className:"moviesCell-img "},"material_data"in e.movies&&"poster_url"in e.movies.material_data?r.a.createElement("img",{className:"poster",src:e.movies.material_data.poster_url||a(127),alt:"poster"}):r.a.createElement("img",{className:"poster",src:a(127),alt:"poster"})),r.a.createElement("div",{className:"moviesCell-text"},r.a.createElement("p",null,r.a.createElement("b",null,e.movies.title)),e.movies.year?r.a.createElement("p",null,"\u0413\u043e\u0434: ",e.movies.year):"")))}),q=function(e){return r.a.createElement(f.h,{className:"listDisplay"},e.list.map(function(t){return r.a.createElement(B,{key:t.id,movies:t,setIframeUrl:e.setIframeUrl,setActiveModal:e.setActiveModal,setMoviesInfo:e.setMoviesInfo})}))},J=a(146),K=a.n(J),z=a(147),X=a.n(z),Q=a(56),Z=a.n(Q),$=a(141),ee=a.n($),te=a(142),ae=a.n(te),ne=a(143),re=a.n(ne),ie=a(144),oe=a.n(ie),ce=a(145),se=a.n(ce),le=Object(d.b)(function(e){return{state:e.main}},function(e){return{setActiveStory:function(t){e(L(t))},setActiveModal:function(t){e(k(t))},setActiveView:function(t){e(I(t))},setTypes:function(t){e(P(t))},getMovieList:function(t){e(D(t))},setActiveCategory:function(t){e(M(t))},setSort:function(t){e(x(t))},setOrder:function(t){e(F(t))},setCamrip:function(t){e(U(t))}}})(function(e){return r.a.createElement(K.a,{activeStory:e.state.activeStory,tabbar:r.a.createElement(X.a,null,r.a.createElement(Z.a,{onClick:function(){e.setActiveStory("feed"),e.setTypes("foreign-movie,russian-movie"),e.setActiveCategory("films"),e.setSort("updated_at"),e.setCamrip(!0),e.setOrder("desc")},"data-story":"feed"},r.a.createElement(ee.a,null)),r.a.createElement(Z.a,{onClick:function(){e.setActiveStory("discover"),e.setActiveView("search")},selected:"discover"===e.state.activeStory,"data-story":"discover"},r.a.createElement(ae.a,null)),r.a.createElement(Z.a,{onClick:function(){e.setActiveStory("favorite")},selected:"favorite"===e.state.activeStory,"data-story":"notifications"},r.a.createElement(se.a,null)),r.a.createElement(Z.a,{onClick:function(){e.setActiveStory("notifications")},selected:"notifications"===e.state.activeStory,"data-story":"notifications"},r.a.createElement(re.a,null)),r.a.createElement(Z.a,{onClick:function(){e.setActiveStory("more"),e.setActiveModal("MODAL_PAGE_SETTINGS")},selected:"more"===e.state.activeStory,"data-story":"more"},r.a.createElement(oe.a,null)))})}),ue=Object(d.b)(function(e){return{state:e.main}},function(e){return{setActiveArticle:function(t){e(T(t))},setActiveFilter:function(t){e(b(t))},setActiveStory:function(t){e(L(t))},setActiveCategory:function(t){e(M(t))},setActiveModal:function(t){e(k(t))},setModalHistory:function(t){e(V(t))},setIframeUrl:function(t){e(R(t))},setMoviesInfo:function(t){e(N(t))},setScheme:function(t){e(j(t.currentTarget.checked))},setWidth:function(t){e(w(t))},setHeight:function(t){e(H(t))},getMovieList:function(t){e(D(t))},setSort:function(t){e(x(t))},setOrder:function(t){e(F(t))},setTypes:function(t){e(P(t))},setCamrip:function(t){e(U(t))},setYear:function(t){e(Y(t))}}})(function(e){return r.a.createElement(f.r,{popout:e.state.isReady,id:e.id,activePanel:"tabs",modal:e.modal},r.a.createElement(f.l,{id:"tabs"},r.a.createElement(f.m,{noShadow:!0},"KINOMIX"),r.a.createElement(f.c,{vertical:"top"},r.a.createElement(f.p,{theme:"header",type:"buttons"},r.a.createElement(f.e,null,r.a.createElement(f.q,{onClick:function(){e.setActiveCategory("films"),e.setTypes("foreign-movie,russian-movie")},selected:"films"===e.state.activeCategory},"\u0424\u0438\u043b\u044c\u043c\u044b"),r.a.createElement(f.q,{onClick:function(){e.setActiveCategory("cartoons"),e.setTypes("foreign-cartoon,russian-cartoon,soviet-cartoon")},selected:"cartoons"===e.state.activeCategory},"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b"),r.a.createElement(f.q,{onClick:function(){e.setActiveCategory("series"),e.setTypes("foreign-serial,cartoon-serial,documentary-serial,russian-serial,multi-part-film,russian-documentary-serial,russian-cartoon-serial")},selected:"series"===e.state.activeCategory},"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"),r.a.createElement(f.q,{onClick:function(){e.setActiveCategory("anime"),e.setTypes("anime,anime-serial")},selected:"anime"===e.state.activeCategory},"\u0410\u043d\u0438\u043c\u0435"))),r.a.createElement(le,null)),r.a.createElement(f.d,{className:"mainContainer"},0===e.state.filmsList.length?r.a.createElement("h4",null,"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"):r.a.createElement("div",null),null===e.state.isReady?r.a.createElement(q,{setActiveModal:e.setActiveModal,setIframeUrl:e.setIframeUrl,list:e.state.filmsList,setMoviesInfo:e.setMoviesInfo}):r.a.createElement("div",null))))}),me=a(59),ve=a.n(me),pe=a(95),Ee=a.n(pe),fe=a(42),de=a(48),ye=a(41),he=(a(308),a(54)),ge=a(49),Oe=a(72),Ce=a(68),_e=function(e){return r.a.createElement(ge.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",onChange:e.setTypesFilter,id:"searchSubCategory"},e.subCategory.map(function(e){return r.a.createElement("option",{key:e.name,value:e.value}," ",e.name," ")}))},Se=Object(d.b)(function(e){return{state:e.main}},function(e){return{setActiveArticle:function(t){e(T(t))},setActiveView:function(t){e(I(t))},setActiveFilter:function(t){e(b(t))},setActiveStory:function(t){e(L(t))},setActiveCategory:function(t){e(M(t))},setActiveModal:function(t){e(k(t))},setModalHistory:function(t){e(V(t))},setIframeUrl:function(t){e(R(t))},setMoviesInfo:function(t){e(N(t))},setScheme:function(t){e(j(t.currentTarget.checked))},setWidth:function(t){e(w(t))},setHeight:function(t){e(H(t))},getMovieList:function(t){e(D(t))},setSort:function(t){e(x(t.currentTarget.value))},setOrder:function(t){e(F(t.currentTarget.value))},setTypesFilter:function(t){e(P(t.currentTarget.value))},setCamrip:function(t){e(U(t.currentTarget.checked))},setYear:function(t){e(Y(t))},onChangeSearch:function(t){e({type:"ON_CHANGE_SEARCH",value:t.currentTarget.value})},onChangeFilterCategory:function(t){e({type:"ON_CHANGE_FILTER_CATEGORY",searchCategory:t.currentTarget.value})},searchMovie:function(t){e(function(e){return function(t){_(e).then(function(e){t(G(e))})}}(t))},setGenres:function(t){e({type:"SET_MOVIE_GENRES",genres:t.currentTarget.value})}}})(function(e){return r.a.createElement(f.r,{id:e.id,activePanel:"filter"},r.a.createElement(f.l,{id:"filter",className:"searchContainer"},r.a.createElement(f.m,{addon:r.a.createElement(ye.a,{onClick:function(){e.setActiveView("content"),e.setActiveStory(null),e.setActiveCategory(null)}},"\u041d\u0430\u0437\u0430\u0434"),noShadow:!0},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"),r.a.createElement(f.c,{vertical:"top"},r.a.createElement(le,null)),r.a.createElement(f.d,{title:"\u041f\u043e\u0438\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u0430"},r.a.createElement(fe.a,null,r.a.createElement(Oe.a,{value:e.state.search,onChange:e.onChangeSearch,type:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"}),e.state.search?r.a.createElement(he.a,{size:"xl",onClick:function(){e.searchMovie(e.state.search),e.setActiveView("content"),e.setActiveStory(null),e.setActiveCategory(null)}},"\u041d\u0430\u0439\u0442\u0438"):r.a.createElement(he.a,{size:"xl",disabled:!0},"\u041d\u0430\u0439\u0442\u0438"))),r.a.createElement(f.d,{title:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"},r.a.createElement(fe.a,null,r.a.createElement(de.a,null,r.a.createElement(ge.a,{top:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",id:"searchCategory",onChange:e.onChangeFilterCategory},r.a.createElement("option",{value:"movie"},"\u0424\u0438\u043b\u044c\u043c\u044b"),r.a.createElement("option",{value:"cartoons"},"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b"),r.a.createElement("option",{value:"series"},"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"),r.a.createElement("option",{value:"anime"},"\u0410\u043d\u0438\u043c\u0435")),e.state.subCategory.length>0?r.a.createElement(_e,{setTypesFilter:e.setTypesFilter,subCategory:e.state.subCategory}):r.a.createElement("div",null),r.a.createElement(ge.a,{top:"\u0416\u0430\u043d\u0440",placeholder:"\u0432\u044b\u0431\u0438\u0440\u0435\u0442\u0435 \u0436\u0430\u043d\u0440",onChange:e.setGenres},r.a.createElement("option",{value:"\u0431\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f"},"\u0431\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f"),r.a.createElement("option",{value:"\u0431\u043e\u0435\u0432\u0438\u043a"},"\u0431\u043e\u0435\u0432\u0438\u043a"),r.a.createElement("option",{value:"\u0432\u0435\u0441\u0442\u0435\u0440\u043d"},"\u0432\u0435\u0441\u0442\u0435\u0440\u043d"),r.a.createElement("option",{value:"\u0432\u043e\u0435\u043d\u043d\u044b\u0439"},"\u0432\u043e\u0435\u043d\u043d\u044b\u0439"),r.a.createElement("option",{value:"\u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0432"},"\u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0432"),r.a.createElement("option",{value:"\u0434\u0440\u0430\u043c\u0430"},"\u0434\u0440\u0430\u043c\u0430"),r.a.createElement("option",{value:"\u0438\u0441\u0442\u043e\u0440\u0438\u044f"},"\u0438\u0441\u0442\u043e\u0440\u0438\u044f"),r.a.createElement("option",{value:"\u043a\u043e\u043c\u0435\u0434\u0438\u044f"},"\u043a\u043e\u043c\u0435\u0434\u0438\u044f"),r.a.createElement("option",{value:"\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b"},"\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b"),r.a.createElement("option",{value:"\u043c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430"},"\u043c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430"),r.a.createElement("option",{value:"\u043c\u0443\u0437\u044b\u043a\u0430"},"\u043c\u0443\u0437\u044b\u043a\u0430"),r.a.createElement("option",{value:"\u043c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c"},"\u043c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c"),r.a.createElement("option",{value:"\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"},"\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),r.a.createElement("option",{value:"\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0439"},"\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0439"),r.a.createElement("option",{value:"\u0441\u043f\u043e\u0440\u0442"},"\u0441\u043f\u043e\u0440\u0442"),r.a.createElement("option",{value:"\u0442\u0440\u0438\u043b\u043b\u0435\u0440"},"\u0442\u0440\u0438\u043b\u043b\u0435\u0440"),r.a.createElement("option",{value:"\u0443\u0436\u0430\u0441\u044b"},"\u0443\u0436\u0430\u0441\u044b"),r.a.createElement("option",{value:"\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430"},"\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430"),r.a.createElement("option",{value:"\u0444\u044d\u043d\u0442\u0435\u0437\u0438"},"\u0444\u044d\u043d\u0442\u0435\u0437\u0438")),r.a.createElement(f.a,{asideContent:r.a.createElement(f.o,{checked:e.state.nextListOptions.camrip,onChange:e.setCamrip})},"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e CamRip")))),r.a.createElement(f.d,{title:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"},r.a.createElement(fe.a,null,r.a.createElement(de.a,null,r.a.createElement(ge.a,{top:"\u0421\u043e\u0440\u0442\u0440\u043e\u0432\u043a\u0430",placeholder:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e",onChange:e.setSort},r.a.createElement("option",{value:"updated_at"},"\u0414\u0430\u0442\u0435 \u043e\u0431\u043d\u043e\u0444\u043b\u0435\u043d\u0438\u044f"),r.a.createElement("option",{value:"year"},"\u0413\u043e\u0434 \u0444\u0438\u043b\u044c\u043c\u0430"),r.a.createElement("option",{value:"created_at"},"\u0414\u0430\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438")),r.a.createElement(ge.a,{top:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",placeholder:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",onChange:e.setOrder},r.a.createElement("option",{value:"desc"},"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"),r.a.createElement("option",{value:"asc"},"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"))))),r.a.createElement(Ce.a,null,r.a.createElement(he.a,{size:"xl",onClick:function(){e.setActiveView("content"),e.setActiveStory(null),e.setActiveCategory(null)}},"\u0413\u043e\u0442\u043e\u0432\u043e"))))}),Ae=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).modalBack=function(){a.setActiveModal(a.props.state.modalHistory[a.props.state.modalHistory.length-2])},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){s.a.send("VKWebAppUpdateConfig",{}),this.props.getMovieList(this.props.state.currentListOptions)}},{key:"componentDidUpdate",value:function(){null===this.props.state.isReady&&JSON.stringify(this.props.state.currentListOptions)!==JSON.stringify(this.props.state.nextListOptions)&&(this.props.onChangeListOptions(this.props.state.nextListOptions),this.props.getMovieList(this.props.state.nextListOptions))}},{key:"setActiveModal",value:function(e){e=e||null;var t=this.props.state.modalHistory?Object(l.a)(this.props.state.modalHistory):[];null===e?(t=[],this.props.setActiveStory(null)):-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.props.setActiveModal(e),this.props.setModalHistory(t)}},{key:"render",value:function(){var e=this,t=r.a.createElement(f.k,{activeModal:this.props.state.activeModal},r.a.createElement(f.i,{id:"MODAL_PAGE_SETTINGS",onClose:function(){e.modalBack(),e.props.setActiveStory(null)},header:r.a.createElement(f.j,{left:f.f&&r.a.createElement(ye.a,{onClick:function(){e.modalBack()}},r.a.createElement(ve.a,null)),right:r.a.createElement(ye.a,{onClick:function(){e.modalBack()}},f.g?"\u0413\u043e\u0442\u043e\u0432\u043e":r.a.createElement(Ee.a,null))},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")},r.a.createElement(fe.a,null,r.a.createElement(de.a,{top:"\u0422\u0435\u043c\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f"},r.a.createElement(f.h,null,r.a.createElement(f.a,{asideContent:r.a.createElement(f.o,{id:"scheme",checked:this.props.state.scheme,onChange:this.props.setScheme})},"\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430"))))),r.a.createElement(f.i,{className:"MODAL_PAGE_PLAY",id:"MODAL_PAGE_PLAY",onClose:function(){e.modalBack(),e.props.setActiveStory(null)},header:r.a.createElement(f.j,{left:f.f&&r.a.createElement(ye.a,{onClick:function(){e.modalBack()}},r.a.createElement(ve.a,null)),right:r.a.createElement(ye.a,{onClick:function(){e.modalBack()}},f.g?"":r.a.createElement(Ee.a,null))})},r.a.createElement(fe.a,null,r.a.createElement(de.a,null,r.a.createElement(f.b,null,r.a.createElement("iframe",{src:this.props.state.defaultIframeUrl,width:"360",frameBorder:"0",allowFullScreen:!0,title:"play"}),r.a.createElement("h1",null,this.props.state.moviesInfo.title),this.props.state.moviesInfo.year?r.a.createElement("p",null,"\u0413\u043e\u0434: ",this.props.state.moviesInfo.year):"",this.props.state.moviesInfo.created_at?r.a.createElement("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d: ",this.props.state.moviesInfo.created_at):"")))));return r.a.createElement(f.n,{activeView:this.props.state.activeView},r.a.createElement(ue,{id:"content",modal:t}),r.a.createElement(Se,{id:"search",modal:t}))}}]),t}(r.a.Component),Te=Object(d.b)(function(e){return{state:e.main}},function(e){return{setActiveArticle:function(t){e(T(t))},setActiveFilter:function(t){e(b(t))},setActiveStory:function(t){e(L(t))},setActiveCategory:function(t){e(M(t))},setActiveModal:function(t){e(k(t))},setModalHistory:function(t){e(V(t))},setIframeUrl:function(t){e(R(t))},setMoviesInfo:function(t){e(N(t))},setScheme:function(t){e(j(t.currentTarget.checked))},setWidth:function(t){e(w(t))},setHeight:function(t){e(H(t))},getMovieList:function(t){e(D(t))},setSort:function(t){e(x(t))},setOrder:function(t){e(F(t))},setTypes:function(t){e(P(t))},setCamrip:function(t){e(U(t))},setYear:function(t){e(Y(t))},onChangeListOptions:function(t){e(function(e){return{type:"CHANGE_LIST_OPTIONS",nextListOptions:e}}(t))}}})(Ae),Ie=a(55),be=a(149),Me=Object(Ie.c)({main:W}),Le=Object(Ie.d)(Me,Object(Ie.a)(be.a));window.store=Le;var ke=Le;s.a.send("VKWebAppInit",{}),o.a.render(r.a.createElement(d.a,{store:ke},r.a.createElement(Te,null)),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.5934292d.chunk.js.map