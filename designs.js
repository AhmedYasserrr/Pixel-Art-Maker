var table =document.getElementById('pixelCanvas');//selecting table from html
var form =document.getElementById('sizePicker');//selecting form from html

function makeGrid(){
    var width =document.getElementById('inputWidth').value;//selecting value of width
   var height =document.getElementById('inputHeight').value;//selecting value of height
   table.innerHTML=``
/* creating rows  */
for(var i=0; i<height;i++)
{   
    let row=document.createElement(`tr`);
    table.appendChild(row);
/* creating columns  */
    for(var j=0;j<width;j++)
    {
       let column =document.createElement(`td`);
       row.appendChild(column);
    } 
  }
}
/* submiting your information about width,hight and color and excute it*/
form.addEventListener(`submit`,function(e){
     makeGrid();
    e.preventDefault();
});
/* painting pixels by clicking */
table.addEventListener(`click`, function(e) {
    if (e.target.nodeName.toLowerCase() === "td") {
      var color = document.getElementById('colorPicker').value;//selecting value of color
      e.target.style.backgroundColor = color;//changing color of pixel
    }});
    
