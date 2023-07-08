

function inicio () {

let nombre
let salud 
let energia
let edad 

nombre = prompt ("Ingresa el nombre de tu mascota");
console.log(nombre);
salud = 100;
energia = 30;
edad = 1;
console.log ("Su salud es de: " + salud);
console.log ("Su energía es de: " + energia);
console.log ("Su edad es de: " + edad + " día");

const mascotaViva = () => salud > 0 && energia > 0;
//comidas
let comer 
let amor
while(mascotaViva()){
console.log ("----------------------")
let accion = prompt("Escribi 'comida' si queres dale energía o 'amor' si queres mejorar su salud").toLowerCase();
if (accion == "comida") {
comer = prompt ("¿Qué queres darle de comer? Elegi una de las copciones que estan en la pantalla y escribilo").toLowerCase()
    if (comer == "zanahoria") {
energia = energia + 10; 
console.log ("le diste zanahoria, buena elección!")
console.log ("Ahora la energía de " + nombre + " es de: " + energia);
console.log ("Y la salud de " + nombre +" es de: " + salud);
edad += 1;
console.log (nombre + " tiene " + edad + " días de vida")
}
    else if (comer == "hamburguesa") {
    energia = energia + 80;
    salud = salud - 30;
    console.log ("Le diste una hamburguesa, eso da mucha energia pero no es muy sano... le sube el colesterol a " + nombre)
    console.log ("Ahora la energía de " + nombre + " es de: " + energia);
    console.log ("Y la salud de " + nombre +" es de: " + salud);
    edad += 1;
    console.log (nombre + " tiene " + edad + " días de vida")
}
    else if (comer == "sandia con vino") {
        energia = energia - 100;
        salud = salud - 100;
        console.log ("Le diste sandía con vino, que estas mal de la cabeza???! SOS UN ASESINO! ESTOY LLAMANDO A LA POLICIA!")
        console.log ("Ahora la energía de " + nombre + " es de: " + energia);
        console.log ("Y la salud de " + nombre +" es de: " + salud);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
    }
    else if (comer == "pepino") {
        energia = energia + 10;
        console.log ("Le diste pepino, buena elección es una comida muy sana, pero no llena mucho")
        console.log ("Ahora la energía de " + nombre + " es de: " + energia);
        console.log ("Y la salud de " + nombre +" es de: " + salud);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
    }
    else if (comer == "helado") {
        energia = energia + 30;
        salud = salud -10;
        console.log ("Le diste helado, que rico pero las mascotas no pueden comer eso, por lo que le da diabetes de mascotas")
        console.log ("Ahora la energía de " + nombre + " es de: " + energia);
        console.log ("Y la salud de " + nombre +" es de: " + salud);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
        
    }
    else {
        alert("el dato ingresado es invalido")
    }
}
else if (accion == "amor") {
    amor = prompt ("¿De que manera le queres dar amor? elegí una de las opciones de la pantalla y escribila acá").toLowerCase()
    if ( amor == "abrazo" ) {
        salud = salud + 20;
        energia = energia - 5;
        console.log ("Le diste un abrazo a tu mascota, " + nombre + " es muy feliz");
        console.log ("Ahora la salud de " + nombre +" es de: " + salud);
        console.log ("Y la energía de " + nombre + " es de: " + energia);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
    }
    else if (amor == "leerle un cuento") {
        salud = salud - 20;
        energia = energia - 10;
        console.log ("Le leiste un cuento a tu mascota, tu mascota no te escucho y " + nombre + " se puso a jugar, se golpeó la cabeza corriendo");
        console.log ("Ahora la salud de " + nombre +" es de: " + salud);
        console.log ("Y la energía de " + nombre + " es de: " + energia);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
    }
    else if (amor == "palmada en la espalda") {
        salud = salud - 20;
        energia = energia - 5;
        console.log ("Le diste una palmada en la espalda a tu mascota, esa frialdad le destruye el corazon a " + nombre);
        console.log ("Ahora la salud de " + nombre +" es de: " + salud);
        console.log ("Y la energía de " + nombre + " es de: " + energia);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
    }
    else if (amor == "beso") {
        salud = salud + 40;
        energia = energia - 1;
        console.log ("Le diste un beso a tu mascota, " + nombre + " es muy feliz");
        console.log ("Ahora la salud de " + nombre +" es de: " + salud);
        console.log ("Y la energía de " + nombre + " es de: " + energia);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
    }
    else if (amor == "jugar") {
        salud = salud + 40;
        energia = energia - 20;
        console.log ("Jugaste con tu mascota, " + nombre + " es muy feliz pero gasto mucha energía");
        console.log ("Ahora la salud de " + nombre +" es de: " + salud);
        console.log ("Y la energía de " + nombre + " es de: " + energia);
        edad += 1;
        console.log (nombre + " tiene " + edad + " días de vida")
    }
    else  {
        alert("el dato ingresado es invalido")
    }
}
else {
    alert("el dato ingresado es invalido")
}
}

console.log ("Tu mascota esta MUERTA")
alert("Tu mascota murió")

}