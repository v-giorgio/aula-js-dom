/* requisição assíncrona para deletar uma Chore */
const deleteChore = async (id) => {
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

export default deleteChore;
