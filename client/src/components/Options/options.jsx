import React, { useEffect, useState } from "react";
import options from "../../utils/svg/option.svg"
import { useDispatch } from "react-redux";
import { changeOrder, filterTemps, bdOrApi, weight } from "../../redux/actions/actions";
import axios from "axios";
import { styled } from "styled-components";


export const Options = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const dispatch = useDispatch()
    const [temps, setTemps] = useState([])

    const filtersAndOrders = (e) => {
        const value = e.target.value
        const name = e.currentTarget.name
        switch (name) {
            case "order":
                dispatch(changeOrder(value))
                break
            case "temperaments":
                dispatch(filterTemps(value))
                break
            case "origen":
                dispatch(bdOrApi(value))
                break
        }
    }
    useEffect(() => {
        axios.get('http://localhost:3001/temperaments')
            .then(res => {
                const temps = res.data
                setTemps(temps)
            })
    }, [])

    return (
        <div>
            <div>
                <button onClick={() => { setOpenMenu(!openMenu) }} className="invisible">
                    <img src={options} width='20px' alt="options" />
                </button>
            </div>
            {
                openMenu ?
                    <OptionMenu>
                        <select name="order" onChange={filtersAndOrders}>
                            <option disabled>Selecciona el orden</option>
                            <option value="asc">ascente</option>
                            <option value="des">descendente</option>
                        </select>
                        <select name='temperaments' onChange={filtersAndOrders}>
                            <option value=''>selecciona la personalidad</option>
                            {temps?.map((element, key) => {
                                return (
                                    <option value={element.temperaments} key={key}>{`${element.name}`}</option>
                                )
                            })}
                        </select>
                        <select name='origen' onChange={filtersAndOrders}>
                            <option disabled>Selecciona el origen</option>
                            <option value="api">api</option>
                            <option value="bd">base de datos</option>
                        </select>
                    </OptionMenu>
                    : null
            }

        </div>
    )
};

const OptionMenu = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: auto auto auto;
    right: 30px;
    gap: 30px;
    top: 30px;
`