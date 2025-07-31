const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody")[0];
//const productosTotal
//const precioTotal
let contador = 0; // c ontador inicia en cero


function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }

    if (isNaN(txtNumber.value)){
        return false;
    }

    if (Number(txtNumber.value)<=0){
        return false;
    }

    return true;
}

function getPrecio(){
    return Math.round(Math.random() * 10000) /100;
} // get precio

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // previene el default del boton
    let isValid = true;
    alertValidacionesTexto.innerHTML="";// Limpia la alerta
    alertValidaciones.style.display="none"; // Limpia el fondo de la alerta
    txtName.style.border="";// limpia el borde rojo del campo name cuando hay alerta
    txtNumber.style.border="";// limpia el borde rojo del campo Nymber cuando hay alerta

    if(txtName.value.length<3){ //Validaciones para Nombre no admitido
        txtName.style.border="thin red solid"; // se pone el borde rojo cuando no admite Nombre
        alertValidacionesTexto.innerHTML="<strong>El nombre del producto no es válido</strong>"; // Alerta
        alertValidaciones.style.display="block"; // Fondo de alerta del div
        isValid = false;
    }

    if(! validarCantidad()){ // Valdiaciones para cantidad no admitida
        txtNumber.style.border="thin red solid"; // se pone el borde rojo cuando no admite Number
        alertValidacionesTexto.innerHTML +="<strong>La cantidad no es correcta</strong>"; // Alerta
        alertValidaciones.style.display="block"; // Alerta
        isValid = false;
    }

    if(isValid){
        contador++;
        let precio = getPrecio();
        let row = `<tr>
                        <td>${contador}</td>
                        <td>${txtName.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>${precio}</td>
                    </tr>`

        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        txtName.value="";
        txtNumber.value="";
        txtName.focus();


    }
});

