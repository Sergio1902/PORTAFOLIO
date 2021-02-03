export default function btnHamburguesa(btn,menu,a) {
    
  document.addEventListener("click", function (e) {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            document.querySelector(menu).classList.toggle("is-active")
            document.querySelector(btn).classList.toggle("is-active")
        }
        if(e.target.matches(a)){
            document.querySelector(menu).classList.remove("is-active")
            document.querySelector(btn).classList.remove("is-active")
        }
    })
    

}