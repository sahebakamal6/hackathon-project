const thrillerButton = document.getElementById('thriller');
const comedyButton = document.getElementById('comedy');
const horrorButton = document.getElementById('horror');
const addButton = document.getElementById('add');
let editIndex = null;
let cards = [];

addButton.addEventListener('click', (e)=>{
    e.preventDefault()
    const title = document.getElementById('title').value.trim()
    const description = document.getElementById('description').value.trim()
    const category = document.getElementById('category').value.trim()
    const container = document.getElementById("dynamic-cards");

    if(!title || !description || !category){
        alert('Please fill all the fields')
        return
    }


    const card = `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
         <div class="icon">
        <i class='bx bxs-edit'></i>
        <i class='bx bxs-x-circle'></i>
    </div>
          <h5>Title</h5>
          <h6 class="card-title">${title}</h6>
          <h5>Description</h5>
          <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
          <h5>Category</h5>
          <p class="card-text">${category}</p>
        </div>
      </div>
        `

        container.innerHTML += card;


        document.getElementById('title').value = ""
        document.getElementById('description').value = ""
        document.getElementById('category').value = ""
})

const deletebtn = document.querySelector('.bxs-x-circle');
const editbtn = document.querySelector('.bxs-edit');

const container = document.getElementById("dynamic-cards");
let editTarget = null;

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("bxs-x-circle")) {
    const card = e.target.closest(".card");
    card.remove();
  }

  if (e.target.classList.contains("bxs-edit")) {
    const card = e.target.closest(".card");
    const title = card.querySelector(".card-title").innerText;
    const description = card.querySelector(".card-subtitle").innerText;
    const category = card.querySelector(".card-text").innerText;

    document.getElementById("title").value = title;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category;

    editTarget = card;
  }
});
