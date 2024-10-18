const grid = document.querySelector(".grid");

// console.log(grid);
let response;
const file = "./data/skillsData.json";
fetch(file)
  .then((res) => {
      return res.json();
  })
  .then((res) => {
    response = res;
    handler(response);
});
let htmlContent=''
function handler(value) {
    let data = value;
    grid.style.gridTemplateColumns = `repeat(${data.length}, 1fr)`;
  
    for (const [index, dataValue] of data.entries()) {
      const isLastItem = index === data.length - 1; // Check if this is the last item
      let thisValue = `
          <div class="boxs" ${isLastItem ? 'id="last-box"' : ''}>
              <img src="${dataValue.imgSrc}" alt="${dataValue.imgAlt}" class="img">
              <div class="title">${dataValue.title}<br/>(${dataValue.time})</div>
              <div class="disc">
                  ${dataValue.disc}
              </div>
          </div>
        `;
        htmlContent+=thisValue

    // console.log(htmlContent)
    
    grid.innerHTML=htmlContent
  }
}
