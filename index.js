function savetolocal(event){
  event.preventDefault();
  const description=document.getElementById('description').value;
  const amount=document.getElementById('amount').value;
  const obj={
    description:description,
    amount:amount
  }
  localStorage.setItem(description,JSON.stringify(obj))
}