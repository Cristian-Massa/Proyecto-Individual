import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

export const Gallery = () => {
    const dogs = useSelector(state => state.showedImg);
    useEffect(() => {
        console.log(dogs)
    }, [dogs]);
    return (
        <div>
            {
                dogs?.map(element => (
                    <div>
                        <h2>{element.name}</h2>
                        <img src={`${element.image.url}`} />
                        <p>{element.temperament}</p>
                        <p>{`${element.weight.metric}`}</p>
                        <p>{`${element.weight.imperial}`}</p>
                    </div>
                ))
            }
        </div>
    )

};

const Card = styled.div`
    height: 100%;
`

