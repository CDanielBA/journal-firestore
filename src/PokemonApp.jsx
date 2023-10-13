import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, pokemonSlice, setPokemons } from './store/slices/pokemon'

// contador useRducer
  // const initialState=[
  //   {
  //     id: new Date().getTime(),
  //     description:'recolectar piedra del alma',
  //     done:false
  //   },
  //   {
  //     id: new Date().getTime(),
  //     description:'recolectar piedra del alma',
  //     done:false
  //   },
  // ]

  // function reducer(state,action){
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return{...state, 2: {id:3, description:"matar a thanos",done:true}}
  //     case "DECREMENT":
  //       return{state}
  //     case "OTHER":
  //       return{contador:state.contador, conter2:5 }
  //     default:
  //       return state;
  //   }
  // }

// FINcontador useRducer

const PokemonApp = () => {
    // contador useRducer
      // const [state, dispatche] = useReducer(reducer, initialState)
      // const sumar = () => dispatche({type:"INCREMENT"})
      // const restar = () => dispatche({type:"DECREMENT"})
      // const otro = () => dispatche({type:"OTHER"})
    // FINcontador useRducer
  

  const dispatch = useDispatch()

  // Utiliza useSelector para obtener el estado de la tienda
  
  const { pokemons = [], isLoading, page  } = useSelector (state => state.pokemons);
  console.log('pokemons :>> ', pokemons);
  
  useEffect(() => {
    dispatch( getPokemons() )
    
  }, [useSelector])
  
  return (
    <>
    <h1>PokemonApp</h1>
    {/* contadoruse reducer estudio */}
    {/* <h1>contador: {state.contador} </h1>
    <button onClick={sumar}>+1</button>
    <button onClick={restar}>-1</button>
    <button onClick={otro}>otro</button> */}
    {/* fin  contadoruse reducer estudio */}
    <hr />
    <span> {isLoading?'cargando...':''}</span>
    <ul>
      {pokemons?.map( ({name}) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <button disabled={isLoading} onClick={()=> dispatch (getPokemons(page))} >siguiente</button>
    </>
  )
}

export default PokemonApp
