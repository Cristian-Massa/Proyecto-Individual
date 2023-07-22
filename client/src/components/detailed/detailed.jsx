import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
export const Detail = (props) => {
    const { id } = useParams();
    const bdOrApi = useSelector(state => state.bdOrApi)
    const [dog, setDog] = useState({
        id: '',
        image: '',
        name: '',
        height: '',
        weight: '',
        temperament: '',
        life_span: '',

    })
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3001/dogs/${id}`)
            .then(res => {
                if (bdOrApi === 'api') {
                    const data = res.data.filter[0]
                    console.log(data)
                    setDog({
                        id: data.id,
                        image: data.image.url,
                        name: data.name,
                        height: data.height,
                        weight: data.weight,
                        temperament: data.temperament,
                        life_span: data.life_span,
                    });
                } else {
                    const data = res.data.getDogBD
                    setDog({
                        id: data.id,
                        image: data.image,
                        name: data.name,
                        height: data.height,
                        weight: data.weight,
                        temperament: data.temperament,
                        life_span: data.life_span,
                    });
                }
            })
    }, [id])
    useEffect(() => {
        console.log(dog)
    }, [dog])
    return (
        <DetailedDog>
            <button className="defaultButton" onClick={() => { navigate('/gallery') }}>X</button>
            <Content>
                <h1>{dog.name}</h1>
                <h2>{dog.id}</h2>
                <span>
                <ImgDetailed src={dog.image} alt="" />
                </span>
                <p>{dog.temperament}</p>
                <p>{dog.life_span}</p>
                <div>
                    <p>{dog.height.metric} Cm</p>
                    <p>{dog.height.imperial} In</p>
                </div>
                <div>
                    <p>{dog.weight.metric} Kg</p>
                    <p>{dog.weight.imperial} Lb</p>
                </div>
            </Content>
        </DetailedDog>
    );
};

const DetailedDog = styled.div`
    background-color: rgb(150,150,150, 0.6);
    height: 100vh;
    display: grid;
    grid-template-rows: 5% auto;
`
const Content = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
`
const ImgDetailed = styled.img`
    max-height: 500px;
`