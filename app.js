

const toggleBtn = document.querySelector('.toggle');
const colseBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector(".sidebar");
toggleBtn.addEventListener('click',()=>{
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    } else{
        sidebar.classList.add('show-sidebar')

    }
})
colseBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
