"use strict";var slide_hero=new Swiper(".slide-hero",{effect:"fade",pagination:{el:".slide-hero .main-area .area-explore .swiper-pagination"}}),cardPokemon=document.querySelectorAll(".js-open-details-pokemon"),btnCloseModal=document.querySelector(".js-close-modal-details-pokemon");function openDetailsPokemon(){document.documentElement.classList.add("open-modal")}function closeDetailsPokemon(){document.documentElement.classList.remove("open-modal")}cardPokemon.forEach(function(e){e.addEventListener("click",openDetailsPokemon)}),btnCloseModal.addEventListener("click",closeDetailsPokemon);