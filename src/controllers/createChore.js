import getChore from "./getChore.js";
import postChores from "./postChore.js";

/* get DOM elements */
const table = document.querySelector("#list-table");
const createBtn = document.querySelector("#list-button");
const inputTitle = document.querySelector("#list-input-title");
const inputDesc = document.querySelector("#list-input-desc");
const errSpan = document.querySelector(".error");

/* atualizar a tabela com as Chores recebidas pela API */
getChore(table);

/* disparar evento para criar nova Chore */
createBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const title = inputTitle.value;
  const desc = inputDesc.value;

  /* verificar se os campos estão preenchidos */
  if (title === "" || desc === "") {
    errSpan.classList.remove("invisible");
  } else {
    errSpan.classList.add("invisible");
    await postChores(title, desc);
  }
});

// json-server --watch db.json
