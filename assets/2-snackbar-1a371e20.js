import{i as o}from"./vendor-77e16229.js";const n=document.querySelector(".form");function r(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)})}n.addEventListener("submit",e=>{e.preventDefault();const s=parseInt(e.target.elements.delay.value,10),i=e.target.elements.state.value;r(s,i).then(t=>{o.success({title:"",message:`${t}`,position:"topRight"})}).catch(t=>{o.error({title:"",message:`${t}`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar-1a371e20.js.map
