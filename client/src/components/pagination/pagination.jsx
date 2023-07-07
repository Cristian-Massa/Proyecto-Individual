import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changePag } from "../../redux/actions/actions";
export function Pagination() {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const division = 8;
    const startIndex = (currentPage - 1) * division;
    const endIndex = startIndex + division;
    const currentItems = data.slice(startIndex, endIndex)

    useEffect(()=>{
        axios.get(`http://localhost:3001/dog/name?breed_group=`)
        .then(res =>res.data)
        .then(data => {
            setData(data)
        })
      }, []);

    useEffect(()=>{
        dispatch(changePag(currentItems))
    }, [currentItems])
    const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
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