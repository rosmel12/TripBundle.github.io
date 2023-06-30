const conocenos = document.querySelector("#Conocenos");
const comunidad = document.querySelector("#Comunidad");
const app = document.querySelector("#App");
const contactanos = document.querySelector("#Contactanos");

/* Conocenos */
conocenos.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionP = document.querySelector(".Conocenos");
    sectionP.scrollIntoView({behavior: "smooth"});
});

/* Comunidad */
comunidad.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".Comunidad");
    sectionS.scrollIntoView({behavior: "smooth"});
});

/* App */
app.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".App");
    sectionS.scrollIntoView({behavior: "smooth"});
});

/* Contactanos */
contactanos.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".Contactanos");
    sectionS.scrollIntoView({behavior: "smooth"});
});