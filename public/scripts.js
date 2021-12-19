function mostrarProductos(){

fetch('http://localhost:5000/products').
then(res => res.json())
.then(res =>{
    res.forEach(element => {
        var row = document.createElement('tr');
        var col = document.createElement('td');
        col.appendChild(document.createTextNode(element.code));
        row.appendChild(col)
        document.getElementById('tbody').appendChild(row);


        col = document.createElement('td');
        col.appendChild(document.createTextNode(element.name));
        row.appendChild(col);
        document.getElementById('tbody').appendChild(row);

        col = document.createElement('td');
        col.appendChild(document.createTextNode(element.description));
        row.appendChild(col);
        document.getElementById('tbody').appendChild(row);

        col = document.createElement('td');
        col.appendChild(document.createTextNode(element.price));
        row.appendChild(col);
        document.getElementById('tbody').appendChild(row);

        col = document.createElement('td');
        col.appendChild(document.createTextNode(element.stock));
        row.appendChild(col);
        document.getElementById('tbody').appendChild(row);

        //var select = document.createElement('select');
        var option = document.createElement('option');
        var value = document.createElement('value');
        value.appendChild(document.createTextNode(element.name+"-"));
        value.appendChild(document.createTextNode(element.description));
        option.appendChild(value)
        document.getElementById('form-select').appendChild(option);
        

        
        
    });
})
.catch (err =>console.error());
}

    var tablaProducts = [{code:"15",name:"Carne",description:"pez",price:3200,stock:1},
    ];
    window.onload = cargarEventos;


function cargarEventos(){
    document.getElementById("mostrar-tabla-productos").addEventListener("click",mostrarTablaProductos,false);
    document.getElementById("newProduct").addEventListener("submit",nuevoProducto,false);
}

function mostrarTablaProductos(){

  var cuaerpoTabla =  document.getElementById("productosTabla");
   var tablaLlena ="";
   for (var index = 0; index < tablaProducts.length; index++) {
       tablaLlena += "<tr><td>"+ tablaProducts[index].code+ "<td><td>"+tablaProducts[index].name+"<td><td>"+tablaProducts[index].description+"<td><td>"+tablaProducts[index].price+"<td><td>" +tablaProducts[index].stock+"</td></tr>";
   } 
  cuaerpoTabla.innerHTML = tablaLlena;

}

function nuevoProducto(event){
    event.preventDefault();
    var codeUser = document.getElementById("code").value;
    var nameUser = document.getElementById("name").value;
    var descriptionUser = document.getElementById("description").value;
    var priceUser = document.getElementById("price").value;
    var stockUser = document.getElementById("stock").value;

    var nuevoProducto={code:codeUser,name:nameUser,description:descriptionUser,price:priceUser,stock:stockUser};
   tablaProducts.push(nuevoProducto); 
   fetch('http://localhost:5000/products',{
       method:"POST",
       body: JSON.stringify(nuevoProducto),
       headers:{"Content-type": "application/json; charset=UTF-8"} 

}).then(res=>res.json())
.then(data=>console.log(data))
}














