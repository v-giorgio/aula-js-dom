const showList = (content) => {
  return `
        <tr class="new-tr-${content.id}">
            <td>${content.title}</td>
            <td>${content.description}</td>
        </tr>
        `;
};

export default showList;
