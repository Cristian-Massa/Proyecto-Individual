import React from "react";
import { styled, createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    html, body, #root, .App{
        height: 100%;
    }
    main{
        background-image: url('https://sb.ecobnb.net/app/uploads/sites/3/2022/04/copertina-1.jpg');
        background-repeat: no-repeat, repeat;
        background-size: cover;
    }
    //((((((((((((((((Galeria))))))))))))))))
    #gallery{
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: 100%;
        height: 85vh;
        overflow-y: scroll;
    }


    // (((((((((((((((Landing)))))))))))))))
    // Separador
    .custom-shape-divider-bottom-1690052746 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }
    
    .custom-shape-divider-bottom-1690052746 svg {
        position: relative;
        display: block;
        width: calc(162% + 1.3px);
        height: 399px;
    }
    
    .custom-shape-divider-bottom-1690052746 .shape-fill {
        fill: rgba(4, 66, 2, 0.5);
    }

    .defaultButton{
        padding: 20px;
        margin: 2px;
        border-radius: 2rem;
        background-color: rgb(4, 66, 2);
        color: white;
        font-size: large;
        font-weight: 600;
        z-index: 2;
        transition: background-color, color 0.2s;
    }
    .defaultButton:hover{
        background-color: white;
        color:black;
    }
    .invisible{
        background-color: transparent;
        border: none;
    }
`