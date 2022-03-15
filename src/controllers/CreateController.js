import ChoresController from "./ChoresController.js";

class CreateController {
  constructor() {
    /* get DOM elements */
    this.table = document.querySelector("#list-table");
    this.createBtn = document.querySelector("#list-button");
    this.inputTitle = document.querySelector("#list-input-title");
    this.inputDesc = document.querySelector("#list-input-desc");
    this.errSpan = document.querySelector(".error");

    /* (IIFE) - atualizar a tabela com as Chores recebidas pela API */
    (async () => {
      await ChoresController.getChores(this.table);
    })();

    /* disparar evento para criar nova Chore */
    this.createBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const title = this.inputTitle.value;
      const desc = this.inputDesc.value;

      /* verificar se os campos estão preenchidos */
      if (title === "" || desc === "") {
        this.errSpan.classList.remove("invisible");
      } else {
        this.errSpan.classList.add("invisible");
        await ChoresController.postChores(title, desc);
      }
    });
  }
}

const create = new CreateController();
