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

  //CREATE LI ELEMENT
 let li=document.createElement('li');
 li.appendChild(document.createTextNode(description+amount))

   //creating delete button
   let deletebtn=document.createElement('button');
   deletebtn.appendChild(document.createTextNode('Delete'))
   deletebtn.onclick=()=>{
    localStorage.removeItem(description);
    expenselist.removeChild(li);
   }
   //adding delete button to li

   li.appendChild(deletebtn)


 //Append li element to list
 expenselist.appendChild(li)
}