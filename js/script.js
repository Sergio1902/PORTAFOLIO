    // POPUD
    $(document).ready(function(){
        AOS.init();
    });
     
    
//querySelectorAll --> seleccionar elementos del DOM
let title = document.querySelectorAll(".acordeon-title")

// encuentra 3 elemntos en el DOM

 for (let i = 0; i < title.length; i++) { 
    // console.log([i])
    // console.log(title[i])

    // addEventListener --> agregar y escuchar al evento
    title[i].addEventListener("click", function(e){
        // .target --> seleccionar
        // console.log(e.target)
        let seleccionado = e.target

         if(seleccionado.className == ".acordeon-title .active"){
             removeClase()
         }else{
             removeClase()
             // añadir la clase active
             seleccionado.classList.add("active")
         }  
     })   
 }
 function removeClase() {
     for (let i = 0; i < title.length; i++) {
         title[i].classList.remove("active")
     }
 }



// FUNCION BTN ARRIBA
//  window.onscroll = function () {
//      console.log(document.documentElement.scrollTop)
//      if(document.documentElement.scrollTop>3000){
//          document.querySelector('.go-top-container').classList.add('show')
//      }else{
//         document.querySelector('.go-top-container').classList.remove('show')
//      }
//  }

//   const $A = document.querySelector(".go-to-button")
//      $A.addEventListener('click', function () {
//      window.scrollTo({
//          top:0,       behavior: "smooth"
//      })
// })



/* ::::::: FUNCION BTN - A SECTION ::::::::*/
// const $REDES = document.querySelector(".top-redes")
// $REDES.addEventListener('click', function () {
// window.scrollTo({
//     top:620,
//     behavior: "smooth"
// })
// })


