window.addEventListener('load',()=>{

    const botonDisminuir_g = document.getElementById('disminuir-g');
    const botonAumentar_g = document.getElementById('aumentar-g');
    let divGatos = document.getElementById('contador-g');
    const botonDisminuir_p = document.getElementById('disminuir-p');
    const botonAumentar_p = document.getElementById('aumentar-p');
    let divPerros = document.getElementById('contador-p');
    const botonDisminuir_h = document.getElementById('disminuir-h');
    const botonAumentar_h = document.getElementById('aumentar-h');
    let divHamster = document.getElementById('contador-h');
    let totalLikes = document.getElementById('total');

    let likes_g = 0;
    let likes_p = 0;
    let likes_h = 0;

    let total = 0;

    //Gatos
    botonDisminuir_g.addEventListener('click',()=>{
        likes_g -= 1;
        total -= 1;
        divGatos.innerHTML = likes_g;
        totalLikes.innerHTML = total;
    });

    botonAumentar_g.addEventListener('click', () => {
        likes_g += 1;
        total += 1;
        divGatos.innerHTML = likes_g;
        totalLikes.innerHTML = total;
    });


    //Perros
    botonDisminuir_p.addEventListener('click', () => {
        likes_p -= 1;
        total -= 1;
        divPerros.innerHTML = likes_p;
        totalLikes.innerHTML = total;
    });

    botonAumentar_p.addEventListener('click', () => {
        likes_p += 1;
        total += 1;
        divPerros.innerHTML = likes_p;
        totalLikes.innerHTML = total;
    });

    ///Hamster
    botonDisminuir_h.addEventListener('click', () => {
        likes_h -= 5;
        total -= 1;
        divHamster.innerHTML = likes_h;
        totalLikes.innerHTML = total;
    });

    botonAumentar_h.addEventListener('click', () => {
        likes_h += 1;
        total += 1;
        divHamster.innerHTML = likes_h;
        totalLikes.innerHTML = total;
    });


});