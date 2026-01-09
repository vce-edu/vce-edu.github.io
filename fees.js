function proceed() {
  const name = document.getElementById('studentName').value.trim();
  const father = document.getElementById('fatherName').value.trim();
  const course = document.getElementById('course').value;
  const amount = document.getElementById('amount').value.trim();

  if (!name || !father || !course || !amount) {
    alert('Please fill all details before proceeding.');
    return;
  }

  document.getElementById("paymentBox").style.display='block';
  const upiLink = `upi://pay?pa=manishmont-1@okaxis&pn=Vintech%20Computer%20Education&am=${amount}&tn=Fees%20for%20${encodeURIComponent(name)}%20(${encodeURIComponent(course)})`;
  document.getElementById('upiLink').href = upiLink;
}

function goBack() {
  document.querySelector('.fees-container').classList.remove('show-payment');
}
