$(function(){

    const promise = $.ajax({ 
        url: 'https://pokeapi.co/api/v2/pokemon/'
    });

    promise.then(
        (data) => {
            console.log(data)
            render(data.results)
        },
        (error) => {
            console.error(error)
        }
    )

    function render(pokemons){
        pokemons.forEach((pokemon)=> {
            const $h1 = $(`<h1>${pokemon.name}</h1>`)
            const $img = $(`<img alt="picture of ${pokemon.name}" src="${pokemon.url}">`) 

            $("body").append($h1)
        })
    }

    function getPokemonData(pokemon){
        const promise = $.ajax({ 
            url: pokemon.url
        });
    
        promise.then(
            (data) => {
                console.log(data)
            },
            (error) => {
                console.error(error)
            }
        )
    }



})