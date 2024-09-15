document.addEventListener("DOMContentLoaded", function() {
    let tbAA = document.getElementById("a");
    let tbBB = document.getElementById("b");
    let tbCC = document.getElementById("c");

    var enter = document.getElementById("btn_enter");

    var textX1 = document.getElementById("x1");
    var textX2 = document.getElementById("x2");

    // Função de clique
    enter.addEventListener("click", function() {
        let tbA = parseFloat(tbAA.value); // Valores precisam ser capturados no momento do clique
        let tbB = parseFloat(tbBB.value);
        let tbC = parseFloat(tbCC.value);

        if (isNaN(tbA) || isNaN(tbB) || isNaN(tbC) ) {
            window.alert("Você deve informar todos os números");
        }
        else {
          let delta = (tbB * tbB) - (4 * tbA * tbC);
          console.log(delta);
          if (delta < 0){
            window.alert("a raiz n existe pois delta e negativo")
          }
          else {
          let raiz = Math.sqrt(delta);
          console.log(raiz);
          let x1 = (-tbB + raiz) / (2 * tbA);
          console.log(x1)
          let x2 = (-tbB - raiz) / (2 * tbA);
          console.log(x2)
          textX1.textContent = x1;
          textX2.textContent = x2;
          }
        };
    });
});
