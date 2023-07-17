import React, { useEffect, useRef } from "react";
import { Gallery } from "../Gallery/gallery";
import { Pagination } from "../pagination/pagination";
import { Nav } from "../nav/nav";
import { Options } from "../Options/options";
export function Home() {

    return (
        <div>
            <header>
                <Nav />
                <Options />
            </header>
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
        </div>
    )
}