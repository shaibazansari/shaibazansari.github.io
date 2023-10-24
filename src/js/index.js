$(document).ready(function () {
  const currentYear = document.getElementById("current-year");
  currentYear.innerText = new Date().getFullYear();

  $(".owl-carousel").owlCarousel({
    autoplay: false,
    items: 2,
    // autoplayTimeout: 10000, //2000ms = 2s;
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  const EMAILJS_PUBLIC_KEY = "pLykhmhHSIKqS9_gJ";
  const EMAILJS_SERVICE_ID = "2adf1c30-d16b-4839-b21a";
  const EMAILJS_TEMPLATE_ID = "76259be0-c87e-4bfe-9906";

  emailjs.init(EMAILJS_PUBLIC_KEY);

  const contactForm = document.getElementById("contact-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const submitStatus = document.querySelector(".submit-status");

  contactForm.addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    const templateParams = {
      name: name.value,
      reply_email: email.value,
      message: message.value,
    };

    sendMail(templateParams);
  } 

  function sendMail(params) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setAlert("success", "Your Response has been submited");
      },
      function (error) {
        console.log("FAILED...", error);
        setAlert(
          "error",
          "Due to some Error Your Response cannot be submited.<br>Please Try again later"
        );
      }
    );
  }

  function setAlert(status, message) {
    clearForm()
    submitStatus.classList.add(status);
    submitStatus.innerHTML = message;
    removeAlert(status);
  }

  function removeAlert(status) {
    setTimeout(function () {
      submitStatus.innerHTML = "";
      submitStatus.classList.remove(status);
    }, 3000);
  }

  function clearForm() {
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
