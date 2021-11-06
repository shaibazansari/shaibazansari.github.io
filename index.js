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

const sendMail = (e) => {
    e.preventDefault()
    const service_id = 'service_mxyxw4l';
    const template_id = 'template_kd2u9kk';
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let submitStatus = document.querySelector(".submit-status");

    let template_params = {
        name: name.value,
        reply_email: email.value,
        message: message.value
    };

    emailjs.init("user_16stRbuVzdakbVSSIzqOY");
    emailjs.send(service_id, template_id, template_params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            submitStatus.classList.add('success')
            submitStatus.innerHTML = "Your Response Has been submited"
            setTimeout(function (){
                submitStatus.innerHTML = ''
                submitStatus.classList.remove('success')
            }, 3000);

        }, function (error) {
            console.log('FAILED...', error);
            submitStatus.classList.add('error')
            submitStatus.innerHTML = "Due to some Error Your Response cannot be submited.<br>Please Try again later"
            setTimeout(function() {
                submitStatus.innerHTML = ''
                submitStatus.classList.remove('error')
            }, 3000);
        });
        name.value = ""
        email.value = ""
        message.value = ""
}