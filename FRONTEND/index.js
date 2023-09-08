let expenselist = document.getElementById("expenselist");

function savetolocal(event) {
  event.preventDefault();
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const obj = {
    description: description,
    amount: amount,
  };
  // localStorage.setItem(description, JSON.stringify(obj));
  axios
    .post("http://localhost:3000/expenses/add-expense", obj)
    .then((response) => {
      console.log(response);
      display(response.data.newExpense);
    })
    .catch((err) => {
      console.log(err);
    });
}

function display(obj) {
  //CREATE LI ELEMENT
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`${obj.description}------${obj.amount}`)
  );

  //creating delete button
  let deletebtn = document.createElement("button");
  deletebtn.appendChild(document.createTextNode("Delete"));
  deletebtn.onclick = () => {
    // localStorage.removeItem(obj.description);
    axios
      .delete(`http://localhost:3000/expenses/delete-expense/${obj.id}`)
      .then((response) => {
        console.log(response);
        expenselist.removeChild(li);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //creating edit button
  let editbtn = document.createElement("button");
  editbtn.appendChild(document.createTextNode("Edit"));
  editbtn.onclick = () => {
    // localStorage.removeItem(obj.description);
    axios
      .delete(`http://localhost:3000/expenses/edit-expense/${obj.id}`)
      .then((res) => {
        console.log(res);
        expenselist.removeChild(li);
        document.getElementById("description").value = obj.description;
        document.getElementById("amount").value = obj.amount;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  li.appendChild(editbtn); //adding edit button to li
  li.appendChild(deletebtn); //adding delete button to li
  expenselist.appendChild(li); //Append li element to list
}

//DOM CONTENT LOADED

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/expenses/get-expenses")
    .then((res) => {
      console.log(res.data);
      res.data.map((expense) => {
        display(expense);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
