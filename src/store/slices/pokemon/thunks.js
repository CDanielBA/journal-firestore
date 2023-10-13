import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, stratLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0)=>{

  return async (dispatch, getState) => {
    dispatch( stratLoadingPokemons() );

    // TODO: realizar peticion http
    const resp = await fetch(`https://pokeapi.co/api/v2/ability/?limit=10&offset=${page*10}`)
    const data = await resp.json();

    // con Axios 
    // const resp = await pokemonApi.get(`/ability/?limit=20&offset=20`)
    // console.log(resp);


    dispatch( setPokemons({ pokemons:data.results, page: page + 1 }) )
  }
}