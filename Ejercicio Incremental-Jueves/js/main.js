window.addEventListener('load',()=>{

    let amigos = new Array();
    let agregarAmigo = document.getElementById('agregarAmigo');
    let listadoAmigos = document.getElementById('listado');
    let mostrarAmigos = document.getElementById('mostrarAmigos');
    let nombreAmigo = document.getElementById('nombreAmigo');

    agregarAmigo.addEventListener('click',()=>{       
        guardarAmigo(nombreAmigo.value);
        nombreAmigo.value = "";
    });

    mostrarAmigos.addEventListener('click',()=>{
        let arregloOrdenado = amigos.sort();
        console.log(arregloOrdenado);
        
        let listaAmigos = document.createElement('ul');
        arregloOrdenado.forEach((item) =>{
            listadoAmigos.innerHTML = "";
            const li = document.createElement('li');
            li.innerHTML = item;
            listaAmigos.appendChild(li);
            listadoAmigos.appendChild(listaAmigos);
        });
        
    });

    //Funciones
    function guardarAmigo(nombre){
        amigos.push(nombre);
    }


});