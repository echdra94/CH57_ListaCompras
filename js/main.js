const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }

    if (isNaN(txtNumber.value)){
        return false;
    }

    if (Number(txtNumber.vale)<=0){
        return false;
    }

    return true;
}

//const tablaListaCompras
//const productosTotal
//const precioTotal

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // previene el default del boton
    alertValidacionesTexto.innerHTML="";// Limpia la alerta
    alertValidaciones.style.display="none"; // Limpia el fondo de la alerta
    txtName.style.border="";// limpia el borde rojo del campo name cuando hay alerta
    txtNumber.style.border="";// limpia el borde rojo del campo Nymber cuando hay alerta

    if(txtName.value.length<3){ //Validaciones para Nombre no admitido
        txtName.style.border="thin red solid"; // se pone el borde rojo cuando no admite Nombre
        alertValidacionesTexto.innerHTML="<strong>El nombre del producto no es válido</strong>"; // Alerta
        alertValidaciones.style.display="block"; // Fondo de alerta del div
    }

    if(! validarCantidad()){ // Valdiaciones para cantidad no admitida
        txtNumber.style.border="thin red solid"; // se pone el borde rojo cuando no admite Number
        alertValidacionesTexto.innerHTML +="<strong>La cantidad no es correcta</strong>"; // Alerta
        alertValidaciones.style.display="block"; // Alerta
    }
});

