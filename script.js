window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.nav-container');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


const addButton = document.getElementById('add-btn');
const container = document.getElementById("dynamic-cards");

let editTarget = null;

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title-input').value.trim();
    const description = document.getElementById('description-input').value.trim();
    const category = document.getElementById('category-input').value.trim();

    if (!title || !description || !category) {
        alert('Please fill all the fields');
        return;
    }

    if (editTarget) {
        editTarget.querySelector('.card-title').innerText = title;
        editTarget.querySelector('.card-subtitle').innerText = description;
        editTarget.querySelector('.card-text').innerText = category;
        editTarget = null;
    } else {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
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
        `;
        container.appendChild(card);
    }

    document.getElementById('title-input').value = "";
    document.getElementById('description-input').value = "";
    document.getElementById('category-input').value = "";
});

container.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("bxs-x-circle")) {
        const card = target.closest(".card");
        card.remove();
    }

    if (target.classList.contains("bxs-edit")) {
        const card = target.closest(".card");
        const title = card.querySelector(".card-title").innerText;
        const description = card.querySelector(".card-subtitle").innerText;
        const category = card.querySelector(".card-text").innerText;

        document.getElementById("title-input").value = title;
        document.getElementById("description-input").value = description;
        document.getElementById("category-input").value = category;

        editTarget = card;
    }
});


document.getElementById("horror-btn").addEventListener("click", () => filterBooks("horror"));
document.getElementById("comedy-btn").addEventListener("click", () => filterBooks("comedy"));
document.getElementById("thriller-btn").addEventListener("click", () => filterBooks("thriller"));

function filterBooks(genre) {
  const cards = document.querySelectorAll(".book-card");
  cards.forEach(card => {
    if (card.classList.contains(genre)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
