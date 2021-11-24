import React, {useEffect, useState} from "react";
import './previewMarkUp.css'
import {Template} from "./Templates/Template";


const Preview = ({invoice, componentRef, bg}: any) => {

    const [h, setH] = useState(window.innerHeight)

    useEffect(() => void null, [invoice, bg]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setH(window.innerHeight)
        })
    }, []);


    return (
        <Template invoice={invoice}/>
    )
}

export default Preview
