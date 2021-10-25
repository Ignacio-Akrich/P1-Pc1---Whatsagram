//TODO Crear las funcionalidades del las teclas del teclado virtual
const teclado = {
    //TODO Funcionamiento de las teclas normales
    init() {
      const buttons = document.querySelectorAll(".button");
  
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          document.getElementById("textarea").value += button.textContent;
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
            let texto = document.getElementById("1").value; 
            document.getElementById("1").value = texto.slice(0,-1) ;
          });
        });
      },
    //TODO Funcionamiento de la tecla borrar primera letra
    del_start() {
        const buttons = document.querySelectorAll(".del_start");
    
        buttons.forEach((delstart) => {
          delstart.addEventListener("click", () => {
            let texto = document.getElementById("1").value; 
            document.getElementById("1").value = texto.substring(1);
          });
        });
      },
    //TODO Funcionamiento de la tecla CE

    //TODO Funcionamiento de la tecla enviar

    //TODO Funcionamiento de la tecla mayúsculas

    //TODO Funcionamiento de la tecla de emojis
 
  };
  
  window.addEventListener("DOMContentLoaded", function () {
    teclado.init();
    teclado.enter();
    teclado.del_all();
    teclado.del_end();
    teclado.del_start();
  });
