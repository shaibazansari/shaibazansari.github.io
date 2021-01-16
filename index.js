$(document).ready(function () {

    $('#current-year').text(new Date().getFullYear())

    $(".owl-carousel").owlCarousel({
        autoplay: true,
        items: 2,
        // autoplayTimeout: 10000, //2000ms = 2s;
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
});

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const sendMail = (e) => {
    e.preventDefault()
    const service_id = 'service_mxyxw4l';
    const template_id = 'template_kd2u9kk';
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let ele = document.getElementById("sbmessage")
    let submitMessage = document.createElement("span");

    console.log(name, email, message)
    let template_params = {
        name: name.value,
        reply_email: email.value,
        message: message.value
    };
    emailjs.init("user_16stRbuVzdakbVSSIzqOY");
    emailjs.send(service_id, template_id, template_params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            submitMessage.classList.add('submit-message', 'success')
            submitMessage.innerText = "Your Response Has been submited"
            insertAfter(ele, submitMessage);
            setTimeout(() => {
                document.querySelector(".submit-message").remove();
            }, 3000);

        }, function (error) {
            console.log('FAILED...', error);
            submitMessage.classList.add('submit-message', 'error')
            submitMessage.innerText = "Due to some Error Your Response cannot be submited. Try again later"
            insertAfter(ele, submitMessage);
            setTimeout(() => {
                document.querySelector(".submit-message").remove();
            }, 3000);
        });;
        name.value = ""
        email.value = ""
        message.value = ""
}