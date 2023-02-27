const btnEl = document.querySelector(".toggle-dropdown")

const generate = document.getElementById("generate")

// Drop down generator
generate.addEventListener("click", () => {

    const values = ["dog", "cat", "parrot", "rabbit"];

    const select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"

    for (const val of values) {
        const option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1)
        select.appendChild(option);
    }

    const label = document.createElement("label");
    label.textContent = "Choose your pets: "

    document.getElementById("container").appendChild(label).appendChild(select);

    btnEl.addEventListener("click", () => {
        if (select.style.visibility === "hidden") {
            select.style.visibility = "visible";
        } else {
            select.style.visibility = "hidden";
        }
    })
})

// Image carousel
const container = document.querySelector(".div-container")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".previous")
let currentIndex = 0;

const nextSlide = (inc) => {
    const slides = document.getElementsByClassName("slide")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    currentIndex = (currentIndex + slides.length + inc) % slides.length;
    slides[currentIndex].style.display = "block"
}

nextSlide(0)

nextBtn.addEventListener("click", () => {
    nextSlide(1)
})

prevBtn.addEventListener("click", () => {
    nextSlide(-1)
})

