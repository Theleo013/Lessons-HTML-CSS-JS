let data = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const tBody = document.querySelector("#fechData tbody");

    data.forEach((item) => {
      let list = document.createElement("tr");

      const checkClass = item.completed ? "" : "incomplete";

      list.innerHTML = `
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td class="${checkClass}">${
        item.completed ? "Complated" : "Not Complated"
      }</td>
              `;

      tBody.appendChild(list);
    });
  })
  .catch((err) => console.error("Bir xeta bas verdi!", err));
