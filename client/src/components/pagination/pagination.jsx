import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changePag } from "../../redux/actions/actions";
import scrollToTop from "../../functions/scrollTop";

export function Pagination() {
    const dispatch = useDispatch()
    const browser = useSelector(state => state.browser)
    const order = useSelector(state => state.order)
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const division = 8;
    const startIndex = (currentPage - 1) * division;
    const endIndex = startIndex + division;
    const currentItems = data.slice(startIndex, endIndex)

    useEffect(()=>{
        axios.get(`http://localhost:3001/dog/name?breed_group=${browser}`)
        .then(res =>res.data)
        .then(data => {
            if(order === 'asc'){
              setData(data)
            }else{
              setData(data.reverse())
            }
        })
        setCurrentPage(1)
      }, [browser, order]);
    useEffect(()=>{
        dispatch(changePag(currentItems))
    }, [currentItems])
    const handlePreviousPage = () => {
        scrollToTop()
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        scrollToTop()
        const totalPages = Math.ceil(data.length / division);
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };

    return (
        <div>
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    );
};