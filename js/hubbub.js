(()=>{Hubbub=function(){"use strict";if(![].forEach||!window.XMLHttpRequest)return;var b="hubbub",s="data-gist-url",m="https://api.github.com/",g=document.querySelectorAll("."+b),d={},A=!1,i={avatar:"hubbub-avatar",avatarLink:"hubbub-avatar-link",header:"hubbub-header",username:"hubbub-username",commentBody:"hubbub-comment-body",timestamp:"hubbub-timestamp",permalink:"hubbub-permalink",content:"hubbub-content",container:"hubbub-container"},o=function(){var t="hubbub-",r=36e5;return{has:function(e){return localStorage.getItem(t+e)!==null},get:function(e){var a=JSON.parse(localStorage.getItem(t+e));return a!==null&&Date.now()-a.createdAt>r&&localStorage.removeItem(t+e),a.comments},set:function(e,a){var n={comments:a,createdAt:Date.now()};localStorage.setItem(t+e,JSON.stringify(n))}}}();[].forEach.call(g,function(t){h(t,f)});function h(t,r){var e=t.getAttribute(s).match(/\/(\w+)\/?$/)[1];if(o.has(e))r(t,o.get(e),e);else{var a;A?a="fixtures/"+e+".json":a=m+"gists/"+e+"/comments",p({url:a,dataType:"json"},function(n){C(n,e,t,r)},function(n){t.innerHTML=t.innerHTML+"<small>Error fetching Comments</small>"})}}function C(t,r,e,a){var n={url:m+"markdown",reqDataType:"json",type:"POST"},u="\u3091",x=t.reduce(function(c,l){return c+l.body+`\r
\r
`+u+`\r
\r
`},"");n.data={text:x},p(n,function(c){var l=c.split("<p>"+u+"</p>");l.forEach(function(M,v){t[v]&&(t[v].html_body=M.trim())}),o.set(r,t),a(e,t)})}function f(t,r){var e=document.createElement("h3");e.setAttribute("class","heading");var a=document.createElement("a");a.setAttribute("href",t.getAttribute(s)),a.textContent="Comments ("+r.length+")",e.appendChild(a),t.appendChild(e),r.forEach(function(n){t.appendChild(y(t,n))})}function y(t,r){var e=document.createElement("div");e.setAttribute("class",i.container),e.appendChild(w(r.user));var a=document.createElement("div");return a.setAttribute("class",i.content),a.appendChild(E(t,r)),a.appendChild(S(r)),e.appendChild(a),e}function E(t,r){var e=document.createElement("div");e.setAttribute("class",i.header);var a=document.createElement("a");a.setAttribute("class",i.username),a.setAttribute("href",r.user.html_url),a.innerHTML="<b>"+r.user.login+"</b>";var n=t.getAttribute(s);n=n+"#comment-"+r.id;var u=document.createElement("a");return u.setAttribute("class",i.permalink),u.setAttribute("href",n),u.textContent="commented",e.appendChild(a),e.appendChild(u),e.appendChild(T(r.created_at)),e}function T(t){var r=Date.now()-new Date(t).getTime(),e=document.createElement("time");e.setAttribute("class",i.timestamp),e.setAttribute("datetime",t),e.setAttribute("title",t),r=Math.round(r/1e3);var a;if(r<3600)a=Math.round(r/60)+" minutes ago";else if(r<86400){var n=Math.round(r/3600);a=n===1?"an hour ago":n+" hours ago"}else{var u=Math.round(r/86400);a=u===1?"yesterday":u+" days ago"}return e.textContent=a,e}function S(t){var r=document.createElement("div");return r.setAttribute("class",i.commentBody),r.innerHTML=t.html_body,r}function p(t,r,e){var a=new XMLHttpRequest;t.type=t.type||"GET",a.addEventListener("readystatechange",function(n){if(a.readyState===4&&a.status===200){var u;t.dataType==="json"?u=JSON.parse(n.target.responseText):u=n.target.responseText,r(u,n)}else a.readyState===4&&e&&e(n)}),a.open(t.type,t.url,!0),t.reqDataType==="json"?(a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(t.data))):a.send(t.data)}function w(t){var r=document.createElement("a");r.setAttribute("href",t.html_url),r.setAttribute("class",i.avatarLink);var e=document.createElement("img");return e.setAttribute("class",i.avatar),e.setAttribute("src",t.avatar_url),e.setAttribute("width",48),e.setAttribute("height",48),r.appendChild(e),r}return d.appendWidget=function(t,r){var e=document.createElement("div");e.setAttribute("class",b),e.setAttribute(s,r),t.appendChild(e),h(e,f)},d.css=i,d}();})();
/*!
    Hubbub

    by Chris Newton <http://chrisnewtn.com>,
       Seanewt <http://seanewt.com>,
       Dharmafly <http://dharmafly.com>

    Repo: <https://github.com/asyncjs/hubbub>
    MIT license
*/
//# sourceMappingURL=hubbub.js.map