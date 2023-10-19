const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
})
