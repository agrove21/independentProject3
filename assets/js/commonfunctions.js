let selectedPet;

function showBreeds(breeds) {
    console.log (breeds)
    const breedsContainer = document.querySelector(".breeds-container");
    let buttonsHtml = "";
    for (const breed of breeds) {
      buttonsHtml += `<button id=${breed.id} class="button is-light">${breed.name}</button>`;
    }
    breedsContainer.innerHTML = buttonsHtml;
  
    document.querySelectorAll(".breeds-container button").forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        getBreedById(event.target.id);
        toggleModal();
      });
    });
  }
 
  //get all favorite pets form localStorage
function getFavoritePetsFromStorage() {
    const storagePets = JSON.parse(localStorage.getItem("favoritePets"));
    if (storagePets == null) {
      return [];
    } else {
      return storagePets;
    }
  }
  
  function saveToLocalStorage(favoritePets) {
    localStorage.setItem("favoritePets", JSON.stringify(favoritePets))
  }
  
  function removeFromStorage(id) {
    const savedFavoritePets = getFavoritePetsFromStorage()
    const updatedFavorites = savedFavoritePets.filter(pet => pet.id !=id)
    saveToLocalStorage(updatedFavorites)
    showBreeds(updatedFavorites) 
    toggleModal()
  }

  document.querySelector(".delete").addEventListener("click", function () {
    toggleModal();
  });
  
  function toggleModal() {
    document.getElementById("modal").classList.toggle("is-active");
  }
  
  document.querySelector(".favorite").addEventListener("click", function (event) {
    const savedFavoritePets = getFavoritePetsFromStorage()
    if (selectedPet){
        savedFavoritePets.unshift(selectedPet)
    }
    
    if(event.target.innerHTML == "Favorite") {
        saveToLocalStorage(savedFavoritePets)
    }else {
        removeFromStorage(selectedPet.id)
    }
    
  });