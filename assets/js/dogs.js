const dogBaseUrl = "https://api.thedogapi.com/v1"
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

function showBreeds(breeds) {
    const breedsContainer = document.querySelector(".breeds-container");
    let buttonsHtml = '';
    for (const breed of breeds) {
        buttonsHtml += `<button class="button is-light">${breed.name}</button>`;
    }
    breedsContainer.innerHTML = buttonsHtml;
    document.querySelectorAll('.breeds-container button').forEach(function (btn){
        btn.addEventListener('click', function(){
            toggleModal()
        })
          })
        }
        
        document.querySelector('.delete').addEventListener('click', function(){
            toggleModal()
        })
        
        function toggleModal() {
          document.getElementById("modal").classList.toggle("is-active");
        }
  
  window.onload = fetchDogBreeds