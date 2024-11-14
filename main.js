let compteur = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
}

function increment(beerID){

    compteur[beerID]++
    document.getElementById("compteur-" + beerID).textContent = compteur[beerID];
    totalBeer()
    }

function decrement(beerID){

    compteur[beerID]--
    document.getElementById("compteur-" + beerID).textContent = compteur[beerID];
    totalBeer()
    }

function totalBeer(){
    document.getElementById("totalbeer").textContent = compteur[1] + compteur[2] + compteur[3] + compteur[4]
}
     