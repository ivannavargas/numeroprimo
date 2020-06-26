function esPrimo(num) {
    if (num<=1 || num%1) {
        return false;
    }
    let m=Math.sqrt(num);
    for (let i=2; i<=m; i++) {
        if (num%i==0) {
            return false;
        }
    }
    return true;
}

function primo()
{
    let valor=parseInt(document.getElementById("valor").value);
    if (esPrimo(valor)) {
        document.getElementById("resultado").innerHTML="Primo";
    } else {
        document.getElementById("resultado").innerHTML= "no  es Primo";
    }
}
