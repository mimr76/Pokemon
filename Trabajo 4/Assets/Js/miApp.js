//function tiempo(nombre){
//    console.log(`Iteracion, ${nombre}`);}
      
function ini() {
    localStorage.setItem("Posicion", 20);
    document.getElementById('elem').innerHTML = '';
    for (let c = 1; c <= 20; c++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${c}`)
        .then(response => response.json())
        .then(allpokemon => {console.log(allpokemon)
            let element = document.getElementById('elem')
            element.innerHTML += `<tr> <td>${allpokemon.height}</td> <td>${allpokemon.name}</td>
            <td><img src='${allpokemon.sprites.front_default}'/></td></tr>`;})
//            setTimeout(tiempo, 5000, c);        
        }}

function find() {
    localStorage.setItem("Posicion", 20);
    document.getElementById('elem').innerHTML = '';
        fetch(`https://pokeapi.co/api/v2/pokemon/${document.getElementById("Encuentra").value}`)
        .then(response => response.json())
        .then(allpokemon => {console.log(allpokemon)
            let element = document.getElementById('elem')
            element.innerHTML += `<tr> <td>${allpokemon.height}</td> <td>${allpokemon.name}</td>
            <td><img src='${allpokemon.sprites.front_default}'/></td></tr>`;})
//            setTimeout(tiempo, 5000, c);        
        }

function list(a) {
    let b = parseInt(localStorage.getItem("Posicion"))
    if (a == 1) {
        if  (b>20){
            b=b-20;
        }else {
            b=20;
        }    
    }else{
        b=b+20;
    }
    localStorage.setItem("Posicion", b);
    document.getElementById('elem').innerHTML = '';
    for (let c = b-20; c <= b+20; c++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${c}`)
        .then(response => response.json())
        .then(allpokemon => {console.log(allpokemon)
            let element = document.getElementById('elem')
            element.innerHTML += `<tr> <td>${allpokemon.height}</td> <td>${allpokemon.name}</td>
            <td><img src='${allpokemon.sprites.front_default}'/></td></tr>`;})
    }}



