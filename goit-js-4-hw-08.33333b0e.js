const t=document.querySelector("#bookmarkInput"),e=document.querySelector("#addBookmarkBtn"),n=document.querySelector("#bookmarkList");let a=JSON.parse(localStorage.getItem("url"))||[];const u=function(){n.innerHTML=a.map((t,e)=>`
        <li class="bookmark-item">
          <a href="${t}" target="_blank" class="bookmark-link">${t}</a>
          <button type="button" data-index="${e}" class="delete-btn">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
          <button type="button" data-index="${e}" class="edit-btn">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
        </li>`).join("")},o=function(){localStorage.setItem("url",JSON.stringify(a)),u()};e.addEventListener("click",()=>{let e=t.value.trim();e.length>=12&&(a.push(e),t.value="",o())}),n.addEventListener("click",t=>{if("BUTTON"!==t.target.nodeName)return;let e=t.target.dataset.index;if(t.target.classList.contains("edit-btn")){let t=prompt("Введіть нове посилання:",a[e]);t&&t.trim().length>=12&&(a[e]=t.trim(),o())}t.target.classList.contains("delete-btn")&&(a.splice(e,1),o())}),u();
//# sourceMappingURL=goit-js-4-hw-08.33333b0e.js.map
