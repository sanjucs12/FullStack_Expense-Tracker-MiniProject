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
    .post(
      "https://crudcrud.com/api/716dbb2aa61244669f49989da8156f24/expenses",
      obj
    )
    .then((response) => {
      console.log(response.data);
      display(response.data);
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
      .delete(
        `https://crudcrud.com/api/716dbb2aa61244669f49989da8156f24/expenses/${obj._id}`
      )
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
      .delete(
        `https://crudcrud.com/api/716dbb2aa61244669f49989da8156f24/expenses/${obj._id}`
      )
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
    .get("https://crudcrud.com/api/716dbb2aa61244669f49989da8156f24/expenses")
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
