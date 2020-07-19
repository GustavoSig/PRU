
let viajando = destino => `viajando a la ciudad de : ${destino}`;
let viaje;
viaje = viajando('Paris');
console.log(viaje);

function saludar(nombre){
  console.log('bienvenido '+ nombre);
}
saludar('Gustavo');
saludar('jose');
saludar('kot');

const cliente = function(nombreCliente){
    console.log('mostrando datos del cliente: '+ nombreCliente);
}
cliente('juan');
cliente('Gustavo');
// esto es igual a
let cliente1=nombreCliente=>console.log(`mostrando datos del cliente: ${nombreCliente}`);
cliente1('das');



function actividad (nombre,actividad){
    console.log(`la persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividad('gustavo','Aprender Javascript');
function actividadDefaukt (nombre='walter white',actividad='enseñar quimica'){
  console.log(`la persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividadDefaukt();

const aprendiendoJS={
  version:{
    
  }
}


