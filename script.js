// https://github.com/vce-edu/diploma/blob/main/computer-fundamental-notes-english_protected.pdf

const notesLinks = {
  word: {
    en: "https://drive.google.com/uc?export=download&id=1i9Re5GbaQYIHrfxAIXGYE_kQRkaEfhaj",
    hi: "https://drive.google.com/uc?export=download&id=1kr5qlgEuYPgK_2uTTWWRmMpJRccjjK7x"
  },
  excel: {
    en: "https://drive.google.com/uc?export=download&id=19qIiNFgnNauVz4Y-aYUPXqKSiwAuWlUQ",
    hi: "https://drive.google.com/uc?export=download&id=1QTMI8Rsrzwea9OQ_pjk-ul8-daO9pPnn"
  },
  powerpoint: {
    en: "https://drive.google.com/uc?export=download&id=1r4SwL6wnmCTYfVZK4lO5__wpMIogeMaP",
    hi: "https://drive.google.com/uc?export=download&id=1gdWekQeUS8PEQry0xPtPb3NPryj8ZHlK"
  },
  photoshop: {
    en: "https://drive.google.com/uc?export=download&id=1-CK-P74mjhUr7LPLRE_bmlA7RD-TM3qB",
    hi: "https://drive.google.com/uc?export=download&id=1KlVDi7hHoZIpVGwDJoK-QCDkAs2o_BB9"
  },
  coreldraw: {
    en: "https://drive.google.com/uc?export=download&id=1vG1RmVwEpKmrR29dZZtOWWeC2iLKZdAY",
    hi: "https://drive.google.com/uc?export=download&id=1xEQGtnmpfSBAf0AdfrbUHdf86Mj6a9Cc"
  },
  tallyprime: {
    en: "https://drive.google.com/uc?export=download&id=1yKTUC9ymRCk5olwIB9UyAHcaDtTgaXrG",
    hi: "https://drive.google.com/uc?export=download&id=16Rq2EAnQ-kOd_FWqlggb0uiGF-RfM5FE"
  },
  shortcuts: {
    en: "https://drive.google.com/uc?export=download&id=1a6Ui2-V7qGy8rRkb1VdZUKu88MNFY7cE"
  },
  busy: {
    en: "https://drive.google.com/uc?export=download&id=1U-7ZcKYQMXjB7frwaOCwESokEIG66fYP",
    hi: "https://drive.google.com/uc?export=download&id=1UYF2Si60fshS2Wqdq8Kk_wHzG9A_IQAO"
  },
  tally9: {
    en: "https://drive.google.com/uc?export=download&id=1yv7MWW9dtXRZdm7gnZYtGX9d_x_lD0N-",
    hi: "https://drive.google.com/uc?export=download&id=1-2OUWjL29M0WCHw7jCKq5bNXim_tCt6k"
  },
  mangal: {
    hi: "https://drive.google.com/uc?export=download&id=18DOsEqzfjVe5973uzqGTw67G5KPEbXtu"
  },
  marg: {
    hi: "https://drive.google.com/uc?export=download&id=1forvAddyXfUMo6mrVHvdZhOZi2LFZ1m2"
  },
  krutidev: {
    hi: "https://drive.google.com/uc?export=download&id=1VpPOk_j0Cl3YFUPXx0ApQ75ayDj6240A"
  },
  css: {
    en: "https://drive.google.com/uc?export=download&id=17xyQhnsthn3VU3TOd1O09ZbDbA4cHmtB"
  },
  html: {
    en: "https://drive.google.com/uc?export=download&id=17rvu64J90LEGpMoM1vVl1sagkbyocuG-"
  },
  python: {
    en: "https://drive.google.com/uc?export=download&id=17rsRXfbIKH4kdfNxIDaFGhAtSXBkOWZ5"
  },
  c: {
    en: "https://drive.google.com/uc?export=download&id=1ws4qvhijBnlRFBwM9sc27rCxTJRkB2cM"
  },
  cpp: {
    en: "https://drive.google.com/uc?export=download&id=1O2szBabVAwo_3URhjMoL_dF2AAdPIPHi"
  },
  java: {
    en: "https://drive.google.com/uc?export=download&id=1GRV7alzlmbGBSGUDs0XXH0Xt9nlSkXQ4"
  },
  javascript: {
    en: "https://drive.google.com/uc?export=download&id=12bZmkO6CxXGk6cNBoSsXnj-4IwNBvrcj"
  },
  writer: {
    en: "https://drive.google.com/uc?export=download&id=1CSoDUmRhvplrUCoICZIkDkERmDG9ljIQ",
    hi: "https://drive.google.com/uc?export=download&id=1Clh7IA5hGTOuQBShBNYgJJOOnORZnvFN"
  },
  calc: {
    en: "https://drive.google.com/uc?export=download&id=15bwV88lfNMgK_S2i-ZrAkTZQI307aV4K",
    hi: "https://drive.google.com/uc?export=download&id=1InO26lSsoISGJiL4FpU0VrfrXd7e_8Vy"
  },
  impress: {
    en: "https://drive.google.com/uc?export=download&id=19Bj8i1X41zwEfD-5lANkjmcf0dizUGsR",
    hi: "https://drive.google.com/uc?export=download&id=1eiXA8GkFKk6Jlc5EVAN07b1K7gPaBgpn"
  },
  w3css: {
    en: "https://drive.google.com/uc?export=download&id=1pn3LBkia0H5Z5fX-hTVYRCsJqnZF5lXP"
  },

};

const englishOnly = ["shortcuts", "python", "c", "cpp", "java", "html", "css", "javascript", "w3css"];
const hindiOnly = ["mangal", "krutidev"];

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

function updateLanguage() {
  const button = document.getElementById("download");
  button.disabled= false;
  button.classList.remove("disabled")
  const course = document.getElementById("course").value.toLowerCase();
  const langSelect = document.getElementById("language");

  langSelect.disabled = false;
  [...langSelect.options].forEach(opt => opt.hidden = false);

  if (englishOnly.includes(course)) {
    langSelect.value = "en";
    langSelect.disabled = true;
    langSelect.querySelector('[value="hi"]').hidden = true;
  }
  if (hindiOnly.includes(course)) {
    langSelect.value = "hi";
    langSelect.disabled = true;
    langSelect.querySelector('[value="en"]').hidden = true;
  }
}


function downloadNotes() {
  const course = document.getElementById("course").value.toLowerCase();
  const lang = document.getElementById("language").value;
  const button = document.getElementById("download");

  if (notesLinks[course] && notesLinks[course][lang]) {
    
    button.disabled = true;
    button.classList.add("disabled");
    button.textContent = "Downloading...";

    
    const a = document.createElement("a");
    a.href = notesLinks[course][lang];
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    
    setTimeout(() => {
      button.disabled = false;
      button.classList.remove("disabled");
      button.textContent = "Download Notes";
    }, 5000);

  } else {
    alert("Notes not available for this selection yet.");
  }
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


function findresult() {
  window.open("https://certificate.nielit.gov.in/results/Frm_PreResult.aspx", "_blank");
}


window.addEventListener("load", () => {
  const gallery = document.querySelector(".gallery");
  const loader = document.getElementById("loader");

  if (!gallery) return;

  // Hide loader once all images and resources are ready
  loader.style.display = "none";

  // Fade in effect for gallery images
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
  fullName: document.getElementById("name").value.toLowerCase().trim(),
  fatherName: document.getElementById("fathername").value.toLowerCase().trim(),
  phone: document.getElementById("phonenumber").value.trim(), 
  school: document.getElementById("school").value.toLowerCase().trim(),
  gender: document.getElementById("gender").value.toLowerCase().trim(),
  address: document.getElementById("address").value.toLowerCase().trim(),
};


  
  let popup = document.createElement("div");
  popup.id = "statusPopup";
  popup.innerText = "📤 Sending data...";
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

  fetch("https://script.google.com/macros/s/AKfycbzufgRttlbAhgR1-5jNXqZw9ymHz97ONI4t6B7K7m2SX0E8nOpAsIZ0QH0QPrFfrm_f/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(response => {
      if (response.status === "success") {
        popup.innerText = "☑️ Registered successfully!";
        setTimeout(() => {
          window.location.href = "/registration_fees.html"; 
        }, 1000);
      } 
      else if (response.message === "Duplicate entry") {
        popup.innerText = "🙅 Duplicate entry";
        setTimeout(() => popup.remove(), 3000);
      } 
      else {
        console.log(response)
        popup.innerText = "⚠️ Error: " + response.message;
        setTimeout(() => popup.remove(), 3000);
      }
    })
    .catch(err => {
      console.error(err)
      popup.innerText = "⚠️ Network error!";
      setTimeout(() => popup.remove(), 3000);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.value = "Submit";
    });
}




async function findcard() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phonenumber").value;
  const resultDiv = document.getElementById("result");

  let button = document.querySelector("input[type='submit']");
  button.disabled = true;
  button.value = "Please wait...";

  try {
    let response = await fetch("https://script.google.com/macros/s/AKfycbwotlnTE_QcnG04v7kPsNNyRVKgtGS0v7lgX4uNjVkOK5Yx00S-jzoptEARWYEYiE23CA/exec", {
      method: "POST",
      body: JSON.stringify({ name: name, phone: phone })
    });

    let result = await response.json();

    if (result.status === "ok") {
      button.style.display = "none";

      resultDiv.innerHTML = `
        <p>Your Registration Number: <strong>${result.regNumber}</strong></p>
        <p style="color:red;">⚠️ Please copy this number. It is required as the password to open your Admit Card PDF.</p>
      `;

      try {
        await navigator.clipboard.writeText(result.regNumber);
      } catch (err) {
        console.warn("Clipboard write failed on mobile:", err);
      }

      generateLockedPDF(name, phone, result.regNumber)
    } else {
      button.disabled = false;
      button.value = "Submit";
      resultDiv.innerHTML = `<p style="color:red;">${result.message}</p>`;
    }
  } catch (err) {
    button.disabled = false;
    button.value = "Submit";
    resultDiv.innerHTML = `<p style="color:red;">Something went wrong. Please try again.</p>`;
    console.error(err);
  }
}


async function generateLockedPDF(name, phone, regNumber) {
  const exam = "Vintech Computer Education's General Awareness Test (VCE GAT)";
  const date = "15-September-2025";
  const center = "Vintech Computer Education, Maurya Tower 2nd Floor, Opp. Vedanta Hospital, Doraha Road, Bareilly";

  const header = { text: 'VINTECH COMPUTER EDUCATION', style: 'header', alignment: 'center', margin: [0, 0, 0, 2] };
  const subHdr = { text: 'ADMIT CARD', style: 'subheader', alignment: 'center', margin: [0, 0, 0, 12] };

  const details = [
    {
      stack: [
        { text: [{ text: "Name: ", bold: true }, { text: name }], margin: [0, 2, 0, 2] },
        { text: [{ text: "Phone: ", bold: true }, { text: phone }], margin: [0, 2, 0, 2] },
        { text: [{ text: "Registration No: ", bold: true }, { text: regNumber }], margin: [0, 2, 0, 2] },
        { text: [{ text: "Exam: ", bold: true }, { text: exam }], margin: [0, 2, 0, 2] },
        { text: [{ text: "Date: ", bold: true }, { text: date }], margin: [0, 2, 0, 2] },
        { text: [{ text: "Center: ", bold: true }, { text: center }], margin: [0, 2, 0, 2] },
      ]
    }
  ];


  const footer = { text: 'This PDF is password-protected. Do not share your password.', alignment: 'center', fontSize: 9, margin: [0, 18, 0, 0] };

  const userPassword = (regNumber).toString();

  const docDefinition = {
    pageSize: { width: 595, height: 'auto' },
    userPassword,
    permissions: {
      printing: 'highResolution',
      modifying: false,
      copying: false,
      annotating: false,
      fillingForms: false,
      contentAccessibility: false,
      documentAssembly: false,
    },
    content: [
      header,
      subHdr,
      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },
      { text: ' ', margin: [0, 4, 0, 0] },
      ...details,
      footer
    ],
    styles: {
      header: { fontSize: 16, bold: true, letterSpacing: 0.5 },
      subheader: { fontSize: 13, bold: true },
    },
    defaultStyle: { fontSize: 11 },
    pageMargins: [40, 36, 40, 36],
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);


  let msg = document.getElementById("downloadMessage");
  if (!msg) {
    msg = document.createElement("div");
    msg.id = "downloadMessage";
    msg.style.position = "fixed";
    msg.style.top = "30%";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.background = "#333";
    msg.style.color = "#fff";
    msg.style.padding = "15px 25px";
    msg.style.borderRadius = "10px";
    msg.style.fontSize = "16px";
    msg.style.fontWeight = "bold";
    msg.style.textAlign = "center";
    msg.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    msg.style.zIndex = 9999;
    document.body.appendChild(msg);
  }



  let counter = 20;
  msg.textContent = `⏳ Admit card will be downloaded in ${counter}s Read Below`;

  const countdown = setInterval(() => {
    counter--;
    if (counter > 0) {
      msg.textContent = `⏳ Admit card will be downloaded in ${counter}s Read Below`;
    } else {
      clearInterval(countdown);
      msg.textContent = "📥 Downloading Admit Card...";
      pdfDocGenerator.download(`Admit_Card_${regNumber || 'student'}.pdf`);
      setTimeout(() => msg.remove(), 3000);
    }
  }, 1000);
}


function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en', includedLanguages: 'en,hi', autoDisplay: false },
    'google_translate_element'
  );
}

function triggerTranslate(lang) {
  let select = document.querySelector("select.goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }
}


function getCurrentLang() {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  return match ? match[1] : "en";
}

const toggle = document.getElementById("langToggle");
let isHindi = false;


function syncToggle() {
  isHindi = getCurrentLang() === "hi";
  if (isHindi) {
    toggle.classList.add("active");
  } else {
    toggle.classList.remove("active");
  }
}

toggle.addEventListener("click", () => {
  console.log("pass 1");
  isHindi = !isHindi;
  toggle.classList.toggle("active");

  if (isHindi) {
    triggerTranslate("en");
    setTimeout(() => triggerTranslate("hi"), 200);
  } else {
    triggerTranslate("en");
  }


  setTimeout(syncToggle, 1000);
});


document.addEventListener("DOMContentLoaded", syncToggle);

const toggleContainer = document.querySelector(".toggle-container");
const header = document.querySelector("header");


const toggleOffsetTop = toggleContainer.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > toggleOffsetTop + header.offsetHeight) {

    toggleContainer.classList.add("toggle-docked");
  } else {

    toggleContainer.classList.remove("toggle-docked");
  }
});

const icon = document.querySelector(".icon");
const menu = document.querySelector(".grid-menu-hide");

icon.addEventListener("click", () => {
  const isVisible = menu.classList.contains("grid-menu");

  if (isVisible) {
    menu.classList.remove("grid-menu");
    document.body.style.overflow = "auto"; 
  } else {
    menu.classList.add("grid-menu");
    document.body.style.overflow = "hidden"; 
  }
});

document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    let page = item.getAttribute('data-page');
    window.location.href = page;
  });
});


