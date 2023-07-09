
//inicio función
function inicio() {

    //Declaro variables

    let nombre
    let salud
    let energia
    let edad
    let comer
    let amor
    const mascotaViva = () => salud > 0 && energia > 0;

    //datos de la mascota
    nombre = prompt("Ingresá el nombre de tu mascota");
    console.log("¡Bienvenidx! Ahora tenés una mascota que se llama " + nombre + ". Cuidala dándole comida y amor, elegí bien ya que " + nombre + ", al final de cada día, pierde 20 puntos de salud y 20 puntos de energía.")
    salud = 100;
    energia = 80;
    edad = 1;
    console.log("Su salud es de: " + salud);
    console.log("Su energía es de: " + energia);
    console.log("Su edad es de: " + edad + " día");
    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...")
    energia = energia - 20;
    salud = salud - 20;
    console.log("Perdiendo salud... Perdiendo energía...")

//si la mascota esta viva se ejecuta el while

    while (mascotaViva()) {
        console.log("----------------------")
        console.log("¡Hoy comienza un nuevo día!")
        console.log("Hoy la salud de " + nombre + " es de " + salud)
        console.log("Y su energía es de " + energia)
        let accion = prompt("Escribí 'comida' si querés darle energía o 'amor' si querés mejorar su salud.").toLowerCase();
            //comidas
        if (accion == "comida") {
            comer = prompt("¿Qué querés darle de comer? Elegí una de las opciones que están en la pantalla y escribila.").toLowerCase()
            if (comer == "zanahoria") {
                energia = energia + 30;
                console.log("Le diste zanahoria, ¡buena elección!");
                console.log("Y la salud de " + nombre + " es de: " + salud);
                console.log("Ahora la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...")
                    console.log("Perdiendo salud... Perdiendo energía...")
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }

            else if (comer == "hamburguesa") {
                energia = energia + 80;
                salud = salud - 30;
                console.log("Le diste una hamburguesa, eso da mucha energía pero no es muy sano... le sube el colesterol a " + nombre);
                console.log("Y la salud de " + nombre + " es de: " + salud);
                console.log("Ahora la energía de " + nombre + " es de: " + energia);

                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else if (comer == "sandia con vino") {
                energia = 0;
                salud = 0;
                console.log("Le diste sandía con vino, ¡¿¿¿qué estás mal de la cabeza???! ¡SOS UN ASESINO! ¡ESTOY LLAMANDO A LA POLICÍA!");
                console.log("Y la salud de " + nombre + " es de: " + salud);
                console.log("Ahora la energía de " + nombre + " es de: " + energia);
            }
            else if (comer == "pepino") {
                energia = energia + 20;
                console.log("Le diste pepino, buena elección, es una comida muy sana pero no llena mucho.");
                console.log("Y la salud de " + nombre + " es de: " + salud);
                console.log("Ahora la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else if (comer == "helado") {
                energia = energia + 40;
                salud = salud - 10;
                console.log("Le diste helado, ¡qué rico! Pero las mascotas no pueden comer eso, por lo que le da diabetes de mascotas");
                console.log("Y la salud de " + nombre + " es de: " + salud);
                console.log("Ahora la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else {
                alert("el dato ingresado es inválido.")
            }
        }
        //amor
        else if (accion == "amor") {
            amor = prompt("¿De qué manera le querés dar amor? Elegí una de las opciones de la pantalla y escribila acá").toLowerCase()
            if (amor == "abrazo") {
                salud = salud + 20;
                energia = energia + 5;
                console.log("Le diste un abrazo a tu mascota, " + nombre + " es muy feliz y no solo aumenta su Salud, sino que también su Energía");
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else if (amor == "leerle un cuento") {
                salud = salud - 20;
                energia = energia - 10;
                console.log("Le leíste un cuento a tu mascota, tu mascota no te escuchó y " + nombre + " se puso a jugar, se golpeó la cabeza corriendo. Baja su salud y su energía.");
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else if (amor == "palmada en la espalda") {
                salud = salud - 20;
                energia = energia - 5;
                console.log("Le diste una palmada en la espalda a tu mascota, esa frialdad le destruye el corazón a " + nombre + ". Baja su salud y su energía.");
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else if (amor == "beso") {
                salud = salud + 40;
                console.log("Le diste un beso a tu mascota, " + nombre + " es muy feliz");
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else if (amor == "jugar") {
                salud = salud + 80;
                energia = energia - 20;
                console.log("Jugaste con tu mascota, " + nombre + " es muy feliz pero gastó mucha energía");
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);
                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia = energia - 20;
                    salud = salud - 20;
                }
            }
            else {
                alert("el dato ingresado es inválido.");
            }
        }
        else {
            alert("el dato ingresado es inválido.");
        }
    }
//tu mascota murio
    console.log("Tu mascota esta MUERTA");
    alert("Tu mascota murió ✝");

}