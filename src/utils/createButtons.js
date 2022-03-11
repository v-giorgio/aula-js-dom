import deleteChore from "../controllers/deleteChore.js";

/**
 * Criar o botão de atualizar a Chore
 * - redireciona para a página atualizar.html
 * - passa como params o Id da Chore
 */
export const createUpdateBtn = (id) => {
  const { button } = createButton(id, "Editar", "update-btn");

  button.addEventListener("click", () => {
    window.location.href = `../../public/atualizar.html?id=${id}`;
  });
};

/* criar o botão para deletar a Chore */
export const createDeleteBtn = (id) => {
  const { button } = createButton(id, "Excluir", "delete-btn");

  button.addEventListener("click", async (event) => {
    event.preventDefault();
    await deleteChore(id);
  });
};

/**
 * criar o botão de concluir a Chore
 *
 */
export const createConcBtn = (id) => {
  const { button, tr } = createButton(id, "Concluir", "conclude-btn");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    tr.classList.toggle("concluded");
    button.textContent == "Concluir"
      ? (button.textContent = "Desmarcar")
      : (button.textContent = "Concluir");
  });
};

/* criar o botão padrão */

const createButton = (id, btnText, btnClass) => {
  const newTr = document.querySelector(`.new-tr-${id}`);
  const btn = document.createElement("button");
  btn.textContent = btnText;
  btn.classList.add(btnClass);
  newTr.appendChild(btn);

  return {
    button: btn,
    tr: newTr,
  };
};
