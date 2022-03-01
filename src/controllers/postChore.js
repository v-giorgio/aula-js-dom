const postChores = async (title, description) => {
  const response = await fetch("http://localhost:3000/chores", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: `${title}`, description: `${description}` }),
  });
  const content = await response.json();

  return content;
};

export default postChores;
