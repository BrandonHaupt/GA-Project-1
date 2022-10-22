const pokemonURL = "https://dummydata.netlify.app/pokedex.json"

// console.log(pokemonURL)

function pokeSearch(pokemon) {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    $.ajax(url).then((poke) => {
        //example on how to get the pokemon names/ids/etc
        console.log(poke.sprites.front_default)

        const $main = $('main')
        $main.empty()

        const div = $('<div>')

        div.html(`<img src="${poke.sprites.front_default}"></img>`)

        $main.append(div)
    })
}

pokeSearch("ditto")