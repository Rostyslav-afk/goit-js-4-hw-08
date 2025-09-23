const bookmarkInput = document.querySelector("#bookmarkInput");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

let zakladkyList = JSON.parse(localStorage.getItem("url")) || [];

const loadZakladky = function () {
  bookmarkList.innerHTML = zakladkyList
    .map((url, index) => {
      return `
        <li class="bookmark-item">
          <a href="${url}" target="_blank" class="bookmark-link">${url}</a>
          <button type="button" data-index="${index}" class="delete-btn">Видалити</button>
          <button type="button" data-index="${index}" class="edit-btn">Редагувати</button>
        </li>`;
    })
    .join("");
};

const saveZakladky = function () {
  localStorage.setItem("url", JSON.stringify(zakladkyList));
  loadZakladky();
};

addBookmarkBtn.addEventListener("click", () => {
  const bookmarkInputValue = bookmarkInput.value.trim();

  if (bookmarkInputValue.length >= 12) {
    zakladkyList.push(bookmarkInputValue);
    bookmarkInput.value = "";
    saveZakladky();
  } else {
    alert("Це не посилання!")
  }
});

bookmarkList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") return;

  const index = event.target.dataset.index;

  if (event.target.classList.contains("edit-btn")) {
    const newUrl = prompt("Введіть нове посилання:", zakladkyList[index]);
    if (newUrl && newUrl.trim().length >= 12) {
      zakladkyList[index] = newUrl.trim();
      saveZakladky();
    }
  }

  if (event.target.classList.contains("delete-btn")) {
    zakladkyList.splice(index, 1);
    saveZakladky();
  }
});

loadZakladky();