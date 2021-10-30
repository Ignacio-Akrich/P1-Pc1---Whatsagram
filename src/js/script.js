//TODO Crear las funcionalidades del las teclas del teclado virtual
const teclado = {
  //TODO Funcionamiento de las teclas normales
  init() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById("textarea").value += button.textContent;
        if (teclas.className == "upcase") {
          document.getElementById("teclas").className = "lowcase";
        }
        estadoLetras();
      });
    });
  },
  //TODO Funcionamiento de la tecla enter
  enter() {
    const buttons = document.querySelectorAll(".enter");

    buttons.forEach((enter) => {
      enter.addEventListener("click", () => {
        let entr = "\n";
        document.getElementById("textarea").value += entr;
      });
    });
  },
  //TODO Funcionamiento de la tecla C
  del_all() {
    const buttons = document.querySelectorAll(".del_all");

    buttons.forEach((delall) => {
      delall.addEventListener("click", () => {
        document.getElementById("textarea").value = "";
      });
    });
  },
  //TODO Funcionamiento de la tecla borrar ultima letra
  del_end() {
    const buttons = document.querySelectorAll(".del_end");

    buttons.forEach((delend) => {
      delend.addEventListener("click", () => {
        let texto = document.getElementById("textarea").value;
        document.getElementById("textarea").value = texto.slice(0, -1);
      });
    });
  },
  //TODO Funcionamiento de la tecla borrar primera letra
  del_start() {
    const buttons = document.querySelectorAll(".del_start");

    buttons.forEach((delstart) => {
      delstart.addEventListener("click", () => {
        let texto = document.getElementById("textarea").value;
        document.getElementById("textarea").value = texto.substring(1);
      });
    });
  },
  //TODO Funcionamiento de la tecla CE
  del_word() {
    const buttons = document.querySelectorAll(".del_word");

    buttons.forEach((delword) => {
      delword.addEventListener("click", () => {
        let texto = document.getElementById("textarea").value;
        let lastIndex = texto.lastIndexOf(" ");
        document.getElementById("textarea").value = texto.substring(
          0,
          lastIndex
        );
      });
    });
  },
  //TODO Funcionamiento de la tecla enviar
  print() {
    const buttons = document.querySelectorAll(".print");

    buttons.forEach((toprint) => {
      toprint.addEventListener("click", () => {
        let texto = document.getElementById("textarea");
        let nuevoDiv = document.createElement("div");
        nuevoDiv.className = "mensaje";
        nuevoDiv.appendChild(document.createTextNode(texto.value));
        document.getElementById("mensajes").appendChild(nuevoDiv);
        hora();
        saltoLinea();
        texto.value = "";
        document.getElementById("teclas").className = "upcase";
        estadoLetras();
        fecha();
        // let element = document.getElementById("mensajes");
        // element.scrollTop = element.scrollHeight;
      });
    });
  },
  //TODO Funcionamiento de la tecla mayúsculas
  mayus() {
    const buttons = document.querySelectorAll(".mayus");

    buttons.forEach((mayuscula) => {
      mayuscula.addEventListener("click", () => {
        if (teclas.className === "lowcase") {
          document.getElementById("teclas").className = "upcase";
        } else if (teclas.className === "upcase") {
          document.getElementById("teclas").className = "everupcase";
        } else {
          document.getElementById("teclas").className = "lowcase";
        }
        estadoLetras();
      });
    });
  },
  //TODO Funcionamiento de la tecla de emojis
  emoji() {
    const buttons = document.querySelectorAll(".emoji");

    buttons.forEach((emoji) => {
      emoji.addEventListener("click", () => {
        let emojis = document.getElementById("tecl_emoj");
        if (emojis.style.display === "none") {
          ocultarTeclado("teclas");
          ocultarTeclado("tecl_emoj");
          document.getElementsByClassName("emoji")[0].textContent = "⌨";
        } else {
          ocultarTeclado("teclas");
          ocultarTeclado("tecl_emoj");
          document.getElementsByClassName("emoji")[0].textContent = "😶";
        }
      });
    });
  },
};

function ocultarTeclado(id) {
  let tecla = document.getElementById(id);
  if (tecla.style.display === "none") {
    tecla.style.display = "block";
  } else {
    tecla.style.display = "none";
  }
}

function estadoLetras() {
  let teclas = document.getElementById("teclas");
  let tecla = document.getElementsByClassName("button");
  if (teclas.className === "upcase" || teclas.className === "everupcase") {
    for (let i = 1; i < tecla.length; i++) {
      tecla[i].textContent = tecla[i].textContent.toUpperCase();
    }
  } else {
    for (let i = 1; i < tecla.length; i++) {
      tecla[i].textContent = tecla[i].textContent.toLowerCase();
    }
  }
}

function saltoLinea(){
  let texto = document.getElementById("textarea").value;
        texto = texto.replace(/\n/g, "<br>");
  let mensaje = document.getElementsByClassName("mensaje")
  let j = 0;
  for(let i = 0 ; i<mensaje.length; i++){
    j=i;
  }
  hora();
    document.getElementsByClassName("mensaje")[j].innerHTML = texto +"<span>"+ horaActual +"</span>";
}

//TODO Crear la funcion de fecha para que se printe al enviar un mensaje al enviar un mensaje
function fecha() {
  const nombreMeses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  let date = new Date();
  let actualDate = date.getDate() + " de " + nombreMeses[date.getMonth()] + " de " + date.getFullYear();
  document.getElementById("fecha").textContent = actualDate;
}

function hora(){
  let date = new Date();
  if(date.getUTCMinutes()<10){
     horaActual = date.getHours()+':'+0+date.getUTCMinutes();
  }else{
     horaActual = date.getHours()+':'+date.getUTCMinutes();
  }
  
  let mensaje = document.getElementsByClassName("mensaje")
  let j = 0;
  for(let i = 0 ; i<mensaje.length; i++){
    j=i;
  }
  document.getElementsByClassName("mensaje")[j].textContent += horaActual
}

window.addEventListener("DOMContentLoaded", function () {
  teclado.init();
  teclado.enter();
  teclado.del_all();
  teclado.del_end();
  teclado.del_start();
  teclado.del_word();
  teclado.print();
  teclado.mayus();
  teclado.emoji();
  estadoLetras();
});

