import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './Carrusel.css'

const items = [
    {
        src: 'https://4.bp.blogspot.com/-JMELF9YnRDs/Vs2p4gzxUsI/AAAAAAAAAUc/HOMNUdLG-ZQ/s1600/m1.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://3.bp.blogspot.com/-7Rr2SDhGcQo/Vs2qFalmlYI/AAAAAAAAAUg/1gFQR4uZYa0/s1600/m22.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://merceriacadi.com/wp-content/uploads/2021/05/merceria-Cadi-024.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Carrousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    console.log(props)
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = props.images.map((item) => {
        console.log(item)
        return (
            
            <CarouselItem class="container"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img  class ="carrusel"src={item.src} alt={item.altText}  />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
 
            </CarouselItem>
            
        );
    });
    
    
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={props.images} activeIndex={props.images} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" onClickHandler={previous} />
            <CarouselControl direction="next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carrousel;