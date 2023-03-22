let expenselist=document.getElementById('expenselist')

function savetolocal(event){
  event.preventDefault();
  const description=document.getElementById('description').value;
  const amount=document.getElementById('amount').value;
  const obj={
    description:description,
    amount:amount
  }
  localStorage.setItem(description,JSON.stringify(obj));
 display(obj)   
}

function display(obj){

  //CREATE LI ELEMENT
 let li=document.createElement('li');
 li.appendChild(document.createTextNode(`${obj.description}------${obj.amount}`))

//creating delete button
let deletebtn=document.createElement('button');
deletebtn.appendChild(document.createTextNode('Delete'))
deletebtn.onclick=()=>{
 localStorage.removeItem(obj.description);
 expenselist.removeChild(li);
}

//adding delete button to li
li.appendChild(deletebtn)

//creating edit button
let editbtn=document.createElement('button');
editbtn.appendChild(document.createTextNode('Edit'))
editbtn.onclick=()=>{
  localStorage.removeItem(obj.description);
  expenselist.removeChild(li);
  document.getElementById('description').value=obj.description;
  document.getElementById('amount').value=obj.amount;
}

//adding edit button to li
li.appendChild(editbtn)


//Append li element to list
expenselist.appendChild(li)
}