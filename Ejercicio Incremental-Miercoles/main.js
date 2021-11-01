window.addEventListener('load', () => {

    let id;
    let b_mostrar = document.getElementById("mostrar");
    let valor = document.getElementById("valor");


    function mostrar(id) {
        let text;
        let mesEnletra;

        switch (id) {
            case "1":
                text = "Job Daniel, fecha alta: 2021-09-16";
                mesEnletra = mostrarfecha(text);
                text = text + ",Mes de nacimiento: " + mesEnletra;
                break;

            case "5":
                text = "Juan, fecha alta: 2021-05-01";
                mesEnletra = mostrarfecha(text);
                text = text + ",Mes de nacimiento: " + mesEnletra;
                break;

            case "6":
                text = "Jose, fecha alta: 2021-01-01";
                mesEnletra = mostrarfecha(text);
                text = text + ",Mes de nacimiento: " + mesEnletra;
                break;

            case "14":
                text = "Citlalli, fecha alta: 2021-03-15";
                mesEnletra = mostrarfecha(text);
                text = text + ",Mes de nacimiento: " + mesEnletra;
                break;

            case "600":
                text = "Maria, fecha alta: 2021-03-11";
                mesEnletra = mostrarfecha(text);
                text = text + ",Mes de nacimiento: " + mesEnletra;
                break;

            default:
                text = "Ese ID no existe... Intenta de nuevo";
        }
        return text;
        //valor.innerHTML = text;
    }


    function mostrarfecha(text) {
        let fecha = text.slice(-5, -3);
        switch (fecha) {
            case "01":
                fecha = "Enero";
                break;

            case "02":
                fecha = "Febrero";
                break;

            case "03":
                fecha = "Marzo";
                break;

            case "04":
                fecha = "Abril";
                break;

            case "05":
                fecha = "Mayo";
                break;
            case "06":
                fecha = "Junio";
                break;
            case "07":
                fecha = "Julio";
                break;
            case "08":
                fecha = "Agosto";
                break;
            case "09":
                fecha = "Septiembre";
                break;
            case "10":
                fecha = "Octubre";
                break;
            case "11":
                fecha = "Noviembre";
                break;
            case "12":
                fecha = "Diciembre";
                break;

            default:
                fecha = "Este mes no existe, revisa tu calendario....";
        }
        return fecha;
        //valor.innerHTML = text;
    }


    b_mostrar.addEventListener('click', () => {
        id = document.getElementById("mensaje").value;
        valor.innerHTML = mostrar(id);

    });



});


