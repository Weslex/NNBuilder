function allowDrop(ev) {
        ev.preventDefault(); 
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    if(ev.target.getAttribute('data-boxtype') == document.getElementById(data).getAttribute('data-appendto')){
        ev.preventDefault();
        ev.target.appendChild(document.getElementById(data).cloneNode(true));
        ev.target.setAttribute("layertype", data);
    }
}

function generate(){
    //get the input dimension of the network
    var input_demension = document.getElementById("InputDem").value;

    //get the hidden layer type, activation function, and nodes of the layers
    var hidden1 = document.getElementById("layer1").getAttribute("layertype"); 
    var act1 = document.getElementById("act1").getAttribute("layertype"); 
    var nodes1 = document.getElementById("hidden1Nodes").value;

    var hidden2 = document.getElementById("layer2").getAttribute("layertype");
    var act2 = document.getElementById("act2").getAttribute("layertype");
    var nodes2 = document.getElementById("hidden2Nodes").value; 

    var hidden3 = document.getElementById("layer3").getAttribute("layertype");
    var act3 = document.getElementById("act3").getAttribute("layertype");
    var nodes3 = document.getElementById("hidden3Nodes").value; 

    var hidden4 = document.getElementById("layer4").getAttribute("layertype");
    var act4 = document.getElementById("act4").getAttribute("layertype");
    var nodes4 = document.getElementById("hidden4Nodes").value;
    
    var hidden5 = document.getElementById("layer5").getAttribute("layertype");
    var act5 = document.getElementById("act5").getAttribute("layertype");
    var nodes5 = document.getElementById("hidden5Nodes").value;
    
    var hidden6 = document.getElementById("layer6").getAttribute("layertype");
    var act6 = document.getElementById("act6").getAttribute("layertype");
    var nodes6 = document.getElementById("hidden6Nodes").value; 

    console.log("layer 1")
    console.log(hidden1); 
    console.log(act1);
    console.log(nodes1); 
    var loss  = document.getElementsByName("loss-func"); 
    var mse = loss[0].checked;
    var biCr = loss[1].checked;
    var catCr = loss[2].checked; 

    var fd = new FormData;
    fd.append("inputdem", input_demension);
    fd.append("hidden1", hidden1);
    fd.append("act1", act1);
    fd.append("nodes1", nodes1);

    fd.append("hidden2", hidden2);
    fd.append("act2", act2);
    fd.append("nodes2", nodes2);

    fd.append("hidden3", hidden3);
    fd.append("act3", act3);
    fd.append("nodes3", nodes3);

    fd.append("hidden4", hidden4);
    fd.append("act4", act4);
    fd.append("nodes4", nodes4);

    fd.append("hidden5", hidden5);
    fd.append("act5", act5);
    fd.append("nodes5", nodes5);

    fd.append("hidden6", hidden6);
    fd.append("act6", act6);
    fd.append("nodes6", nodes6);

    console.log(fd.get("nodes6"));

    location.href = "aftersubmit.html";
    
}
