/* requisição assíncrona para criar uma nova Chore */
const postChores = async (title, description) => {
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

export default postChores;
