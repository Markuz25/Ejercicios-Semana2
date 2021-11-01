window.addEventListener('load', () => {

    let id;
    let b_mostrar = document.getElementById("mostrar");
    let valor = document.getElementById("valor");

    function mostrarfecha(fecha) {
        let text;

        switch (id) {
            case "01":
                text = "Enero";
                break;

            case "02":
                text = "Febrero";
                break;

            case "03":
                text = "Marzo";
                break;

            case "04":
                text = "Abril";
                break;

            case "05":
                text = "Mayo";
                break;
            case "06":
                text = "Junio";
                break;
            case "07":
                text = "Julio";
                break;
            case "08":
                text = "Agosto";
                break;
            case "09":
                text = "Septiembre";
                break;
            case "10":
                text = "Octubre";
                break;
            case "11":
                text = "Noviembre";
                break;
            case "12":
                text = "Diciembre";
                break;

            default:
                text = "Este mes no existe, revisa tu calendario....";
        }
        return text;
        //valor.innerHTML = text;
    }

    b_mostrar.addEventListener("click", () => {
        id = document.getElementById("mensaje").value;
        valor.innerHTML = mostrar(id);
    });


});



