(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(3),s=n.n(i),a=(n(9),n(4)),l=(n(10),n(0));var o=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("http://localhost:4001/recentlyPlayed").then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){console.log("error: ",e)}))}),[]),Object(l.jsx)("div",{className:"App",children:n&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"title",children:"Emma Strickland"}),Object(l.jsxs)("div",{className:"subtext",children:["Software Engineer based in Brooklyn, NY",Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"link",children:Object(l.jsx)("a",{href:"mailto:emlstrick@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Email"})}),Object(l.jsx)("div",{className:"link",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/emmalstrickland/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(l.jsx)("div",{className:"link",children:Object(l.jsx)("a",{href:"https://github.com/emma-strickland",target:"_blank",rel:"noopener noreferrer",children:"Github"})}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"current",children:"Currently listening to:"}),Object(l.jsxs)("div",{className:"music-text",children:[Object(l.jsx)("img",{src:n.image,alt:"album-art",className:"album-art",onClick:function(){window.open("https://open.spotify.com/user/1242322676?si=865f2ec92d6a4a14","_blank")}}),Object(l.jsxs)("div",{className:"music-subtitle",children:['"',n.track,'" \u2013 ',n.artist]})]})]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.3d91ddbf.chunk.js.map