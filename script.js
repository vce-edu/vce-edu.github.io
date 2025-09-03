// https://github.com/vce-edu/diploma/blob/main/computer-fundamental-notes-english_protected.pdf


let links = {
  "adca": "https://drive.google.com/drive/folders/1xi9PqfNt09FiszF7swXsELgBnAOPTxfz?usp=sharing",
  "ccc": "https://drive.google.com/drive/folders/1naxTpaGr2GS9tmZqecvwYBSRq_J72j58?usp=sharing",
  "dcst": "https://drive.google.com/drive/folders/1PFHAyeGO6jYuTg7VY85fPEXSddHjg1Vq?usp=sharing",
  "languages": "https://drive.google.com/drive/folders/1zJ9pyBpWXOkyF8PICvYV4Eb0JMq2kc0W?usp=sharing",
  "mdca": "https://drive.google.com/drive/folders/1Xzt64wjmO7LbaH8bzKU_ZxB8gaq4Rank?usp=sharing",
  "o level": "https://drive.google.com/drive/folders/1zu1Nx2rD06nXyTkhEMEj0YU2h7ptpA6u?usp=sharing",
  "typing": "https://drive.google.com/drive/folders/1MYgNBnYinCvFpFgwU-vbpsTefgB-uFhP?usp=sharing",
  "web designing": "https://drive.google.com/drive/folders/1PG76vOWbwIJdkVMgZrG6tW5fvA2TAOzd?usp=sharing",
  "cca": "https://drive.google.com/drive/folders/1PFHAyeGO6jYuTg7VY85fPEXSddHjg1Vq?usp=sharing"
}

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-bar").classList.toggle("active");
});

const courseInput = document.getElementById("course");
if (courseInput) {
  courseInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      findnotes();
    }
  });
}

const diplomaInput = document.getElementById("diploma-input");
if (diplomaInput) {
  diplomaInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      finddiploma();
    }
  });
}

function showMessage(message, type = "error") {
  const box = document.getElementById("message-box");
  box.textContent = message;
  box.className = type;
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 3000);
}

function findnotes() {
  let course_input = document.getElementById("course").value.trim().toLowerCase();

  if (links[course_input]) {
    window.open(links[course_input], "_blank");
    showMessage("Notes Found for " + course_input + ", Sucessfully!", "success");
  } else if (!course_input) {
    showMessage("Please, enter your course first", "error");
  }
  else {
    showMessage("Sorry, notes for this course are not available.", "error");
  }
}

function finddiploma() {
  let diploma_input = document.getElementById("diploma-input").value.trim().toLowerCase();

  if (!diploma_input) {
    showMessage("Please Input your roll Number", "error");
  } else {
    let link = "https://raw.githubusercontent.com/vce-edu/diploma/main/" + diploma_input + ".pdf";
    window.open(link, "_blank");
    showMessage("Fetching diploma for " + diploma_input, "success");
  }
}

function findresult() {
  window.open("https://certificate.nielit.gov.in/results/Frm_PreResult.aspx", "_blank");
}


window.addEventListener("load", () => {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  gallery.querySelectorAll("img").forEach((img, i) => {
    setTimeout(() => {
      img.classList.add("fade-in");
    }, i * 300);
  });
});

function registration() {
   let submitBtn = document.querySelector("input[type='submit']");
  submitBtn.disabled = true;
  submitBtn.value = "Submitting...";
  let data = {
    name: document.getElementById("name").value,
    fatherName: document.getElementById("fathername").value, 
    phone: document.getElementById("phonenumber").value,     
    gender: document.getElementById("gender").value,
    address: document.getElementById("address").value,
  };

   let popup = document.createElement("div");
  popup.id = "statusPopup";
  popup.innerText = "⏳ Submitting your form...";
  Object.assign(popup.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#333",
    color: "#fff",
    padding: "15px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    fontSize: "14px",
    zIndex: 9999,
  });
  document.body.appendChild(popup);

  fetch("https://script.google.com/macros/s/AKfycbw8V9gU65BQujh0a0brj-2BfcDPzRBaajZtexgFt5S6hC481hTvJGb0ryuAAtQT1Nz0jg/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(response => {
      if (response.status === "ok") {
        popup.innerText = "☑️ Registration successful!";
      } 
      else if (response.message === "Duplicate entry") {
    popup.innerText = "🙅 Duplicate entry";}
    else {
        popup.innerText = "⚠️error⚠️ : " + response.message;
      }
      setTimeout(() => popup.remove(), 3000);
    })
    .catch(err => {
      popup.innerText = "⚠️Error⚠️ : Network error!";
      setTimeout(() => popup.remove(), 3000);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.value = "Submit";
      window.location.href = "/vce-gat.html";
    });
}