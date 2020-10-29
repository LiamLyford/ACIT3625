import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'


export default function API() {
    const [loading, setLoading] = useState(false)
    const [pokemon, setPokemon] = useState(<div />)
    const [name, setName] = useState('');
    const [warning, setWarning] = useState('');

    const loader = <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
    />

    const getPokemon = async (newName) => {
        setLoading(true)
        newName = newName.toLowerCase();
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${newName}`;
        let data = {
            data: {
                name: '',
                location_area_encounters: '',
                sprites: {
                    front_default: ''
                }
            }
        }
        try {
            data = await axios.get(apiUrl)
        } catch {
            data = {
                data: {
                    name: 'Error - Something went wrong!',
                    location_area_encounters: 'Right Here',
                    sprites: {
                        front_default: 'https://simpleandseasonal.com/wp-content/uploads/2018/02/Crockpot-Express-E6-Error-Code.png'
                    }
                }
            }
        }
        setPokemon(
            <div>
                <img src={data.data.sprites.front_default} width='100' height='100' />
                <h2>{data.data.name.toUpperCase()}</h2>
            </div>)
        setLoading(false)
    }

    useEffect(() => {
        getPokemon('Zacian')
    }, [setLoading]);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    function handleSave(e) {
        e.preventDefault();
        if (name === '') {
            setWarning('You must enter a pokemon')
        } else {
            getPokemon(name)
            setName('');
            setWarning('');
        }
    }

    return (
        <div className="todoapp" style={{ fontFamily: "aria" }}>
            <div>
                <h1 style={{ textAlign: "center", paddingBottom: 40 }}>Pokémans</h1>
                <form className="stack-small">
                    <div className="form-group">
                        <label className="todo-label">
                            Enter a pokémon name!
                        </label>
                        <input
                            className="todo-text"
                            type="text"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn__primary todo-edit" onClick={handleSave}>
                            Show Me!
                        </button>
                    </div>
                    <div style={{ textAlign: 'center' }}><span className="name-warning">{warning}</span></div>
                </form>
                <div className="todoapp" style={{ fontFamily: "aria", display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {loading ? loader : pokemon}
                </div>
            </div>
        </div>
    );
}