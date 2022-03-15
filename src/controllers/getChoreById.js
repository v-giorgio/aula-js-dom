/* requisição assíncrona para receber os atts da Chore */
const getChoreById = async (id) => {
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

export default getChoreById;
