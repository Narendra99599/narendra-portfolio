const form = document.getElementById("form");

const sendData = async (obj) => {
  try {
    let response = await fetch("http://localhost:3000/api/v1/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    console.log("this is in sendData",data);
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
  let res = await sendData(obj);
  console.log(res);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});
