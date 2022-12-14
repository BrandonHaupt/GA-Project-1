const defaultURL = "https://pokeapi.co/api/v2/pokemon/"

// console.log(pokemonURL)

function pokeSearch(pokemon) {

    const url = `${defaultURL}${pokemon}`

    $.ajax(url).then((poke) => {
        // example on how to get the pokemon names/ids/etc
        // console.log(poke.sprites.front_default)
        // console.log(poke)
        // console.log(poke.id)
        // console.log(poke.types[0].type.name)

        // Converting pokemon weight from Hectograms to lbs, Weird I know...
        const weight = (poke.weight * 0.2204622622)
        // console.log(weight)

        // Capitalizing the first letter in each pokemons name
        const pName = poke.name
        const pokeName = pName[0].toUpperCase() + pName.substring(1)

        // Grabbing the up and down arrows on the pokedex
        const $arrowUp = $('.arrowUp')
        const $arrowDown = $('.arrowDown')

        // When up arrow is clicked it changed the pokemons id and displays that pokemon
        function pokemonIdChange(pokeIdUp) {
            $arrowUp.on('click', ()=> {
                console.log("Clicked Up")
                return poke.id = poke.id + 1
            })

            $arrowDown.on('click', ()=> {
                console.log("Clicked Down")
                if(poke.id === 0) {
                    return poke.id = 0
                }
                return poke.id = poke.id - 1
            })

            return pokeIdUp
        }


        // Capitalizing the first letter in each pokemons type
        const t = poke.types[0].type.name
        // const t2 = poke.types[1].type.name
        // console.log(typeof t2)
        
        //Changes the pokemons first letter and puts it to uppercase and then pushes the rest back together
        const pType = t.charAt(0).toUpperCase() + t.slice(1)
        // const pType2 = t2.charAt(0).toUpperCase() + t2.slice(1)

      
        // function pokeType(type) {
        //     console.log(type)
        //     if(t2 == " " || t2 == "undefined" || t2 == "anonymous"){
        //         return " "
        //     } else {
        //         return type
        //     }
        // }
    
        // grabs the main
        const $main = $('main')
        // empies the main to append more pokemon
        $main.empty()
        //grabs the div
        const div = $('<div>')

        // <p class="pokeType">${pokeType(pType2)}</p

        // Pushes the api stats to the div in the HTML
        div.html(`
        <div id="pokeImgContainer">
            <img id="pokemonImg" src="${poke.sprites.front_default}"></img>
        </div>
        <div class="pokemonInfo">
            <p class="pokeName">Name: ${pokeName}</p>
            <p class="pokeId">ID: ${pokemonIdChange(poke.id)}</p>
            <p class="pokeWeight">Weight: ${weight.toFixed(1)} lbs</p>
            <div class="pokemonType">
                <p class="pokeType">Type: ${pType}</p>
            </div>
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

pokeSearch("charizard")