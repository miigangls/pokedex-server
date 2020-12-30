import axios from 'axios';

const serverIPAdrress  = 'https://pokeapi.co/api/v2';


/**
 * Created by: Miguel Angel Mendoza Cardenas -  @miigangls
 * Date: 29-12-2020
 */
export async function fetchTypes () {
    return await new Promise( (resolve, reject) => {
        axios.get(`${serverIPAdrress}/type`).then((response) => {
            if (!response.data) return console.log('ERROR DATOS');
            resolve(response.data.results)
        }).catch(e => console.log(e.message) )
    })
}

/**
 * Created by: Miguel Angel Mendoza Cardenas -  @miigangls
 * Date: 29-12-2020
 */
export async function fetchStats () {
    return await new Promise( (resolve, reject) => {
        axios.get(`${serverIPAdrress}/stat`).then((response) => {
            if (!response.data) return console.log('ERROR DATOS');
            resolve(response.data.results)
        }).catch(e => console.log(e.message) )
    })
}



/**
 * Created by: Miguel Angel Mendoza Cardenas -  @miigangls
 * Date: 29-12-2020
 */
export async function fetchPokemons (limit) {
    return await new Promise( (resolve, reject) => {
        axios.get(`${serverIPAdrress}/pokemon/?limit=${limit}`).then((response) => {
            if (!response.data) return console.log('ERROR DATOS');
            resolve(response.data.results)
        }).catch(e => console.log(e.message) )
    })
}