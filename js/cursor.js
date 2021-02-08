export default function cursorMove() {
     const $CURSOR = document.querySelector(".cursor")
     document.addEventListener("mousemove", function (e) {
             $CURSOR.style.left = e.pageX + 'px'
             $CURSOR.style.top = e.pageY + 'px'
         })
     }
    