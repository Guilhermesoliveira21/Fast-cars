import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../../context/useCategory";
import { Card, Container } from "./styles";

import sedam from '../../assets/sedans.jpg';
import hatch from '../../assets/hatch.jpg';
import picapes from '../../assets/picapes.jpg';
import suv from '../../assets/suv.jpg';
import eletrico from '../../assets/eletricos.jpg';
import { http } from "../../api/http";
import { CarsContext } from "../../context/useCars";

export const CardContainer = () => {

    const { category, setCategory, data } = useContext(CarsContext);

    const categoryCars = [
        {
        id: 1,
        title: 'Sedans',
        link: 'MLB2712',
        image: sedam
    }, 
    {
        id: 2,
        title: 'Hatch',
        link: 'MLB2711',
        image: hatch
    },
    {
        id: 3,
        title: 'Picapes',
        link: 'MLB2713',
        image: picapes
    },
    {
        id: 4,
        title: 'Suvs',
        link: 'MLB1743',
        image: suv
    },
    {
        id: 5,
        title: 'Eletricos',
        link: 'MLB1743',
        image: eletrico
    }
]

    function clickCategory(event) {
        const {alt} = event.target;
        // setCategory(alt)
    }



    return (
        <Container onClick={clickCategory}>
            {categoryCars.map((c) => {
                return (
                    <Card to='/veiculos'>
                        <img src={`${c.image}`} alt={c.link} />
                        <h3>{c.title}</h3>
                    </Card>
                )
            })}
        </Container>
    )
}