import ChoresController from "../controllers/ChoresController.js";

class CreateButtons {
  /**
   * Criar o botão de atualizar a Chore
   * - redireciona para a página atualizar.html
   * - passa como params o Id da Chore
   */
  static createUpdateBtn = (id) => {
    const { button } = this._createButton(id, "Editar", "update-btn");

    button.addEventListener("click", () => {
      window.location.href = `../../public/atualizar.html?id=${id}`;
    });
  };

  /* criar o botão para deletar a Chore */
  static createDeleteBtn = (id) => {
    const { button } = this._createButton(id, "Excluir", "delete-btn");

    button.addEventListener("click", async (event) => {
      event.preventDefault();
      await ChoresController.deleteChore(id);
    });
  };

  /* criar o botão de concluir a Chore */
  static createConcBtn = (id) => {
    const { button, tr } = this._createButton(id, "Concluir", "conclude-btn");

    button.addEventListener("click", (event) => {
      event.preventDefault();
      tr.classList.toggle("concluded");
      button.textContent == "Concluir"
        ? (button.textContent = "Desmarcar")
        : (button.textContent = "Concluir");
    });
  };

  /* criar o botão padrão */
  static _createButton = (id, btnText, btnClass) => {
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
}

export default CreateButtons;
