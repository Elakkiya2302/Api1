var res = fetch("https://api.thecatapi.com/v1/images/search?limit=10");
res.then((data)=>{
    return data.json()
}).then((data1)=> foo(data1)).catch((error)=>console.log(error));

var container = document.createElement("div");
container.className ="container";

var row = document.createElement("div");
row.className = "row";
 
function foo(data1){
    console.log(data1);
     for(var i=0;i<data1.length;i++){
    var col = document.createElement("div");
    col.className = "col-lg-4";
    col.innerHTML=`<div class="card-group">
  <div class="card">
    <img src="${data1[0].url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Catty</h5>
      <p class="card-text">${data1[0].height}</p>
      <p class="card-text">${data1[0].width}</p>
          <img src="${data1[1].url}" class="card-img-top" alt="...">      
      <p class="card-text">${data1[1].width}</p>
      <p class="card-text">${data1[1].height}</p>

    </div>
  </div>
`

  
  row.append(col);
  container.append(row);
  document.body.append(container);   
}
}


    

