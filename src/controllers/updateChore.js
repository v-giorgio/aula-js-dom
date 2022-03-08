const updateBtn = document.querySelector("#list-button");
const inputTitle = document.querySelector("#list-input-title");
const inputDesc = document.querySelector("#list-input-desc");
const errSpan = document.querySelector(".error");

/* pegar o Id recebido como params */
const url = new URL(window.location);
const id = url.searchParams.get("id");

/* requisição assíncrona para receber os atts da Chore */
const getChoreById = async () => {
  const response = await fetch(`http://localhost:3000/chores/${id}`, {
    method: "GET",
  });
  const content = await response.json();
  return content;
};

/* preencher os inputs com os atts da Chore */
getChoreById().then((data) => {
  inputTitle.value = data.title;
  inputDesc.value = data.description;
});

/* atualizar Chore - disparar evento */
updateBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const title = inputTitle.value;
  const desc = inputDesc.value;

  if (title === "" || desc === "") {
    errSpan.classList.remove("invisible");
  } else {
    errSpan.classList.add("invisible");
    await updateChore(title, desc);
    console.log("test");
    window.location.href = "../../public/index.html";
  }
});

/* requisição assíncrona para atualizar a Chore */
const updateChore = async (title, description) => {
  const response = await fetch(`http://localhost:3000/chores/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: `${title}`, description: `${description}` }),
  });

  const content = await response.json();

  return content;
};
