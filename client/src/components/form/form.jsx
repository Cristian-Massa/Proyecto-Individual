import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const Form = () => {
    const navigate = useNavigate()
    const [temps, setTemps] = useState([])
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [height, setHeight] = useState({
        metric: '',
        imperial: ''
    })
    const [weight, setWeight] = useState({
        metric: '',
        imperial: ''
    })
    const [lifeSpan, setLifeSpan] = useState('')
    const [formTemps, setFormTemps] = useState('')


    useEffect(() => {
        axios.get('http://localhost:3001/temperaments')
            .then(res => {
                const temps = res.data
                setTemps(temps)
            })
    }, [])
    const selected = []
    function handleChange(e) {

        if (!formTemps.includes(e.target.value) && e.target.value !== 'no usar' && e.target.value !== 'borrar' && selected.length <= 10) {
            selected.push(e.target.value)
            const arrayTexted = selected.join(', ')

            if(formTemps.length === 0){
                setFormTemps(`${arrayTexted}`)
            }else{
                setFormTemps(`${formTemps}, ${arrayTexted}`)
            }
        }
        if (e.target.value === 'borrar') {
            e.preventDefault()
            const deleteWord = formTemps.replace(/ /g, '').split(',')
            deleteWord.pop()
            deleteWord.join(', ')
            setFormTemps(`${deleteWord}`)
        }

    }

    useEffect(()=>{
        const text = document.getElementById('text')
        text.innerHTML = formTemps
    }, [formTemps])
    useEffect(()=>{
        console.log(height)
    }, [height])
    function handleOptions(e) {
        const { value, name } = e.target
        switch (name) {
            case "name":
                setName(value)
                break;
            case "url":
                setUrl(value)
                break;
            case "heightMetric":
                const valueMinMetric = document.getElementById('min-mt').value
                const valueMaxMetric = document.getElementById('max-mt').value
                setHeight({
                    ...height,
                    metric: `${valueMinMetric} - ${valueMaxMetric}`
                })
                break;
            case "heightImperial":
                const valueMinImperial = document.getElementById('min-in').value
                const valueMaxImperial = document.getElementById('max-in').value
                setHeight({
                    ...height,
                    imperial: `${valueMinImperial} - ${valueMaxImperial}`
                })
                break;
            case "weightMetric":
                const valueMinWMetric = document.getElementById('Wmin-mt').value
                const valueMaxWMetric = document.getElementById('Wmax-mt').value
                setWeight({
                    ...weight,
                    metric: `${valueMinWMetric} - ${valueMaxWMetric}`
                })
                break;
            case "weightImperial":
                const valueMinWImperial = document.getElementById('Wmin-im').value
                const valueMaxWImperial = document.getElementById('Wmax-im').value
                setWeight({
                    ...weight,
                    imperial: `${valueMinWImperial} - ${valueMaxWImperial}`
                })
                break;
            case "lifeSpan":
                const ageMin = document.getElementById('min_age').value
                const ageMax = document.getElementById('max_age').value
                setLifeSpan(`${ageMin} - ${ageMax} years`)
                break;
        }
        console.log(name)
    }

    function handleSubmit (e) {
        e.preventDefault()
        const dog = {
            name: name,
            image: {
                url: url
            },
            height: {
                metric: height.metric,
                imperial: height.imperial
            },
            weight: weight,
            life_span: lifeSpan,
            temperaments: formTemps
        }
        console.log(dog)
    }
    return (
        <Content>
            <button className="invisible" onClick={() => { navigate('/Gallery') }}>X</button>
            <FormDiv  onSubmit={handleSubmit}>

                <label htmlFor="">Nombre:</label>
                <input type="text" name="name" onChange={handleOptions} />

                <label htmlFor="">URL de la imagen:</label>
                <input type="text" name='url' onChange={handleOptions} />

                <label htmlFor="">Altura:</label>
                <div>

                    <label>Metric:</label>
                    <br />
                    <label>Minimo:</label>
                    <input type="number" name='heightMetric' id="min-mt" onChange={handleOptions} />

                    <label>Maximo:</label>
                    <input type="number" name='heightMetric' id="max-mt" onChange={handleOptions} />
                    <br />
                    <label htmlFor="">Imperial:</label>
                    <br />
                    <label>Minimo:</label>
                    <input type="number" name='heightImperial' id="min-in" onChange={handleOptions} />

                    <label>Maximo:</label>
                    <input type="number" name='heightImperial' id="max-in" onChange={handleOptions} />
                </div>

                <label htmlFor="">Peso:</label>
                <div>

                    <label>Metric:</label>
                    <br />
                    <label>Minimo:</label>
                    <input type="number" name='weightMetric' id="Wmin-mt" onChange={handleOptions} />

                    <label>Maximo:</label>
                    <input type="number" name='weightMetric' id="Wmax-mt" onChange={handleOptions} />
                    <br />
                    <label htmlFor="">Imperial:</label>
                    <br />
                    <label>Minimo:</label>
                    <input type="number" name='weightImperial' id="Wmin-im" onChange={handleOptions} />

                    <label>Maximo:</label>
                    <input type="number" name='weightImperial' id="Wmax-im" onChange={handleOptions} />
                </div>

                <label htmlFor="">Años de vida:</label>
                <div>
                    <label>Minimo:</label>
                    <input type="number" name='lifeSpan' id="min_age" onChange={handleOptions}/>
                    <label>Maximo:</label>
                    <input type="number" name='lifeSpan' id="max_age" onChange={handleOptions}/>
                </div>



                <label htmlFor="">Temperamentos:</label>
                <Text id="text" name="formtemps"></Text>

                <button onClick={handleChange} value='borrar'> borrar</button>
                <select onChange={(handleChange)} name="temperaments">
                    <option value='no usar'>
                        Selecciona los temperamentos
                    </option>
                    {temps.map((element, key) => {
                        return (

                            <option value={element.name} key={key}>{`${element.name}`}</option>

                        )
                    })}
                </select>
                <button className="defaultButton">Enviar</button>
            </FormDiv>
        </Content>
    )
};

const FormDiv = styled.form`
  display: grid;
  width: 80vw;
  gap: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 50px;
  select,
  input {
    justify-self: center;
  }
`;


const Text = styled.p`
    width: 500px;
    max-width: 500px;
    height: 90px;
    max-height: 100px;
`;