import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContainerImage, StyledSlider } from './styles';

export const SliderCars = ({ slider }) => {

    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    return (
        <StyledSlider>
            <Slider {...settings}>
                {slider.map((s) => {
                    return (
                        <ContainerImage key={s.id}>
                            <img src={s.url.replace(/\w\.jpg/gi, 'W.jpg')} alt="Banner 1" />
                        </ContainerImage>
                    )
                })}


            </Slider>
        </StyledSlider>
    );
};


