
let laptops = [];
let index = 0;
const BATCH_SIZE = 20;

async function fetchLaptops() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxVw0CXO_NHeE3V86nWT60o3Dute5Oo-n1pRzPz8w145c7rZjtzqhoibaiD-YIH9cfK/exec"
    );
    laptops = await response.json();

    console.log("Fetched laptops:", laptops.length);

    document.getElementById("shop-loader").style.display = "none";
    document.getElementById("laptops").style.display = "grid";

    renderBatch(); // show first batch
    setupInfiniteScroll();
  } catch (err) {
    console.error("Error fetching laptops:", err);
    document.getElementById("shop-loader").textContent = "Failed to load laptops.";
  }
}

function renderBatch() {
  const container = document.getElementById("laptops");
  const slice = laptops.slice(index, index + BATCH_SIZE);

  slice.forEach(laptop => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${laptop.image}" alt="${laptop.name}" loading="lazy">
      <h3>${laptop.name}</h3>
      <p>${laptop.description}</p>
      <div class="price"><span class="new">₹${laptop.price}</span></div>
      <p class="emi">Easy EMI Available</p>
      <button onclick="window.open('https://wa.me/+919917930664', '_blank')">
        <i class="fa-brands fa-whatsapp"></i> Apply for EMI
      </button>
    `;
    container.appendChild(card);
  });

  index += BATCH_SIZE;
}

function setupInfiniteScroll() {
  window.addEventListener("scroll", () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
      if (index < laptops.length) {
        renderBatch();
      }
    }
  });
}

fetchLaptops();
