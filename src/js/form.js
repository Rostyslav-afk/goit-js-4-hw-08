const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
});
