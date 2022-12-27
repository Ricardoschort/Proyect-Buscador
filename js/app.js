
// variables
const result = document.querySelector("#resultado");
const maxYear = new Date().getFullYear();
const minYear =maxYear - 10;
const yearOpcion  = document.querySelector("#year");





// eventos

document.addEventListener("DOMContentLoaded", ()=>{
  loadContent();
  loadYear();
})

// Funciones


function loadContent(){
  autos.forEach(element => {
    const search = document.createElement("P");
    const {marca,modelo,year,precio,puertas,transmision,color} = element;
    search.textContent = `
     Marca: ${marca}, Modelo: ${modelo}, Año: ${year}, Precio: ${precio}, Puertas: ${puertas}, Color: ${color}, Trasmision: ${transmision},
    `;
    
    result.appendChild(search)
  });
}

function loadYear(){
  for (let i = maxYear; i >= minYear;  i--) {
    const opcion = document.createElement("option")
    opcion.value = i
    opcion.textContent = i
    
    yearOpcion.appendChild(opcion)
  }
}