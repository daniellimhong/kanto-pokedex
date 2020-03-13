import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    margin: 5px 10px 5px 10px;
    background-color: #A9A9A9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const PokemonIcon = styled.img`
    cursor: pointer;
    width: 100px;
    height: 100px;
`

const PokemonName = styled.h2`
    font-family: "pokemon-font", monospace;
    font-size: 18px;
`

const Pokemon = (props) => {

    const imgUrlClick = () => {
        window.open(`https://bulbapedia.bulbagarden.net/wiki/${props.name}_(Pok%C3%A9mon)`)
    }

    return (
       <Container>
           {/* <p>#{props.id}</p> */}
            <PokemonIcon 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    props.id
                    }.png`}
                alt="pkm-icon"
                onClick={imgUrlClick}
                />
            <PokemonName>
                {props.name}
            </PokemonName>
       </Container>
        
    )
}

export default Pokemon;