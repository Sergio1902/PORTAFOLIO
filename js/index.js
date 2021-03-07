import btnHamburguesa from './hamburguesa.js'
import cursorMove from './cursor.js'
import funcionModal from './modal.js'

document.addEventListener("DOMContentLoaded", function (e) {
    btnHamburguesa(".btn-hamburguesa", ".menu-flotante", ".menu-flotante a")
    funcionModal()
})

cursorMove()
