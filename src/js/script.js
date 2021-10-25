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

    //TODO Funcionamiento de la tecla borrar ultima letra

    //TODO Funcionamiento de la tecla borrar primera letra

    //TODO Funcionamiento de la tecla CE

    //TODO Funcionamiento de la tecla enviar

    //TODO Funcionamiento de la tecla mayúsculas

    //TODO Funcionamiento de la tecla de emojis
 
  };
  
  window.addEventListener("DOMContentLoaded", function () {
    teclado.init();
    teclado.enter();
  });
