
window.onload = adjust_carousel();

//fucntion to adjust carousel when on mobile
function adjust_carousel() {

  var T = document.getElementById("gg");
  var w1 = document.getElementById("we1");
  var w2 = document.getElementById("we2");
  var w3 = document.getElementById("we3");
  var N = document.getElementById("home");
  var navv = document.getElementById("navy");
  const collection = document.getElementsByClassName("form-control input_normal");

  if (window.innerWidth <= 1000) {
    T.style.width = "100%";
    T.style.marginLeft = "0vw";

    w1.style.height = "50vh";
    w2.style.height = "50vh";
    w3.style.height = "50vh";

    N.classList.remove("headerr");
    N.classList.add("mobile_header");

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