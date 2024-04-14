import{S as c,N as l,K as a,M as u,A as v,a as b,i as h}from"./assets/vendor-f9e3a663.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&p(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function p(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const y=document.querySelector(".title-navigation"),w=document.querySelector(".list-navigation"),L=document.querySelectorAll(".link-item-navigation");y.addEventListener("click",S);function S(e){e.preventDefault(),w.classList.toggle("show-menu")}L.forEach(function(e){e.addEventListener("click",function(){w.classList.toggle("show-menu")})});const E=document.querySelectorAll(".link-item-navigation-mobile-menu"),f=document.querySelector(".mobile-menu-wrapper"),q=document.querySelector(".mobile-menu-open-btn"),M=document.querySelector(".mobile-menu-close-btn"),B=document.querySelector(".link-order_project-navigation-mobile-menu");document.querySelector(".link-order_project-navigation-mobile-menu");q.addEventListener("click",x);M.addEventListener("click",d);function x(){f.classList.add("modal-open")}function d(){f.classList.remove("modal-open")}E.forEach(function(e){e.addEventListener("click",function(){d()})});B.addEventListener("click",function(){d()});new c(".projects .swiper",{modules:[l,a,u],direction:"horizontal",spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0}});const k=document.querySelector(".accordion-container");new v(k,{showMultiple:!0,duration:400});const N=document.querySelectorAll(".marquee-inner"),g=()=>{const e=window.innerHeight/2;for(const t of N)t.getBoundingClientRect().top<e?t.classList.add("show"):t.classList.remove("show")};g();window.addEventListener("scroll",g);c.use([l,a,u]);let i;const O=document.querySelector(".review-list");document.addEventListener("DOMContentLoaded",function(){z()});async function P(){const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await b.get(e,{headers:{accept:"application/json"}})).data}catch{j()}}function j(e){h.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),O.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}function A({author:e,avatar_url:t,review:r}){return`<li class="review-card swiper-slide"> 
        <img class="card-image"
            src= "${t}"
            alt = "review from ${e}"
            width = "48"
            height = "48"
            loading = "lazy"
        />
        <h3 class="card-title">${e}</h3>
        <p class="reviews-paragraph">${r}</p>
    </li>`}async function z(){const t=(await P()).map(A).join(""),r=document.querySelector(".swiper-wrapper");r?(r.innerHTML=t,C()):console.log("Swiper wrapper not found")}function C(){i=new c(".reviews .swiper-container",{modules:[l,a,u],direction:"horizontal",loop:!1,autoHeight:!0,navigation:{nextEl:".reviews .swiper-button-next",prevEl:".reviews .swiper-button-prev"},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,invert:!0},speed:1200,simulateTouch:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1},1400:{slidesPerView:4,slidesPerGroup:1}}}),m(),i.on("slideChange",()=>{m()})}function m(){let e=document.querySelector(".reviews .swiper-button-prev"),t=document.querySelector(".reviews .swiper-button-next");e.classList.toggle("swiper-button-disabled",i.isBeginning),t.classList.toggle("swiper-button-disabled",i.isEnd)}
//# sourceMappingURL=commonHelpers.js.map
