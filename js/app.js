
// variables

const result = document.querySelector(".container-card");
const maxYear = new Date().getFullYear();
const minYear =maxYear - 10;
const yearOpcion  = document.querySelector("#year");

const imgErr = document.querySelector(".container-img");


const mark = document.querySelector("#marca");
const year = document.querySelector("#year");
const priceMin = document.querySelector("#minimo");
const priceMax = document.querySelector("#maximo");
const doors = document.querySelector("#puertas");
const color = document.querySelector("#color");
const transmission = document.querySelector("#transmision")



// eventos

document.addEventListener("DOMContentLoaded", ()=>{
  loadContent(autos);
  loadYear();
})

mark.addEventListener("change", e =>{
  dataSearch.marca = e.target.value;
  filterCar();
});

year.addEventListener("change",e=>{
  dataSearch.año = parseInt(e.target.value);
  filterCar();
});

priceMin.addEventListener("change",e=>{
  dataSearch.precioMin = parseInt(e.target.value);
  filterCar();
});

priceMax.addEventListener("change",e=>{
  dataSearch.precioMax = parseInt(e.target.value);
  filterCar();
});

doors.addEventListener("change",e=>{
  dataSearch.puertas = parseInt(e.target.value);
  filterCar();
});

transmission.addEventListener("change", e=>{
  dataSearch.transmision = e.target.value;
  filterCar()
});

color.addEventListener("change", e =>{
  dataSearch.color = e.target.value
  filterCar();
});


// objecto de la busqueda
const dataSearch = {
  marca: "",
  año : "",
  precioMin: "",
  precioMax: "",
  puertas: "",
  transmision: "",
  color:""
}

// Funciones


function loadContent(autos){
  clearContent();
  autos.forEach(element => {
    const search = document.createElement("DIV");
    search.classList.add("tarjet");
    
    const {marca,modelo,year,precio,puertas,transmision,color,img} = element;
    search.innerHTML = `
    <h2 class="title-card">${marca} - ${modelo}</h2>
    <div class="body-card"> <img src="${img}" alt="carro">
        <p>Año: ${year}</p>
        <hr>
        <p>Puertas: ${puertas}</p>
        <hr>
        <p>Color: ${color}</p>
        <hr>
        <p>Transmision: ${transmision}</p>
        <hr>
        <p>$${precio}</p>
    </div>
    <div class="foo-card">
    <p>Más información</p>
    </div>

    `;
 
    result.appendChild(search)

    
    
  });
}

function clearContent(){
  while(result.firstChild)
  result.removeChild(result.firstChild);
}


function loadYear(){
  for (let i = maxYear; i >= minYear;  i--) {
    const opcion = document.createElement("option")
    opcion.value = i
    opcion.textContent = i
    
    yearOpcion.appendChild(opcion)
  }
}

function filterCar (){
  const result = autos.filter(filterMark).filter(filterYear).filter(filterPriceMin).filter(filterPriceMax).filter(filterDoors).filter(filterTrasm).filter(filterColor);
  if (result.length){
    loadContent(result);
    imgErr.style.display ="none"
  }else{
    loadContent(result)
    imgErr.style.display ="block"
    
  }
}


function filterMark(autos){
  if (dataSearch.marca){
    return autos.marca === dataSearch.marca
  }
  return autos
}

function filterYear(autos){
  if (dataSearch.año){
    return autos.year === dataSearch.año
  }
  return autos
}

function filterPriceMin(autos){
  if (dataSearch.precioMin){
    return autos.precio >= dataSearch.precioMin;
  }
  return autos
}
function filterPriceMax(autos){
  if (dataSearch.precioMax){
    return autos.precio <= dataSearch.precioMax;
  }
  return autos
}

function filterDoors(autos){
  if ( dataSearch.puertas){
    return autos.puertas === dataSearch.puertas
  }
  return autos
}

function filterTrasm(autos){
  if(dataSearch.transmision){
    return autos.transmision === dataSearch.transmision
  }
  return autos
}

function filterColor(autos){
  if(dataSearch.color){
    return autos.color === dataSearch.color
  }
  return autos
}