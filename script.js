
window.onload = adjust_carousel();


//function will listen for a click on each of the elements in the navbar and when clicked will use the bootstrap api to set the collapse to false and hide the navbar 
document.addEventListener('DOMContentLoaded', function () {
  var navbarCollapse = document.getElementById('navbarNavAltMarkup');
  var navbarLinks = navbarCollapse.querySelectorAll('.nav-link');

  navbarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });
});


//fucntion to adjust carousel when on mobile
function adjust_carousel() {

  var T = document.getElementById("gg");
  var N = document.getElementById("home");
  var navv = document.getElementById("navy");
  const collection = document.getElementsByClassName("form-control input_normal");
  var carousel = document.getElementById("carouselExampleCaptions");
  var carousel2 = document.getElementById("carouselExampleCaptions2");
  var carousel3 = document.getElementById("carouselExampleCaptions3");
  var carousel4 = document.getElementById("carouselExampleCaptions4");
  var vision = document.querySelector('.vision_pc');
  var vision_q = document.querySelector('.vision_pcq');
  var mision_ul = document.getElementById("mision_ul")
  var mision_header = document.querySelectorAll(".list_style")
  var identidad_pc = document.querySelector('.identidad_pc');
  var licenciatura_pc = document.querySelector('.licenciatura_pc');
  var misiones_quotes = document.querySelectorAll(".misiones_pc")
  var headers = document.querySelectorAll(".header_text")
  var vision_container = document.querySelector("#vision_container");
  var licen_container = document.querySelector("#licen_container");
  var body_text = document.querySelectorAll(".body_text");
  var body_quote = document.querySelectorAll(".body_quote");
  var aportar_icons = document.querySelectorAll(".aportar_size");
  var paypal_icon = document.getElementById("paypal");
  var zelle_icon = document.getElementById("zelle");
  var cashapp_icon = document.getElementById("cashapp");
  var card2 = document.getElementById("card2");



  //selects all tags whose id is we1
  var elements = document.querySelectorAll('[id="we1"]');/*   bad i know :/   */
  var elementsgg = document.querySelectorAll('[id="gg"]');/*   bad i know :/ again  */

  //for smaller screens do the following
  if (window.innerWidth <= 1000) {
    T.style.width = "100%";
    T.style.marginLeft = "0vw";

    // Iterate over the NodeList to perform actions on each element
    elements.forEach(function(element) {
      element.style.height = "50vh"; // set the widht of the element to 50% of the viewport height
    });

    elementsgg.forEach(function(element) {
      element.classList.remove("mt-5"); // set the widht of the element to 50% of the viewport height
      element.classList.remove("mb-5"); // set the widht of the element to 50% of the viewport height
      element.classList.add("mb-2"); // set the widht of the element to 50% of the viewport height
    });

    identidad_pc.classList.remove("identidad_pc");
    identidad_pc.style.paddingTop = "40px";

    vision.classList.remove("vision_pc");
    vision_q.classList.remove("vision_pcq");

    licenciatura_pc.classList.remove("licenciatura_pc");

    mision_ul.style.paddingLeft = "55px";
    mision_ul.style.paddingTop = "30px";
    mision_header.forEach(function(element) {
      element.classList.remove("list_style"); // set the widht of the element to 50% of the viewport height
      element.classList.add("list_style_mobile");
    });

    misiones_quotes.forEach(function(element) {
      element.classList.remove("misiones_pc");
      element.classList.add("misiones_mobile");
    });

    headers.forEach(function(element) {
      element.classList.remove("header_text");
      element.classList.add("header_text_mobile");
    });


    N.classList.remove("headerr");
    N.classList.add("mobile_header");

    carousel.classList.remove("custom-carousel");
    carousel2.classList.remove("custom-carousel");
    carousel3.classList.remove("custom-carousel");
    carousel4.classList.remove("custom-carousel");
    navv.classList.remove("py-3")

    collection[0].classList.add("input_mobile");
    collection[1].classList.add("input_mobile");
    collection[2].classList.add("input_mobile");
    collection[3].classList.add("input_mobile");
    collection[4].classList.add("input_mobile");

    vision_container.classList.remove("mt-5","mb-5");
    licen_container.classList.remove("mt-5", "mb-5");
    licen_container.classList.add("mb-2");

    body_text.forEach(function(element){
      element.classList.remove("body_text");
      element.classList.add("body_text_mobile");
    });

    body_quote.forEach(function(element){
      element.classList.remove("body_quote");
      element.classList.add("body_quote_mobile");
    });


    aportar_icons.forEach(function(element){
      element.classList.remove("aportar_size");
      element.classList.add("aportar_size_mobile");
    });

    paypal_icon.style.width = "45px";
    zelle_icon.style.width = "100px";
    cashapp_icon.style.width = "58px";
    cashapp_icon.style.marginLeft = "20px";

    card2.classList.remove('overlayy');
    card2.classList.add('overlayy_mobile');



    rearrange_mission();//call funct to re-arrange the missions layout in mobile, it will have carousel in the top and text at the bottom for each
  }

}

const form = document.querySelector('form');

const name_input = document.getElementById("nombre");
const apellido_input = document.getElementById("apellido");
const pais_input = document.getElementById("pais");
const direccion_input = document.getElementById("direccion");
const ministerio_input = document.getElementById("ministerio");






//funct used to send email with users entered information. Api is from smtpJS.com, service used is from elasticemail.com
function send_email() {
  //body that will be sent to email:
  const body_message =
    `
    Nombre: ${name_input.value}<br>
    Apellido: ${apellido_input.value}<br>
    País: ${pais_input.value}<br>
    E-mail: ${direccion_input.value}<br>
    Ministerio: ${ministerio_input.value}<br>
    `;//need <br> tags bc email will be sent as a single string

  Email.send({
    SecureToken: "cd030360-e1f6-4723-b545-b5af9ba451dd",
    To: 'redpastoralglobal@gmail.com',
    From: "redpastoralglobal@gmail.com",
    Subject: "Nuevo Inscripcion Para el Ministerio",
    Body: body_message
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Enviado!",
          text: "Su información ha sido enviada al ministerio!",
          icon: "success"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {//when the event submit is triggered, the functions preventdefaulta and send_email are called

  e.preventDefault();//this way we avoid sending emails when form is empty
  send_email();

  form.reset();
});

//function used to rearrnge the layout of misions in mobile. It essentially gets the columns for both the col with the carousel, and the one with the text and then swaps them
function rearrange_mission(){

  var carousel = document.getElementById("carouselExampleCaptions");
  var carousel3 = document.getElementById("carouselExampleCaptions3");

  var car1_text_col = document.querySelector("#car1-text-col");
  var car1_col = document.querySelector("#car1-col");
  var car1_text = document.querySelector("#car1-text");
  var car3_text_col = document.querySelector("#car3-text-col");
  var car3_col = document.querySelector("#car3-col");
  var car3_text = document.querySelector("#car3-text");

  car1_col.appendChild(car1_text);//swap the divs around
  car1_text_col.appendChild(carousel);

  car3_col.appendChild(car3_text);//same
  car3_text_col.appendChild(carousel3);


}