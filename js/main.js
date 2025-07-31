const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody")[0];
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");
const contadorProductos = document.getElementById("contadorProductos");

let contador = 0; // contador inicia en cero
let totalEnProductos = 0;
let costoTotal = 0;


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
        contador++; // el ++ es para cada que unproducto se agregue en la columna # se sume 1
        let precio = getPrecio(); // establece para precio el valor random de la función precio de la linea 34
        let row = `<tr> 
                        <td>${contador}</td>
                        <td>${txtName.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>${precio}</td>
                    </tr>`; // se crea la estructura de la tabla linea por linea de como ingresara los datos

        cuerpoTabla.insertAdjacentHTML("beforeend", row); // inserta la columna creada el linea 63 al final de la lista
        contadorProductos.innerText=contador;// agrega al campo contador de productos el valor que esta en contador linea 61
        totalEnProductos += Number(txtNumber.value); // guarda en totalEnProductos el valor númerico de txtNumber
        productosTotal.innerText = totalEnProductos; // guarda en productosTotal el valor de totalEnProductos linea72
        costoTotal += precio * Number(txtNumber.value); // Establece que costoTotal es el acumulado de precio*numerodeproductos
        precioTotal.innerText = new Intl.NumberFormat("es-MX", 
                    { style: "currency", currency: "MXN" }).format(costoTotal);//Ingresa en precioTotal el valor de costoTotal con formato de $$
        txtName.value="";// Limpia el valor de txtName
        txtNumber.value=""; // Limpia el valor de txtNumber
        txtName.focus(); // Coloca el cursor en la casilla txtName;
    }
});