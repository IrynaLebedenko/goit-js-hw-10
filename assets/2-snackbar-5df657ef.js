import{i}from"./vendor-77e16229.js";const n=document.querySelector(".form");function l(e,o){return new Promise((s,t)=>{setTimeout(()=>{o==="fulfilled"?s(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)})}n.addEventListener("submit",e=>{e.preventDefault();const o=parseInt(e.target.elements.delay.value,5),s=e.target.elements.state.value;l(o,s).then(t=>{console.log(t),i.success({title:"",message:`${t}`,position:"topRight"})}).catch(t=>{console.log(t),i.error({title:"",message:`${t}`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar-5df657ef.js.map
