(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(3),s=n.n(r),a=(n(9),n(4)),l=(n(10),n(0));var o=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("http://localhost:4001/recentlyPlayed").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(l.jsx)("div",{className:"App",children:n&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"title",children:"Emma Strickland"}),Object(l.jsxs)("div",{className:"subtext",children:["Software Engineer based in Brooklyn, NY",Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"link",children:Object(l.jsx)("a",{href:"mailto:emlstrick@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Email"})}),Object(l.jsx)("div",{className:"link",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/emmalstrickland/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(l.jsx)("div",{className:"link",children:Object(l.jsx)("a",{href:"https://github.com/emma-strickland",target:"_blank",rel:"noopener noreferrer",children:"Github"})}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"current",children:"Currently listening to:"}),Object(l.jsxs)("div",{className:"music-text",children:[Object(l.jsx)("img",{src:n.image,alt:"album-art",className:"album-art",onClick:function(){window.open("https://open.spotify.com/user/1242322676?si=865f2ec92d6a4a14","_blank")}}),Object(l.jsxs)("div",{className:"music-subtitle",children:['"',n.track,'" \u2013 ',n.artist]})]})]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7a43bce6.chunk.js.map