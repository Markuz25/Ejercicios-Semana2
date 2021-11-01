window.addEventListener('load', () => {
    let nombre;
    let apellido;
    let f_nacimiento;
    let c_cursos;
    let f_anio;
    do {
        nombre = prompt('Ingresa tu nombre', "");
        apellido = prompt('Ingresa tu apelllido', "");
        f_nacimiento = prompt('Ingresa tu fecha de nacimiento (DD/MM/AAAA)', "");
        c_cursos = parseInt(prompt('¿Cuantos cursos has realizado?', '0'));
        if (nombre == null || nombre == "") {
            alert("Favor de ingresar un nombre valido");
        }
        else if (apellido == null || apellido == "") {
            alert("Favor de ingresar un apellido valido")
        } else if (f_nacimiento == null || f_nacimiento == "") {
            alert("Favor de ingresar la fecha de nacimiento en el formato correspondiente");
        }
        else if (c_cursos == null || c_cursos == "" || isNaN(c_cursos)) {
            alert("Favor de ingresar la cantidad de cursos en numero");
        }
        else {
            break;
        }
    } while (nombre == null || nombre == "" || apellido == null || apellido == "" || f_nacimiento == null || f_nacimiento == "" || c_cursos == null || c_cursos == "" || isNaN(c_cursos));

    //Funcion para obtener el año de nacimiento
    function obtenerAnio(f_nacimiento) {
        let preguntaJunior;
        f_anio = f_nacimiento.split("/");
        f_anio = parseInt(f_anio[2]);
        if (f_anio < 2000) {
            preguntaJunior = "¿Estas seguro que eres un programador Junior?";
        }
        return preguntaJunior;
    }

    c_cursos += 1;
    let pregunta = obtenerAnio(f_nacimiento);

    let mensaje = `Tu nombre es ${nombre} ${apellido},naciste el ${f_nacimiento}. Has realizado ${c_cursos} cursos.
    ${pregunta}`;

    console.log(mensaje);
});