let velocidades = []



calcular = document.querySelector("#calcular");
limpar = document.querySelector("#limpar");

calcular.addEventListener("click", ()=>{

    if(localStorage.getItem('velocidades') != null ){
        velocidades = JSON.parse(localStorage.getItem('velocidades'))
    }
    velocidades.push(vm)
    localStorage.setItem('velocidades', JSON.stringify(velocidades))

    distancia = document.querySelector("#distancia");
    tempo = document.querySelector("#tempo");
    
    var vm
    distancia = distancia.value;
    tempo = tempo.value;
    vm = distancia/tempo; 
    document.querySelector("#resultado").value = vm;
    document.querySelector("#inputResultados").innerHTML += vm + "<br>"
})

limpar.addEventListener("click", ()=>{
    document.querySelector('#distancia').value=""
    document.querySelector('#tempo').value=""
    document.querySelector('#resultado').value=""
    document.querySelector('#inputResultados').innerHTML=""
})