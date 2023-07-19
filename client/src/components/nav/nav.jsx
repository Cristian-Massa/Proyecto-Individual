import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { changePag, browse } from "../../redux/actions/actions";
export function Nav() {
    const race = useRef('')
    const dispatch = useDispatch();
    function searchDog() {
        const query = race?.current.value;
        let convertion
        if (query.includes(' ')) {
            convertion = query.split(' ');
        
            convertion = convertion.map((element) => {
              const regex = /^[a-z]/;
              if (regex.test(element[0])) {
                const first = element[0].toUpperCase();
                return first + element.slice(1);
              } else {
                console.log(element)
                return element;
              }
            })
            console.log(convertion.join(' '))
            dispatch(browse(convertion.join(' ')))
            return
        }
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