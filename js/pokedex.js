const defaultURL = "https://pokeapi.co/api/v2/pokemon/"

// console.log(pokemonURL)

function pokeSearch(pokemon) {

    const url = `${defaultURL}${pokemon}`

    $.ajax(url).then((poke) => {
        // example on how to get the pokemon names/ids/etc
        // console.log(poke.sprites.front_default)
        console.log(poke)
        console.log(poke.id)
        console.log(poke.types[0].type.name)

        const $main = $('main')
        $main.empty()

        const div = $('<div>')

        div.html(`
        <div id="pokeImgContainer">
            <img id="pokemonImg" src="${poke.sprites.front_default}"></img>
        </div>
        <div class="pokemonInfo">
            <p class="pokeName">Name: ${poke.name}</p>
            <p class="pokeId">ID: ${poke.id}</p>
            <p class="pokeWeight">Weight: ${poke.weight}</p>
            <p class="pokeType">Type: ${poke.types[0].type.name}</p>
        </div>
            
        `)

        $main.append(div)
    })
}

// Allowing users to choose what pokemon they want to look for
$('input[type=submit]').on("click", (event) => {
    event.preventDefault()

    const inputText = $('input[type=text').val().toLowerCase()

    pokeSearch(inputText)

})

pokeSearch("squirtle")