const deleteChore = async (id) => {
  const response = await fetch(`http://localhost:3000/chores/${id}`, {
    method: "DELETE",
  });
  const content = await response.json();

  return content;
};

export default deleteChore;
