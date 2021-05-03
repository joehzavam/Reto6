alert("ABRIR CONSOLA")
let array = [];
let dato = document.getElementById("dato");
let boton = document.getElementById("boton");

boton.addEventListener("click",function(){
    let txtingresado = dato.value;
    if(txtingresado === ""){
        alert("INGRESE DATOS POR FAVOR")
    }else{
        array.push(dato.value);
        console.log(array);
        dato.value = "";
    }
    dato.focus();
});





