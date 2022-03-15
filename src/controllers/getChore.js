import showList from "../views/ChoresView.js";
import {
  createConcBtn,
  createUpdateBtn,
  createDeleteBtn,
} from "../utils/createButtons.js";

/* requisição assíncrona para receber todas as Chores */
const getChores = async (table) => {
  try {
    const response = await fetch("http://localhost:3000/chores", {
      method: "GET",
    });
    const content = await response.json();

    /* percorrer as Chores recebidas */
    content.map(async (data) => {
      /* adicionar as chores na tabela */
      table.insertAdjacentHTML("beforeend", showList(data));
      /* criar os três botões de alteração de cada Chore */
      createConcBtn(await data.id);
      createUpdateBtn(await data.id);
      createDeleteBtn(await data.id);
    });
  } catch (error) {
    console.log(error);
  }
};

export default getChores;
