"use strict";var swiper=new Swiper(".slide-hero",{effect:"fade",pagination:{el:".slide-hero .main-area .area-explore .swiper-pagination"}}),cardPokemon=document.querySelectorAll(".js-open-details-pokemon"),btnCloseModal=document.querySelector(".js-close-modal-details-pokemon"),btnDropdownSelect=(cardPokemon.forEach(function(e){e.addEventListener("click",openDetailsPokemon)}),btnCloseModal&&btnCloseModal.addEventListener("click",closeDetailsPokemon),document.querySelector(".js-open-select-custom")),areaPokemons=(btnDropdownSelect.addEventListener("click",function(){btnDropdownSelect.parentElement.classList.toggle("active")}),document.getElementById("js-list-pokemons"));function primeiraLetraMaiuscula(e){return e.charAt(0).toUpperCase()+e.slice(1)}function createCardPokemon(e,t,n,o){var a=document.createElement("button"),c=(a.classList="card-pokemon js-open-details-pokemon ".concat(t),areaPokemons.appendChild(a),document.createElement("div")),i=(c.classList="image",a.appendChild(c),document.createElement("img")),o=(i.className="thumb-img",i.setAttribute("src",o),c.appendChild(i),document.createElement("div")),c=(o.classList="info",a.appendChild(o),document.createElement("div")),i=(c.classList="text",o.appendChild(c),document.createElement("span")),a=(i.textContent=(e<10?"#00":e<100?"#0":"#").concat(e),c.appendChild(i),document.createElement("h3")),e=(a.textContent=primeiraLetraMaiuscula(n),c.appendChild(a),document.createElement("div")),i=(e.classList="icon",o.appendChild(e),document.createElement("img"));i.setAttribute("src","img/icon-types/".concat(t,".svg")),e.appendChild(i)}function listingPokemons(e){axios({method:"GET",url:e}).then(function(e){var t=document.getElementById("js-count-pokemons"),e=e.data,n=e.results,e=(e.next,e.count);t.innerText=e,n.forEach(function(e){e=e.url;axios({method:"GET",url:"".concat(e)}).then(function(e){var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,t={nome:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};createCardPokemon(t.code,t.type,t.nome,t.image),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon)})})})})}function openDetailsPokemon(){document.documentElement.classList.add("open-modal")}function closeDetailsPokemon(){document.documentElement.classList.remove("open-modal")}listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");var areaTypes=document.getElementById("js-type-area"),areaTypesMobile=document.querySelector(".dropdown-select"),btnLoadMore=(axios({method:"GET",url:"https://pokeapi.co/api/v2/type"}).then(function(e){e.data.results.forEach(function(e,t){var n,o;t<18&&(t=document.createElement("li"),areaTypes.appendChild(t),(n=document.createElement("button")).classList="type-filter ".concat(e.name),t.appendChild(n),(t=document.createElement("div")).classList="icon",n.appendChild(t),(o=document.createElement("img")).setAttribute("src","img/icon-types/".concat(e.name,".svg")),t.appendChild(o),(t=document.createElement("span")).textContent=primeiraLetraMaiuscula(e.name),n.appendChild(t),o=document.createElement("li"),areaTypesMobile.appendChild(o),(n=document.createElement("button")).classList="type-filter ".concat(e.name),o.appendChild(n),(t=document.createElement("div")).classList="icon",n.appendChild(t),(o=document.createElement("img")).setAttribute("src","img/icon-types/".concat(e.name,".svg")),t.appendChild(o),(t=document.createElement("span")).textContent=primeiraLetraMaiuscula(e.name),n.appendChild(t))})}),document.getElementById("js-btn-load-more")),countPagination=9;function showMorePokemon(){listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=".concat(countPagination)),countPagination+=9}btnLoadMore.addEventListener("click",showMorePokemon);