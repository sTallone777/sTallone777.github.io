(()=>{var a="🌝",i="🌚",r="disqus",n="light",m="dark",c=document.getElementById("theme-switcher");c.innerHTML=localStorage.theme===n?a:i;c.addEventListener("click",function(){let e=localStorage.theme,t=e===n?m:n;u(e,t),r==="utterances"&&h(`github-${t}`)});function u(e,t){let{classList:s}=document.documentElement,l=t===n?a:i;s.remove(e),s.add(t),localStorage.theme=t,c.innerHTML=l}var d=".utterances-frame",o;function h(e){o||(o=document.querySelector(d)),o.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}document.querySelectorAll(".md ul").forEach(e=>{/<li><input .+>.+<\/li>/.test(e.innerHTML)&&e.classList.add("ul-checkbox")});document.querySelector("body").style.setProperty("--global-font-family","LXGW WenKai");var f="true";f==="false"&&(document.documentElement.style="user-select:none");})();