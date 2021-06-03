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
        check.setAttribute("onclick","checar()")
        //botao de deletar
        del = document.createElement("input")
        del.type = "button"
        del.value = "Remover"
        del.classList = "dele"
        li.appendChild(check) //colocar o checkbox na lista
         li.innerHTML += `<span id=${tarefa}txt>${tarefa}</span>` // colocar a tarefa na lista
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
function checar(){
    var c = event.currentTarget
    var d = c.parentElement
    var e = d.id
    var texto = document.getElementById(`${e}txt`)
    if(c.checked){
        texto.innerHTML = `<del>${e}</del>`
        d.style.color = "rgb(21, 255, 0)"
    }
    else{
        texto.innerHTML = e 
        d.style.color = "white"
    }
}
