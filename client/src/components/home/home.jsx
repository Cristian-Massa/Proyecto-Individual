import React, { useEffect, useRef } from "react";
import { Gallery } from "../Gallery/gallery";
import { Pagination } from "../pagination/pagination";
export function Home() {

    return (
        <div>
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