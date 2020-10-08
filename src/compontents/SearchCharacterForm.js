import React from 'react'

export default function SearchCharacterForm({filterCharacters}){
    return (
        <form>
            <label>Search Character</label>
            <input type="text" onChange={filterCharacters}></input>
        </form>
    )
}