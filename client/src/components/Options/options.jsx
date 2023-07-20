import React, { useEffect, useState } from "react";
import options from "../../utils/svg/option.svg"
import { useDispatch } from "react-redux";
import { changeOrder, filterTemps, bdOrApi } from "../../redux/actions/actions";
import axios from "axios";


export const Options = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const dispatch = useDispatch()
    const [temps, setTemps] = useState([])
    
    const handleChange = (e) => {
        const value = e.target.value
        dispatch(changeOrder(value))
    };

    const tempSelector = (e) => {
        const value = e.target.value
        console.log(value)
        dispatch(filterTemps(value))
    };

    const fontSelector = (e) => {
        const value = e.target.value
        console.log(value)
        dispatch(bdOrApi(value))
    };

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
                <button onClick={() => { setOpenMenu(!openMenu) }}>
                    <img src={options} width='20px' alt="options" />
                </button>
            </div>
            {
                openMenu ?
                    <div>
                        <div>
                            <select name="order" onChange={handleChange}>
                                <option value="asc">ascente</option>
                                <option value="des">descendente</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={tempSelector}>
                                <option value=''>selecciona la personalidad</option>
                                {temps?.map((element, key) => {
                                    return (
                                            <option value={element.temperaments} key={key}>{`${element.name}`}</option>
                                    )
                                })}
                            </select>
                            <select onChange={fontSelector}>
                                <option value="api">api</option>
                                <option value="bd">base de datos</option>
                            </select>
                        </div>
                    </div>
                    : null
            }

        </div>
    )
};