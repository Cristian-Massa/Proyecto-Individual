import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { browse } from "../../redux/actions/actions";
export function Nav() {
    const race = useRef('')
    const dispatch = useDispatch();
    function searchDog() {
        const first = race.current?.value.charAt(0).toUpperCase();
        const rest = race.current?.value.substring(1).toLowerCase();
        dispatch(browse(first+rest))
    };
    return (
        <nav>
            <input type="text" name="search" id="" placeholder="Busca un perro"
                ref={race} />
            <button onClick={searchDog}>Buscar</button>
        </nav>
    );
};