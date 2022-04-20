// Déclaration de variables
let qte1 = 0;
let prixU1 = 0;
let prixArticles1 = 0;

// Récupérer l'élément HTML de type input lié à la quantité de l'article 1
let quantity1 = document.getElementById("textqte1") ;
// Récupérer l'élément HTML de type input lié au prix unitaire de l'article 1
let unitPrice1 = document.getElementById("prix1");
// Récupérer l'élément HTML de type input lié au prix total pour les articles 1
let prixCalculeArticle1 = document.getElementById("textprixdesarticle1");

// Ajouter un l'écoute d'événements de type input sur l'élément HTML quantity1
// addEventListener prend 2 paramètre : une string pour définir le type d'événement à écouter et une fonction qui sera executée à chaque fois que l'événement à lieu
quantity1.addEventListener("input", function(event) {
    // event.target est la cible/l'élement HTML sur lequel a eu lieu l'événement.    .value récupère la valeur de l'attribut value de l'élément sur lequel a eu lieu l'événement
    qte1 = event.target.value;
    //qte1 = quantity1.value
    
    // Calcul du prix total des articles 1.
    prixArticles1 = qte1 * prixU1;
    // Ajout de la valeur calculée au niveau de l'élément correspondant.
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
