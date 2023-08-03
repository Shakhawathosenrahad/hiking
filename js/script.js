const carousel = document.querySelector(".carousel"),
      arrow = document.querySelectorAll(".carousel span")

let isdrag = true, pagex, carouselscrollLeft;

const draging = e => {
    if(isdrag) return;
    carousel.scrollLeft = carouselscrollLeft - (e.pageX - pagex);
}

const dragstart = e => {
    isdrag = false;
    pagex = e.pageX;
    carouselscrollLeft = carousel.scrollLeft;
}

carousel.addEventListener("mousemove", draging);
carousel.addEventListener("mousedown", dragstart);
document.addEventListener("mouseup", () => isdrag = true);

arrow.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
        carousel.classList.add("smooth");
        if(i == 0) {
            carousel.scrollLeft -= 300;
        }
        else {
            carousel.scrollLeft += 300;
        }
        carousel.classList.remove("smooth");
    })
})


// menu bar / navigation bar

const menu = document.querySelectorAll("nav span"),
      links = document.querySelector("nav .links")

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", () => {
            links.style.right = 0;

            menu[1].addEventListener("click", () => {
                links.style.right = "-500px";
            })
    })
}
