import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { changePag, browse } from "../../redux/actions/actions";
import  styled  from "styled-components";
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
                return first + element?.slice(1);
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
            <InputNav type="text" name="search" id="" placeholder="Busca un perro"
                ref={race} />
            <NavButton onClick={searchDog} >Buscar</NavButton>
        </nav>
    );
};



const InputNav = styled.input`
  height: 30px;
  width: 300px;
  border-radius: 2rem;
`
const NavButton = styled.button`
  padding: 5px 20px 5px 20px;
  margin: 2px;
  border-radius: 2rem;
  border: none;
  background-color: rgb(0,0,0);
  color: white;
  font-size: large;
  font-weight: 600;
  z-index: 2;
  transition: background-color, color 0.2s;

 &:hover{
  background-color: white;
  color:black;
}
`