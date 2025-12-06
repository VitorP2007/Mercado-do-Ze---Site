console.log("JS CARREGOU!");
/* HEADER */
let lastScroll = 0;
const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            // Descendo — esconde
            header.classList.add("hide-header");
        } else {
            // Subindo — mostra
            header.classList.remove("hide-header");
        }

    lastScroll = currentScroll;
});   

/* MENU*/
const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");
const overlay = document.getElementById("menu-overlay");

// Abrir/fechar menu
menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("show");
    overlay.classList.toggle("show");
});

// Fechar ao clicar no overlay ou rolar
overlay.addEventListener("click", () => {
    menuMobile.classList.remove("show");
    overlay.classList.remove("show");
});

window.addEventListener("scroll", () => {
    if (menuMobile.classList.contains("show")) {
        menuMobile.classList.remove("show");
        overlay.classList.remove("show");
    }
});

/* PRODUTOS */
const btnVerMais = document.getElementById("btn-vermais");
const maisCategorias = document.getElementById("mais-categorias-extra");

btnVerMais.addEventListener("click", () => {
    maisCategorias.classList.toggle("escondido");

    // alternar texto
    if (maisCategorias.classList.contains("escondido")) {
        btnVerMais.querySelector("span").textContent = "Mais Categorias";
    } else {
        btnVerMais.querySelector("span").textContent = "Ocultar Categorias";
    }
});


/* DUVIDAS */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".faq-pergunta");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            const item = btn.closest(".faq-item");
            const resposta = item.querySelector(".faq-resposta");

            // fecha todos os outros
            document.querySelectorAll(".faq-item").forEach(outro => {
                if (outro !== item) {
                    outro.classList.remove("open");
                    outro.querySelector(".faq-resposta").style.maxHeight = null;
                }
            });

            // toggle do atual
            if (item.classList.contains("open")) {
                item.classList.remove("open");
                resposta.style.maxHeight = null;
            } else {
                item.classList.add("open");
                resposta.style.maxHeight = resposta.scrollHeight + "px";
            }
        });
    });
});