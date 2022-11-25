
enviar = document.querySelector("#enviar");

enviar.addEventListener("click", ()=>{

    nome = document.querySelector("#nome")
    email = document.querySelector("#email")
    senha = document.querySelector("#senha")
    confirmarSenha = document.querySelector("#confirmarSenha")

    if(localStorage.getItem("nome = " + nome, '\nemail', 'senha', 'confirmarSenha') != null ){
        velocidades = JSON.parse(localStorage.getItem('velocidades'))
    }
    velocidades.push(vm)
    localStorage.setItem('velocidades', JSON.stringify(velocidades))


})



    // if(localStorage.getItem('velocidades') != null ){
    //     velocidades = JSON.parse(localStorage.getItem('velocidades'))
    // }
    // velocidades.push(vm)
    // localStorage.setItem('velocidades', JSON.stringify(velocidades))

    // distancia = document.querySelector("#distancia");
    // tempo = document.querySelector("#tempo");
    
    // var vm
    // distancia = distancia.value;
    // tempo = tempo.value;
    // vm = distancia/tempo; 
    // document.querySelector("#resultado").value = vm;
    // document.querySelector("#inputResultados").innerHTML += vm + "<br>"