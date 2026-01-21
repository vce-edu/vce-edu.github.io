document.addEventListener('DOMContentLoaded', () => {

  
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


  const SUPABASE_URL = "https://auygeiqcsygchfmitfxv.supabase.co";
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1eWdlaXFjc3lnY2hmbWl0Znh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMDUzOTEsImV4cCI6MjA4MjY4MTM5MX0.WVpNirNUPa3v3VP5vusjAFezPvH1C8ZF16dWRPcKH-4';

  
  
  let supabaseClient;
  try {
    if (window.supabase && window.supabase.createClient) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else {
      console.warn("Supabase SDK not found on window.supabase");
    }
  } catch (err) {
    console.error("Supabase init error:", err);
  }

  
  
  async function finddiploma() {
    let diploma_input = document.getElementById("diploma-input").value.trim().toLowerCase().replace(/\s+/g, '_');
    const branch_input = document.getElementById("branchInput").value;

    if (!branch_input) {
      showMessage("Please Select your Branch", "error");
      return;
    }
    if (!diploma_input) {
      showMessage("Please Input your roll Number", "error");
      return;
    }

    
    
    if (!/^[a-z]_/.test(diploma_input)) {
      const prefix = branch_input.charAt(0).toLowerCase();
      
      
      diploma_input = `${prefix}_${diploma_input}`;
    }

    
    let githubLink = "https://raw.githubusercontent.com/vce-edu/diploma/main/" + diploma_input + ".pdf";

    showMessage("Checking GitHub...", "info");

    try {
      let response = await fetch(githubLink, { method: "HEAD" });

      if (response.ok) {
        showMessage("Roll number is verified (GitHub).", "success");
        showConfirm("Roll number is verified. Do you want to download the diploma?", () => {
          window.open(githubLink, "_blank");
        });
        return; 
      }
    } catch (error) {
      console.warn("GitHub fetch error:", error);
      
    }

    
    showMessage("Checking Supabase...", "info");

    try {
      
      const fileName = diploma_input;

      const { data } = supabaseClient
        .storage
        .from('diplomas')
        .getPublicUrl(fileName);

      if (!data?.publicUrl) {
        showMessage("Diploma not found.", "error");
        return;
      }

      
      const checkResponse = await fetch(data.publicUrl, { method: 'HEAD' });

      if (!checkResponse.ok) {
        console.warn("File not found on Supabase (public check)");
        showMessage("Diploma not found for this roll number.", "error");
        return;
      }

      showMessage("Roll number is verified (Supabase).", "success");

      showConfirm(
        "Roll number is verified. Do you want to download the diploma?",
        () => {
          window.open(data.publicUrl, "_blank");
        }
      );


    } catch (err) {
      console.error("Supabase check error:", err);
      showMessage("Error checking diploma. Please try again later.", "error");
    }
  }

  
  
  const form = document.getElementById('diplomaForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      finddiploma();
    });
  } else {
    
    if (btn) btn.addEventListener('click', finddiploma);
    if (input) input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') finddiploma();
    });
  }

  
  function showMessage(text, type = 'info') {
    if (!msg) return;
    msg.textContent = text;
    msg.className = 'message-box';
    msg.classList.add(type);
    msg.style.display = 'block';
    setTimeout(() => {
      msg.textContent = '';
      msg.className = 'message-box';
    }, 3000);
  }


  showMessage('Ready. Enter your roll number and click "Find Diploma".', 'info');

  
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

  
  showTips?.addEventListener('click', () => {
    const isHidden = tipsContainer.classList.contains('hidden');
    tipsContainer.classList.toggle('hidden', !isHidden);
    showTips.setAttribute('aria-expanded', String(isHidden));
  });

  
  input.setAttribute('aria-label', 'Roll number');

});
