import React, { useEffect, useState } from "react";
import options from "../../utils/svg/option.svg"
import { useDispatch } from "react-redux";
import { changeOrder } from "../../redux/actions/actions";

export const Options = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        const value = e.target.value
        dispatch(changeOrder(value))
    };
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
                    <select name="order" onChange={handleChange}>
                        <option value="asc">ascente</option>
                        <option value="des">descendente</option>
                    </select>
                </div> : null
                }
        </div>
    )
};