import showList from "../views/ChoresView.js";
import CreateButtons from "../utils/createButtons.js";

class ChoresController {
  /* requisição assíncrona para receber todas as Chores */
  static getChores = async (table) => {
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
        CreateButtons.createConcBtn(await data.id);
        CreateButtons.createUpdateBtn(await data.id);
        CreateButtons.createDeleteBtn(await data.id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* requisição assíncrona para receber os atts da Chore única */
  static getChoreById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/chores/${id}`, {
        method: "GET",
      });
      const content = await response.json();
      return content;
    } catch (error) {
      console.log(error);
    }
  };

  /* requisição assíncrona para criar uma nova Chore */
  static postChores = async (title, description) => {
    try {
      const response = await fetch("http://localhost:3000/chores", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `${title}`,
          description: `${description}`,
        }),
      });
      const content = await response.json();

      return content;
    } catch (error) {
      console.log(error);
    }
  };

  /* requisição assíncrona para atualizar a Chore */
  static updateChore = async (title, description, id) => {
    try {
      const response = await fetch(`http://localhost:3000/chores/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `${title}`,
          description: `${description}`,
        }),
      });

      const content = await response.json();

      return content;
    } catch (error) {
      console.log(error);
    }
  };

  /* requisição assíncrona para deletar uma Chore */
  static deleteChore = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/chores/${id}`, {
        method: "DELETE",
      });
      const content = await response.json();
      return content;
    } catch (error) {
      console.log(error);
    }
  };
}

export default ChoresController;
