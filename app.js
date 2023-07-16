const form = document.getElementById("form");

function showLoading(){
  let divi= document.createElement('div');
  divi.classList.add('loading-screen')
  let divispinnner = document.createElement('div');
  divispinnner.classList.add('loading-spinner');
  divi.prepend(divispinnner);
  document.querySelector('.contact-width-section').prepend(divi);
}

function hideLoading(){
  document.querySelector('.contact-width-section').removeChild(document.querySelector('.loading-screen'));
}

const sendData = async (obj) => {
  try {
    let response = await fetch("https://portfoliobackend-r7db.onrender.com/api/v1/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  let obj = { name, email, subject, message };
  showLoading();
  let res = await sendData(obj);
  alert(res.message);
  hideLoading();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});
