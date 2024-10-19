const allProjects = document.querySelector(".allProjects");

// console.log(grid);
let response;
const file = "./data//projectsData.json";
fetch(file)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    response = res;
    handler(response);
  });
let htmlContent = "";
function handler(value) {
  let data = value;

  for (const dataValue of data) {
    let thisValue = `
        <div class="project">
            <img src="${dataValue.imgSrc}" alt="" class="imgLogo" />
            <h3 class="title">${dataValue.titleText}</h3>
            <strong><a href="${dataValue.link}" class="link">View-Project</a></strong>
        </div>
        `;
    htmlContent += thisValue;

    allProjects.innerHTML = htmlContent;
  }
}
