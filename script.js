// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("menu-button-open");

        mobileMenu.classList.toggle("mobile-menu-open");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove(
                "menu-button-open"
            );

            mobileMenu.classList.remove(
                "mobile-menu-open"
            );

        });

    });

}



// =========================
// BACK TO TOP
// =========================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        ".intro, .highlight, .menu-category, .experience-content, .contact-content, .instagram-content"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-element"
    );

    revealObserver.observe(element);

});



// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

});