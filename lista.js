let tarefa, li, check, del
let historico = []
let lista = document.getElementById("lista")
let tarefaInput = document.getElementById("tarefa")

tarefaInput.addEventListener("focus", (event) => {
    event.currentTarget.select()
})

function adicionar() {
    tarefa = tarefaInput.value

    if (tarefa == "") {
        alert("Insira uma tarefa primeiro.")
    }
    else if (historico.indexOf(tarefa) != -1) {
        alert("Essa tarefa já existe")
    }
    else {
        historico.push(tarefa)
        li = document.createElement("li")
        li.id = tarefa

        check = "<input type='checkbox' class='check' onclick='checar()'>"
        del = "<button onclick='deletar()' class='delete'>Remover</button>"

        li.innerHTML = check + `<span>${tarefa}</span>` + del
        lista.appendChild(li)

    }
}

function deletar() {
    var button = event.currentTarget
    var liElement = button.parentElement

    historico.splice(historico.indexOf(liElement.id), 1)
    lista.removeChild(liElement)
}

function limpar() {
    lista.innerText = ""
    historico.splice(0, historico.length)
}
function checar() {
    var checkboxElement = event.currentTarget
    var liElement = checkboxElement.parentElement
    var texto = liElement.childNodes[1]

    if (checkboxElement.checked) {
        texto.innerHTML = `<del>${liElement.id}</del>`
        liElement.style.color = "rgb(21, 255, 0)"
    }
    else {
        texto.innerHTML = liElement.id
        liElement.style.color = "#fff"
    }
}