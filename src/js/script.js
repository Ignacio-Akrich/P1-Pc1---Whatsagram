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
            let texto = document.getElementById("textarea").value; 
            document.getElementById("textarea").value = texto.slice(0,-1) ;
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
            document.getElementById("textarea").value = texto.substring(0, lastIndex);
          });
        });
      },
    //TODO Funcionamiento de la tecla enviar
    print(){
        const buttons = document.querySelectorAll(".print");

        buttons.forEach((toprint)=>{
            toprint.addEventListener("click",() =>{
                let texto = document.getElementById("textarea").value;
                let nuevoDiv = document.createElement("div");
                nuevoDiv.appendChild(document.createTextNode(texto));
                document.getElementById("mensajes").appendChild(nuevoDiv); 
            })
        })
    },
    //TODO Funcionamiento de la tecla mayúsculas

    //TODO Funcionamiento de la tecla de emojis
 
  };
  
  window.addEventListener("DOMContentLoaded", function () {
    teclado.init();
    teclado.enter();
    teclado.del_all();
    teclado.del_end();
    teclado.del_start();
    teclado.del_word();
    teclado.print();
  });
