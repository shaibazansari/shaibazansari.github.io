$(document).ready((function(){document.getElementById("current-year").innerText=(new Date).getFullYear(),$(".owl-carousel").owlCarousel({autoplay:!1,items:2,responsive:{0:{items:1},576:{items:1},768:{items:2}}});const e="2adf1c30-d16b-4839-b21a",t="76259be0-c87e-4bfe-9906";emailjs.init("pLykhmhHSIKqS9_gJ");const n=document.getElementById("contact-form"),s=document.getElementById("name"),o=document.getElementById("email"),a=document.getElementById("message"),u=document.querySelector(".submit-status");function l(e,t){u.classList.add(e),u.innerHTML=t,function(e){setTimeout((function(){u.innerHTML="",u.classList.remove(e)}),3e3)}(e)}n.addEventListener("submit",(function(n){n.preventDefault();u={name:s.value,reply_email:o.value,message:a.value},emailjs.send(e,t,u).then((function(e){console.log("SUCCESS!",e.status,e.text),l("success","Your Response has been submited")}),(function(e){console.log("FAILED...",e),l("error","Due to some Error Your Response cannot be submited.<br>Please Try again later")})),s.value="",o.value="",a.value="";var u}))}));
