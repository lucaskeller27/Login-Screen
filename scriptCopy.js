const addTarefa = () => {
    let tarefa = document.getElementById('tarefa').value

    document.getElementById('tarefa').value = ""

    if(localStorage.getItem('tarefas') != null) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }

    dt = new Date();
    let date = `${dt.getUTCDay()}/${dt.getUTCMonth()}/${dt.getUTCFullYear()}`;

    tarefas.push([date, tarefa])
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const list = () => {
    let tbody = document.QuerySelector('#tr-tarefa')

    if (localStorage.getItem('tarefas') != null) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    } else {
        tarefas.push(["Sem dados ","Sem dados"])
    }

    tarefas.forEach(element => {
        tbody.innerHTML += "<tr><td>"+ element[0]+"</td></tr>" + "<tr><td>"+ element[1]+"</td></tr>"
    });
}