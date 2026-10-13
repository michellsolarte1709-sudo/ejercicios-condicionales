let bateria = 18;
if (bateria < 20) { 
    console.log(" Bateria baja, conecta el  cargador");
}


let total_compra = 500000;
if (total_compra >= 500000) {
    console.log("Tienes envio gratis");
}


let num = 4;
if (num % 2 == 0) { 
    console.log("El numero es par"); 
}else{
    console.log("El numero es impar");
}


let nota = 4;
if (nota >= 3) {
    console.log("Aprovado");
    }else{
       console.log("Reprobado");
    }


let a = 8;
let b = 5;   
if (a > b){
    console.log("a es mayor");
}else if (b > a){
    console.log("b es mayor");
} else {
    console.log("a y b son iguales");
}



let  temperatura = 25;
if (temperatura < 10){
    console.log ("Hace frio");
} else if (temperatura < 25){
    console.log ("Clima templado");
} else {
    console.log ("Hace calor");
}



let nota100 = 75;
if (nota100 < 0 || nota100 >100) {
    console.log("Nota invalida");
}else if (nota100 >= 90){
    console.log("A");
}else if (nota100 >= 80){
    console.log("B");
}else if (nota100 >= 70){
    console.log("C");
}else if (nota100 >=60){
    console.log("D");
}else {
    console.log ("F");  
}


let edad = 25;
let tiene_entrada = true;
if (edad < 18 ){
    console.log("No puedes entrar");
}else if (tiene_entrada){
        console.log("Bienvenido");
    } else {
        console.log ("Debes comprar una entrada")
    }



    let usuario_correcto = "Admi"
    let contraseña_correcta = "1234"

    let usuario_ingresado = "Admi"
    let contraseña_ingresada = "1234"

    if (usuario_correcto == usuario_ingresado){
        if (contraseña_correcta == contraseña_ingresada){
            console.log("Acceso concedido");
        }else {
            console.log("Contraseña incorrecta");}  
        }else {
            console.log("Usuario no encontrado");
        }
    



    let totalCompra = 120000;
    let esCliente = true;
    
    let descuento = 0;
    let totalFinal = 0;

    if (totalCompra > 100000) {
        if (esCliente){
            descuento = 20;
        }else {
            descuento = 10;
        }
    }else { 
        if (esCliente) {
            descuento = 5;
        }else {
            descuento = 0;
        }
    }
 totalFinal = totalCompra - (totalCompra * descuento / 100);
  console.log ("Descuento aplicado" + descuento + "%");
  console.log ("Total final a pagar" + totalFinal);
    