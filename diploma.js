document.addEventListener('DOMContentLoaded', () => {

  // ELEMENTS
  const btn = document.getElementById('diploma-button');
  const input = document.getElementById('diploma-input');
  const msg = document.getElementById('message-box');
  const copyBtn = document.getElementById('copy-example');
  const videoWrap = document.getElementById('video-container');
  const showVideo = document.getElementById('show-video');
  const showTips = document.getElementById('show-tips');
  const tipsContainer = document.getElementById('tips-container');

 function showConfirm(message, onConfirm) {
  const confirmBox = document.getElementById("confirm-box");
  const confirmMsg = document.getElementById("confirm-message");
  const okBtn = document.getElementById("confirm-ok");
  const cancelBtn = document.getElementById("confirm-cancel");

  confirmMsg.textContent = message;
  confirmBox.style.display = "flex";

  okBtn.onclick = () => {
    confirmBox.style.display = "none";
    onConfirm();
  };
  cancelBtn.onclick = () => {
    confirmBox.style.display = "none";
  };
}

  // FIND DIPLOMA FUNCTION
async function finddiploma() {
  let diploma_input = document.getElementById("diploma-input").value.trim().toLowerCase();

  if (!diploma_input) {
    showMessage("Please Input your roll Number", "error");
    return;
  }

  let link = "https://raw.githubusercontent.com/vce-edu/diploma/main/" + diploma_input + ".pdf";

  try {
    let response = await fetch(link, { method: "HEAD" }); // only check headers, faster than GET

      if (response.ok) {
      showMessage("Roll number is verified.", "success");
      showConfirm("Roll number is verified. Do you want to download the diploma?", () => {
        window.open(link, "_blank");
      });
    } else {
      showMessage("Diploma not found for roll number " + diploma_input, "error");
    }
  } catch (error) {
    showMessage("Error checking diploma. Please try again later.", "error");
    console.error(error);
  }
}


  // BUTTON & ENTER KEY
  btn.addEventListener('click', finddiploma);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btn.click();
  });

  // SHOW MESSAGE FUNCTION
  function showMessage(text, type = 'info') {
    if (!msg) return;
    msg.textContent = text;
    msg.className = 'message-box'; // reset
    msg.classList.add(type);
    msg.style.display = 'block';
    setTimeout(() => {
      msg.textContent = '';
      msg.className = 'message-box';
    }, 3000);
  }

  // INITIAL MESSAGE
  showMessage('Ready. Enter your roll number and click "Find Diploma".', 'info');

  // COPY EXAMPLE
  copyBtn?.addEventListener('click', () => {
    const example = '1184@Ashish';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(example)
        .then(() => showMessage('Example copied to clipboard.', 'success'))
        .catch(() => showMessage('Could not copy. Select and copy manually.', 'error'));
    } else {
      showMessage('Clipboard not available. Select and copy: ' + example, 'info');
    }
  });

  // VIDEO TOGGLE
  let videoLoaded = false;
  let iframe;
  showVideo?.addEventListener('click', () => {
    if (!videoLoaded) {
      iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/Z2V2lwh4kC0?rel=0';
      iframe.title = 'Diploma Download Tutorial';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      videoWrap.appendChild(iframe);
      videoWrap.classList.remove('hidden');
      videoWrap.setAttribute('aria-hidden', 'false');
      showVideo.setAttribute('aria-expanded', 'true');
      showMessage('Video loaded below. Play for a quick tutorial.', 'info');
      videoLoaded = true;
    } else {
      if (iframe) videoWrap.removeChild(iframe);
      videoWrap.classList.add('hidden');
      videoWrap.setAttribute('aria-hidden', 'true');
      showVideo.setAttribute('aria-expanded', 'false');
      videoLoaded = false;
    }
  });

  // SHOW/HIDE TIPS
  showTips?.addEventListener('click', () => {
    const isHidden = tipsContainer.classList.contains('hidden');
    tipsContainer.classList.toggle('hidden', !isHidden);
    showTips.setAttribute('aria-expanded', String(isHidden));
  });

  // Accessibility
  input.setAttribute('aria-label', 'Roll number');

});
