function allowDrop(ev) {
    ev.preventDefault(); 
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data).cloneNode(true)); 
}

function generate(){
    var input_demension = document.getElementById("InputDem").value;
    document.getElementById("test").innerHTML = input_demension; 
}