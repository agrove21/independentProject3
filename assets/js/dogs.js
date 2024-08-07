const dogBaseUrl = "https://api.thedogapi.com/v1";
const dogApiKey =
  "live_UOjfU5yMJMSn0iNtFAJfiutWXY0Py1pJqDJt6oEWwwtMUplQstSsRv3KcHWQ5k9E";

function fetchDogBreeds() {
  fetch(`${dogBaseUrl}/breeds`)
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
  fetch(`${dogBaseUrl}/breeds/${id}`)
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
  const image = `<img src="https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg"/>`;
  const temperament = `<p><strong>Temperament:</strong> ${data.temperament}</p>`;
  modalBody.innerHTML = image + temperament;
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

window.onload = fetchDogBreeds;
