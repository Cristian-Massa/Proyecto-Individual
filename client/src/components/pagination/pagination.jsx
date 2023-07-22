import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changePag } from "../../redux/actions/actions";
import scrollToTop from "../../functions/scrollTop";
import { styled } from "styled-components";
export function Pagination() {
  const dispatch = useDispatch()
  const browser = useSelector(state => state.browser)
  const temps = useSelector(state => state.filterTemps)
  const bdOrApi = useSelector(state => state.bdOrApi)
  const order = useSelector(state => state.order)
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const division = 8;
  const startIndex = (currentPage - 1) * division;
  const endIndex = startIndex + division;
  const currentItems = data.slice(startIndex, endIndex)

    useEffect(() => {
      axios.get(`http://localhost:3001/dogs/name?name=${browser}`)
        .then(res => {
          if(bdOrApi === 'api'){
            let data
            browser.length > 0 ? data = res.data.filtered: data = res.data.data;
            setData([])
            if (order === 'asc') {
              if (temps.length > 0) {
                const filter = data.filter(element => {
                  if (element.temperament?.includes(temps)) {
                    return element
                  }
                })
                setData(filter)
              }else{
              setData(data)
              }
            } else {
              if (temps.length > 0) {
                const filter = data.filter(element => {
                  if (element.temperament?.includes(temps)) {
                    return element
                  }
                })
                setData(filter.reverse())
              }else{
                setData(data.reverse())
              }
            }
          }
          if(bdOrApi === 'bd'){
            const db = res.data.getDogBD
            setData([])
            if (order === 'asc') {
              if (temps.length > 0) {
                const filter = db.filter(element => {
                  if (element.temperament?.includes(temps)) {
                    return element
                  }
                })
                setData(filter)
              }else{
              setData(db)
              }
            } else {
              if (temps.length > 0) {
                const filter = db.filter(element => {
                  if (element.temperament?.includes(temps)) {
                    return element
                  }
                })
                setData(filter.reverse())
              }else{
                setData(db.reverse())
              }
            }
          }
        })

      setCurrentPage(1)
    }, [browser, order, temps, bdOrApi]);
    useEffect(() => {
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
      <Center>
        <button className='defaultButton'onClick={handlePreviousPage}>Previous</button>
        <button className='defaultButton'onClick={handleNextPage}>Next</button>
      </Center>
    );
  };

  const Center = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
  `