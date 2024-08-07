const catBaseUrl = "https://api.thecatapi.com/v1";
const catApiKey =
  "live_XIJ61rTGzrcgWLwQRMEqokr5qx6iJrORl2zr9k4374qNbDbba5pF1f37eXHGQQ1h";

function fetchCatBreeds() {
  fetch(`${catBaseUrl}/breeds`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showBreeds(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getBreedById(id) {
  fetch(`${catBaseUrl}/breeds/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showModalData(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showModalData(data) {
  document.querySelector(".modal-card-title").innerHTML = data.name;
  const modalBody = document.querySelector(".modal-card-body");
  const image = `<img src="https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg"/>`;
  const descript = `<p><strong>Description:</strong> ${data.description}</p>`;
  modalBody.innerHTML = image + descript;
}

function showBreeds(breeds) {
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

document.querySelector(".delete").addEventListener("click", function () {
  toggleModal();
});

function toggleModal() {
  document.getElementById("modal").classList.toggle("is-active");
}

window.onload = fetchCatBreeds;
