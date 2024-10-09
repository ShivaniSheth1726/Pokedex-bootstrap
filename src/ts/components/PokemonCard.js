// === DOM Selection ===
// const dataRow = document.querySelector("[data-row]");
// render card in html 
// export default function (data) {
//   const div = document.createElement("div");
//   div.classList.add("col");
//   div.innerHTML = `<div class="card">
//         <img
//             src="${data.image}"
//             class="card-img-top"
//             alt="${data.name}"
//         />
//         <div class="card-body">
//             <h5 class="card-title">${data.name}</h5>
//             <p class="card-text">${data.description}</p>
//             <a href="${data.link}" class="btn btn-warning">Visit</a>
//         </div>
//         </div>`;
//   // dataRow.appendChild(div);
// }

export default function (data) {
  const {image,name,description,link}=data; //object destructuring 
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<div class="card">
        <img
            src="${image}"
            class="card-img-top"
            alt="${name}"
        />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <a href="${link}" class="btn btn-warning">Visit</a>
        </div>
        </div>
        `;
  return div;
}