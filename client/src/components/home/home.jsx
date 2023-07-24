import React, { useEffect, useRef } from "react";
import { Gallery } from "../Gallery/gallery";
import { Pagination } from "../pagination/pagination";
import { Nav } from "../nav/nav";
import { Options } from "../Options/options";
import  styled  from "styled-components";
export function Home() {

    return (
        <HomeStyled>
            <HeaderStyled>
                <Nav />
                <Options/>
            </HeaderStyled>
            <section>
                <article>
                    <Gallery />
                </article>
            </section>
            <section>
                <article>
                    <Pagination />
                </article>
            </section>
        </HomeStyled>
    )
}

const HeaderStyled = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center
  gap: 10px;
  background-color: rgba(41, 41, 41, 0.7)
`

const HomeStyled = styled.div`
    display: grid;
    heigth: 100vh;

`