import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { Link } from "react-router-dom";
export const Gallery = () => {
    const dogs = useSelector(state => state.showedImg);
    return (
        <div id="gallery">
            {
                dogs?.map((element, key) => (
                    <Card key={key++}>
                        <CustomLink to={`/detail/${element.id}`}>
                        <h2>{element.name}</h2>
                        <Img src={`${element.image.url}`} />
                        <p>{element.temperament}</p>
                        <p>Kg:</p>
                        <p>{`${element.weight.metric}`}</p>
                        <p>Lb:</p>
                        <p>{`${element.weight.imperial}`}</p>
                        </CustomLink>
                    </Card>
                ))
            }
        </div>
    )

};

const Card = styled.div`
background: rgba(150,150,150, 0.6) ;
border: solid black 2px;
border-radius: 1rem;
text-align: center;
width: 200px;
height: auto;
max-height: 400px;
padding: 10px 0 10px 0;
margin:10px;
transition: transform 1s;
align-items: center;
`

const Img = styled.img`
 max-width: 150px;
 max-height: 150px;
`
const CustomLink = styled(Link)`
text-decoration:none;
color: white;
&::visited {color:white;}

`