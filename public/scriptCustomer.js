function mostrarClientes(){

    fetch('http://localhost:5000/customers').
    then(res => res.json())
    .then(res =>{
        res.forEach(element => {
            var row = document.createElement('tr');
            var col = document.createElement('td');
            col.appendChild(document.createTextNode(element.cedula));
            row.appendChild(col)
            document.getElementById('tbody').appendChild(row);
    
    
            col = document.createElement('td');
            col.appendChild(document.createTextNode(element.name));
            row.appendChild(col);
            document.getElementById('tbody').appendChild(row);
    
            col = document.createElement('td');
            col.appendChild(document.createTextNode(element.lastname));
            row.appendChild(col);
            document.getElementById('tbody').appendChild(row);
    
            col = document.createElement('td');
            col.appendChild(document.createTextNode(element.phone));
            row.appendChild(col);
            document.getElementById('tbody').appendChild(row);
    
            
    
            //var select = document.createElement('select');
            var option = document.createElement('option');
            var value = document.createElement('value');
            value.appendChild(document.createTextNode(element.name+"-"));
            value.appendChild(document.createTextNode(element.lastname));
            option.appendChild(value)
            document.getElementById('form-select').appendChild(option);
    
    
            
            
        });
    })
    .catch (err =>console.error());
    }


var tablaCustomers = [{cedula:"12134587",name:"Marcos",lastname:"Suarez",phone:"12548792"},
    ];
    window.onload = cargarEventos;


function cargarEventos(){
    document.getElementById("mostrar-tabla-clientes").addEventListener("click",mostrarTablaClientes,false);
    document.getElementById("newCustomer").addEventListener("submit",nuevoCliente,false);
}

function mostrarTablaClientes(){

    var cuaerpoTabla =  document.getElementById("clientesTabla");
     var tablaLlena ="";
     for (var index = 0; index < tablaCustomers.length; index++) {
         tablaLlena += "<tr><td>"+ tablaCustomers[index].cedula+ "<td><td>"+tablaCustomers[index].name+"<td><td>"+tablaCustomers[index].lastname+"<td><td>"+tablaCustomers[index].phone+"<td><tr>" ;
     } 
    cuaerpoTabla.innerHTML = tablaLlena;
  
  }
  
  function nuevoCliente(event){
      event.preventDefault();
      var codeUser = document.getElementById("cedula").value;
      var nameUser = document.getElementById("name").value;
      var lastnameUser = document.getElementById("lastName").value;
      var phoneUser = document.getElementById("phone").value;
  
      var nuevoCustomer={cedula:codeUser,name:nameUser,lastname:lastnameUser,phone:phoneUser};
     tablaCustomers.push(nuevoCustomer); 
     fetch('http://localhost:5000/customers',{
         method:"POST",
         body: JSON.stringify(nuevoCustomer),
         headers:{"Content-type": "application/json; charset=UTF-8"} 
  
  }).then(res=>res.json())
  .then(data=>console.log(data))
  }


  function eliminarCliente(){
    fetch('http://localhost:5000/customers' + cedula, {
     method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    }
    


