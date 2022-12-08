(() => {
    "use strict";
    window["FLS"] = true;
    let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".nav-header");
    menuBtn.addEventListener("click", (function() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
    }));
    let burger = document.querySelector(".menu-btn");
    let logo = document.querySelector(".logo-header");
    burger.addEventListener("click", (function() {
        logo.classList.toggle("active");
        document.querySelector("body").classList.toggle("lock");
    }));
    document.querySelector(".sortby__select").addEventListener("click", (function() {
        this.querySelector(".select__list").classList.toggle("open");
    }));
    for (const option of document.querySelectorAll(".sub-select__link")) option.addEventListener("click", (function(e) {
        if (!this.classList.contains("sub-select__link-active")) {
            document.querySelector(".sub-select__link-active").classList.remove("sub-select__link-active");
            this.classList.add("sub-select__link-active");
            const value = this.innerHTML;
            document.querySelector(".select__link").innerHTML = value;
        }
    }));
})();