let qte1 = 0;
let prixU1 = 0;
let prixArticles1 = 0;

let quantity1 = document.getElementById("textqte1") ;
let unitPrice1 = document.getElementById("prix1");
let prixCalculeArticle1 = document.getElementById("textprixdesarticle1");

quantity1.addEventListener("input", function(event) {
    qte1 = event.target.value;
    //quantity1.value = qte1
    event.target.value = qte1;
    prixArticles1 = qte1 * prixU1;
    prixCalculeArticle1.value = prixArticles1;
})


unitPrice1.addEventListener("input", function(event) {
    prixU1 = event.target.value;
    event.target.value = prixU1;
    prixArticles1 = qte1 * prixU1;
    
    prixCalculeArticle1.value = prixArticles1;
})
/*
quantity1.addEventListener("click", (event) => {
    
})
*/

/*
quantity1.addEventListener("click", faireUnTruc)

function faireUnTruc(event){
 console.log("Faire quelque chose")
}
*/