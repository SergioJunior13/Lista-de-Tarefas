let tarefa
let li
let check
let del
let his = []
let lista = document.getElementById("lista")
document.getElementById("tarefa").addEventListener("focus",focus)
function adicionar() {
    tarefa = document.getElementById("tarefa").value
    if (tarefa == "") {
        alert("Insira uma tarefa primeiro.")
    }
    else{
    if(his.indexOf(tarefa) != -1){
        alert("Essa tarefa já existe")
    }
    else {
        his.push(tarefa)
        li = document.createElement("li")
        li.id = tarefa
        lista.appendChild(li)
        //checkbox
        check = document.createElement("input")
        check.type = "checkbox"
        check.id = "check"
        //botao de deletar
        del = document.createElement("input")
        del.type = "button"
        del.value = "Remover"
        del.classList = "dele"
        li.appendChild(check) //colocar o checkbox na lista
        li.innerHTML += tarefa // colocar a tarefa na lista
        li.appendChild(del)
        del.addEventListener("click",deletar)

        function deletar(){
            var a = event.currentTarget
            var b = a.parentElement
            his.splice(his.indexOf(b.id),1)
            lista.removeChild(b)
            
        }
    }}
}
function focus(){
    document.getElementById("tarefa").value = ""
}
function limpar(){
    lista.innerText = ""
    his.splice(0,his.length)
}