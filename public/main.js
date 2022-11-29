const DOMform = document.getElementById("formAdd");

const handleSubmit = (e, form, route) => {
  e.preventDefault();
  let formData = new FormData(form);
  let obj = {};
  formData.forEach((value, key) => (obj[key] = value));
  fetch(route, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  DOMform.reset();
};

DOMform.addEventListener("submit", (e) => handleSubmit(e, e.target, "/api/productos"));
