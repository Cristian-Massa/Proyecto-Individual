import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { changePag } from "../../redux/actions/actions";
export function Nav() {
    const race = useRef('')
    const dispatch = useDispatch();
    function searchDog() {
        axios.get(`http://localhost:3001/dog/name?breed_group=${race.current.value}`)
            .then(res =>res.data)
            .then(data => {
                console.log(data)
                dispatch(changePag(data))
            })
    };
    return (
        <nav>
            <input type="text" name="search" id="" placeholder="Busca un perro"
                ref={race} />
            <button onClick={searchDog}>Buscar</button>
        </nav>
    );
};