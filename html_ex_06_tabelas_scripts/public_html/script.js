var x = 0;
var y = 0; 
function formato(){
    paragrafo_01 = document.getElementById("par_01");
    if (x===0){
        paragrafo_01.style.color ="blue";
        x=1;
    }
    else{
        paragrafo_01.style.color="red";
        x=0;
    }      
}

function formatoCelula(){
    celulas = document.getElementsByTagName("td");
    if (y===0){
        for (i=0; i< celulas.length; ++i){
            celulas[i].style.backgroundColor = 'blue';
        }
        y=1;
    }
    else{
        for (i=0; i< celulas.length; ++i){
            celulas[i].style.backgroundColor = 'yellow';
        }
        y=0;
    }
}

