import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const s="feedback-form-state",a=document.querySelector(".feedback-form"),l=a.elements.email,m=a.elements.message;document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(s);if(e){const t=JSON.parse(e);l.value=t.email||"",m.value=t.message||""}});a.addEventListener("input",()=>{const e={email:l.value.trim(),message:m.value.trim()};localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",e=>{e.preventDefault();const t={email:l.value.trim(),message:m.value.trim()};!t.email||!t.message?alert("Fill please all fields"):(console.log(t),localStorage.removeItem(s),a.reset())});
//# sourceMappingURL=commonHelpers2.js.map
