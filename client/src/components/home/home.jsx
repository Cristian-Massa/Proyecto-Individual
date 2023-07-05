import React, { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { changePag } from "../../redux/actions/actions";
import { Gallery } from "../Gallery/gallery";
export function Home() {
    const race = useRef('')
    const dispatch = useDispatch()
    function searchDog() {
        axios.get(`http://localhost:3001/dog/name?breed_group=${race.current.value}`)
            .then(res =>res.data)
            .then(data => {
                console.log(data)
                dispatch(changePag(data))
            })
    };

    return (
        <div>
            <nav>
                <input type="text" name="search" id="" placeholder="Busca un perro" 
                ref={race}/>
                <button onClick={searchDog}>Buscar</button>
            </nav>
            <section>
                <article>
                    <Gallery />
                </article>
            </section>
            <section>
                <article>
                    <button>atras</button>
                    <button>adelante</button>
                </article>
            </section>
        </div>
    )
}