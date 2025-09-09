async function fetchLaptops() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwx29q6QszV9uIackE7nE5rNfmywAuuf4rbqGsDXOVpIX3_bvq_kQZe1eDbIvdmyRFL/exec", {
      method: "POST"
    });

    const text = await response.text();
    const jsonBlocks = text.trim().split("\n");
    const laptops = jsonBlocks.map(block => JSON.parse(block)[0]);

    console.log("All laptops:", laptops);

    const container = document.getElementById("laptops");
    const loader = document.getElementById("shop-loader");


    loader.style.display = "none";
    container.style.display = "grid";
    container.innerHTML = ""; 

    laptops.forEach((laptop, index) => {
      const card = document.createElement("div");
      card.className = "product-card";

      // First few rows load immediately, others lazy-load images
      card.innerHTML = `
        <img src="${laptop.image}" alt="${laptop.name}" ${index > 5 ? 'loading="lazy"' : ""}>
        <h3>${laptop.name}</h3>
        <p>${laptop.description}</p>
        <div class="price">
          <span class="new">₹${laptop.price}</span>
        </div>
        <p class="emi">Easy EMI Available</p>
        <button onclick="window.open('https://wa.me/9917930664', '_blank')"><i class="fa-brands fa-whatsapp"></i>Apply for EMI</button>
      `;
      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error fetching laptops:", err);
  }
}

fetchLaptops();
