import showList from "../views/ChoresView.js";
import deleteChore from "./deleteChore.js";

/* requisição assíncrona para receber todas as Chores */
const getChores = async (table) => {
  const response = await fetch("http://localhost:3000/chores", {
    method: "GET",
  });
  const content = await response.json();
  // console.log(content);

  /* percorrer as Chores recebidas */
  content.map(async (data) => {
    /* adicionar as chores na tabela */
    table.insertAdjacentHTML("beforeend", await showList(data));
    /* criar os três botões de alteração de cada Chore */
    createConcBtn(await data.id);
    createUpdateBtn(await data.id);
    createDeleteBtn(await data.id);
  });
};

/**
 * Criar o botão de atualizar a Chore
 * - redireciona para a página atualizar.html
 * - passa como params o Id da Chore
 */
const createUpdateBtn = (id) => {
  const newTr = document.querySelector(`.new-tr-${id}`);
  const btn = document.createElement("button");
  btn.textContent = "Editar";
  btn.classList.add("update-btn");
  newTr.appendChild(btn);

  btn.addEventListener("click", () => {
    window.location.href = `../../public/atualizar.html?id=${id}`;
  });
};

/* criar o botão para deletar a Chore */
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

/**
 * criar o botão de concluir a Chore
 *
 */
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
