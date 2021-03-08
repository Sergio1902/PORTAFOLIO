export default function funcionModal() {

const btn_open = document.querySelectorAll(".experience-card-global span")
const btn_close = document.querySelectorAll(".experience-card-global .btn_cerrar")
const modal = document.querySelectorAll(".modal-container")

    const modal_container = document.getElementById('modal_container');
    const body = document.querySelector("body")

document.addEventListener("click", function (e) {

    if(e.target.matches(".experience-card-global span")){
        body.classList.add("block-scroll")
    }
    if(e.target.matches(".experience-card-global .btn_cerrar")){
        body.classList.remove("block-scroll")
    }
    switch (e.target ) {
        case btn_open[0]:
            modal[0].classList.add("show")
            break;
        case btn_open[1]:
            modal[1].classList.add("show")
            break;
        case btn_open[2]:
            modal[2].classList.add("show")
            break;
        case btn_open[3]:
            modal[3].classList.add("show")
            break;
        default:
            break;
    }
    switch (e.target) {
        case btn_close[0]:
            modal[0].classList.remove("show")
            break;
        case btn_close[1]:
            modal[1].classList.remove("show")
            break;
        case btn_close[2]:
            modal[2].classList.remove("show")
            break;
        case btn_close[3]:
            modal[3].classList.remove("show")
            break;
        default:
            break;
    }

    

    if(e.target === open){
        modal_container.classList.add('show'); 
        body.classList.add("block-scroll")
    }
    if(e.target === close){
        modal_container.classList.remove('show');
        body.classList.remove("block-scroll")
    }
})
}


