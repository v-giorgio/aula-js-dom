import ChoresController from "./ChoresController.js";

class UpdateController {
  constructor() {
    this.updateBtn = document.querySelector("#list-button");
    this.inputTitle = document.querySelector("#list-input-title");
    this.inputDesc = document.querySelector("#list-input-desc");
    this.errSpan = document.querySelector(".error");

    /* pegar o Id recebido como params */
    this.url = new URL(window.location);
    this.id = this.url.searchParams.get("id");

    /* atualizar Chore - disparar evento */
    this.updateBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const title = this.inputTitle.value;
      const desc = this.inputDesc.value;

      if (title === "" || desc === "") {
        this.errSpan.classList.remove("invisible");
      } else {
        this.errSpan.classList.add("invisible");
        await ChoresController.updateChore(title, desc, this.id);
        console.log("test");
        window.location.href = "../../public/index.html";
      }
    });
  }

  getAtts = async () => {
    /* preencher os inputs com os atts da Chore */
    try {
      const { title, description } = await ChoresController.getChoreById(
        this.id
      );
      this.inputTitle.value = title;
      this.inputDesc.value = description;
    } catch (error) {
      console.log(error);
    }
  };
}

const update = new UpdateController();
await update.getAtts();
