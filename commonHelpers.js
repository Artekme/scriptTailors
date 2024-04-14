import{A as h,S as c,N as l,K as d,M as u,E as B,P as k,a as L,i as b}from"./assets/vendor-deff1ef9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const x=document.querySelector(".title-navigation"),f=document.querySelector(".list-navigation");x.addEventListener("click",C);function C(e){e.preventDefault(),f.classList.contains("hidden")?f.classList.remove("hidden"):f.classList.add("hidden")}const w=document.querySelectorAll(".accordion-button-icon-about-me"),S=document.querySelector(".accordion-container-about-me"),M=new h(S,{showMultiple:!0,duration:250});M.open(0);S.addEventListener("click",N);function N(e){const t=e.target.closest("button");t&&t.tagName==="BUTTON"&&(t.id==="ac-trigger-0"?w[0].classList.toggle("clicked"):t.id==="ac-trigger-1"?w[1].classList.toggle("clicked"):t.id==="ac-trigger-2"&&w[2].classList.toggle("clicked"))}const O=document.querySelector(".swiper2"),V=document.querySelector(".swiper-button-next-about-me");new c(O,{modules:[l,d,u],direction:"horizontal",spaceBetween:0,navigation:{nextEl:V},slidesPerView:2,initialSlide:1,breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0});new c(".projects .swiper",{slidesPerView:1,speed:1200,direction:"horizontal",spaceBetween:32,navigation:{nextEl:".projects .swiper-button-next",prevEl:".projects .swiper-button-prev"},modules:[l,d,u,B,k],mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},effect:"creative",creativeEffect:{limitProgress:1,perspective:!0,progressMultiplier:1,shadowPerProgress:!1,next:{translate:["120%",0,0],rotate:[0,0,15],scale:.5,origin:"center center"},prev:{translate:["-120%",0,0],rotate:[0,0,-15],scale:.5,origin:"center center"}},parallax:!0});const T=document.querySelector(".accordion-container");new h(T,{showMultiple:!0,duration:400});const A=document.querySelectorAll(".marquee-inner"),E=()=>{const e=window.innerHeight/2;for(const t of A)t.getBoundingClientRect().top<e?t.classList.add("show"):t.classList.remove("show")};E();window.addEventListener("scroll",E);c.use([l,d,u]);let n;const j=document.querySelector(".review-list");document.addEventListener("DOMContentLoaded",function(){H()});async function D(){const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await L.get(e,{headers:{accept:"application/json"}})).data}catch{z()}}function z(e){b.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),j.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}function R({author:e,avatar_url:t,review:s}){return`<li class="review-card swiper-slide"> 
        <img class="card-image"
            src= "${t}"
            alt = "review from ${e}"
            width = "48"
            height = "48"
            loading = "lazy"
        />
        <h3 class="card-title">${e}</h3>
        <p class="reviews-paragraph">${s}</p>
    </li>`}async function H(){const t=(await D()).map(R).join(""),s=document.querySelector(".reviews .swiper-wrapper");s?(s.innerHTML=t,I()):console.log("Swiper wrapper not found")}function I(){n=new c(".swiper-container",{modules:[l,d,u],direction:"horizontal",loop:!1,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,invert:!0},speed:1200,simulateTouch:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1},1400:{slidesPerView:4,slidesPerGroup:1}}}),y(),n.on("slideChange",()=>{y()})}function y(){let e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");n.isBeginning?e.classList.add("swiper-button-disabled"):e.classList.remove("swiper-button-disabled"),n.isEnd?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled")}const q=document.querySelector("body"),F=document.querySelector(".btn-submit"),g=document.querySelector(".modal-background"),P=document.querySelector(".modal-close"),$=document.querySelector(".modal");P.addEventListener("click",a);F.addEventListener("click",e=>{const t=i.elements.email.value.trim(),s=i.elements.comments.value.trim();(!t||!s)&&(e.preventDefault(),b.warning({message:"Please fill out all fields",progressBar:!1,position:"bottomCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"}))});function a(e){(e.type==="click"&&e.currentTarget===P||e.keyCode===27||e.type==="click"&&!$.contains(e.target))&&(g.classList.remove("visible"),document.removeEventListener("keydown",a),q.classList.remove("modal-open"),i.classList.remove("success-email"))}const i=document.querySelector(".footer-form"),v=document.querySelector('input[name="email"]');i.addEventListener("submit",G);function G(e){e.preventDefault();const t=e.target.email.value.trim(),s=e.target.comments.value.trim();t&&s&&K({email:t,comment:s}).then(()=>{i.reset(),g.classList.add("visible"),document.addEventListener("keydown",a),g.addEventListener("click",a),q.classList.add("modal-open")}).catch(()=>{b.error({title:"Oops!",message:"Something went wrong",progressBar:!1,position:"topCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"})})}v.addEventListener("focus",()=>{i.classList.contains("success-email")&&i.classList.remove("success-email"),i.classList.contains("failed-email")&&i.classList.remove("failed-email")});v.addEventListener("blur",()=>{v.checkValidity()?i.classList.add("success-email"):i.classList.add("failed-email")});let K=async e=>await L.post("https://portfolio-js.b.goit.study/api/requests",e).then(t=>t.data);
//# sourceMappingURL=commonHelpers.js.map
