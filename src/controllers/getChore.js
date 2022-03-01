import showList from "../views/ChoresView.js";
import deleteChore from "./deleteChore.js";

const getChores = async (table) => {
  const response = await fetch("http://localhost:3000/chores", {
    method: "GET",
  });
  const content = await response.json();
  // console.log(content);
  content.map(async (data) => {
    table.insertAdjacentHTML("beforeend", await showList(data));
    createConcBtn(await data.id);
    createDeleteBtn(await data.id);
  });
};

const createDeleteBtn = (id) => {
  const newTr = document.querySelector(`.new-tr-${id}`);
  const btn = document.createElement("button");
  btn.textContent = "Excluir";
  btn.classList.add("delete-btn");
  newTr.appendChild(btn);

  btn.addEventListener("click", async (event) => {
    event.preventDefault();
    await deleteChore(id);
  });
};

const createConcBtn = (id) => {
  const newTr = document.querySelector(`.new-tr-${id}`);
  const btn = document.createElement("button");
  btn.textContent = "Concluir";
  btn.classList.add("conclude-btn");
  newTr.appendChild(btn);

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    newTr.classList.toggle("concluded");
    btn.textContent == "Concluir"
      ? (btn.textContent = "Desmarcar")
      : (btn.textContent = "Concluir");
  });
};

export default getChores;
