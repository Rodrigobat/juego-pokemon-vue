const numAleatorios=()=>{
    let numsAleatorios=[]
    for (let i=0 ;i < 4; i++) {
      numsAleatorios.push(Math.floor(Math.random() * (601 - 1) + 1))
    }
    return numsAleatorios
}

/*
     function pokemons(){
        let num=numAleatorios();
            let res= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=621&offset=0.`)
            let data= await res.json()
            const nom= data.results
            const nombres= nom[num[0]]
        }
    

*/

export default numAleatorios