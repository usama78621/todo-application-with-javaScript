
const from = document.querySelector('.grocery-form');
const addBtn = document.querySelector('.submit');
const alert = document.querySelector('.alert');
const list = document.querySelector('.grocery-list');
const container = document.querySelector('.grocery-container');




from.addEventListener('submit',addItem)

function addItem(e){
  e.preventDefault();

  const description = document.querySelector('#Description').value;
const name = document.querySelector('#Name').value;
const palce = document.querySelector('#Location').value;

const expenses ={
  description,
  name,
  palce,
}
  if(description !== "" && name !== "" &&palce !== "" ){
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    element.innerHTML = `<p class="title">${expenses}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
    list.appendChild(element);
    

  } else{
   dispalyalert('Please Add valid value','danger')
  }


}

function dispalyalert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(() => {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 1000);
}















