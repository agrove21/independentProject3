const catBaseUrl = "https://api.thecatapi.com/v1";
const dogBaseUrl = "https://api.thedogapi.com/v1"
const catApiKey =
  "live_XIJ61rTGzrcgWLwQRMEqokr5qx6iJrORl2zr9k4374qNbDbba5pF1f37eXHGQQ1h";
const dogApiKey =
  "live_UOjfU5yMJMSn0iNtFAJfiutWXY0Py1pJqDJt6oEWwwtMUplQstSsRv3KcHWQ5k9E";

document
  .getElementById("select-pet")
  .addEventListener("change", function (event) {
    console.log(event.target.value);
    if (event.target.value === "cat") {
      fetchCatBreeds();
    } else if (event.target.value === "dog") {
      fetchDogBreeds();
    }
  });
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

function showBreeds(breeds) {
  const breedsDropdown = document.getElementById("select-breed");
  let options = '<option value="">Select Breed</option>';
  for (const breed of breeds) {
    options += `<option value="">${breed.name}</option>`;
  }
  breedsDropdown.innerHTML = options;
}
