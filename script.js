
window.onload = adjust_carousel();

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
    });

    identidad_pc.classList.remove("identidad_pc");
    identidad_pc.style.paddingTop = "40px";

    vision.classList.remove("vision_pc");
    vision_q.classList.remove("vision_pcq");

    mision_ul.style.paddingLeft = "55px";
    mision_ul.style.paddingTop = "30px";
    mision_header.forEach(function(element) {
      element.classList.remove("list_style"); // set the widht of the element to 50% of the viewport height
      element.classList.add("list_style_mobile");
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
  }

}

const form = document.querySelector('form');

const name_input = document.getElementById("nombre");
const apellido_input = document.getElementById("apellido");
const pais_input = document.getElementById("pais");
const direccion_input = document.getElementById("direccion");
const ministerio_input = document.getElementById("ministerio");






//funct used to send email with users entered information
function send_email() {
  //body that will be sent to email:
  const body_message =
    `
    Nombre: ${name_input.value}<br>
    Apellido: ${apellido_input.value}<br>
    País: ${pais_input.value}<br>
    Dirección: ${direccion_input.value}<br>
    Ministerio: ${ministerio_input.value}<br>
    `;//need <br> tags bc email will be sent as a single string

  Email.send({
    SecureToken: "20c837e3-04ea-4777-8d9e-a7f0060e325c",
    To: 'redpastoralglobal@gmail.com',
    From: "middle.machine.99@gmail.com",
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