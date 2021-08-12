
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './Carrusel.css'


// const items = [
//     {
//         src: 'https://merceriacadi.com/wp-content/uploads/2021/05/merceria-Cadi-024.jpg',
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         id: "123"
//     },
//     {
//         src: 'https://3.bp.blogspot.com/-7Rr2SDhGcQo/Vs2qFalmlYI/AAAAAAAAAUg/1gFQR4uZYa0/s1600/m22.jpg',
//         altText: 'Slide 2',
//         caption: 'Slide 2',
//         id: "1234"
//     },
//     {
//         src: 'https://merceriacadi.com/wp-content/uploads/2021/05/merceria-Cadi-024.jpg',
//         altText: 'Slide 3',
//         caption: 'Slide 3',
//         id: "12345"
//     }
// ];

const Carrousel = (props) => {
    const items = props.images
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    console.log("queremos saber que es" , props)
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

    const slides = items.map((item) => {
        // console.log(item.image_url)
        return (

            <CarouselItem class="container"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <img class="carrusel" src={item.image_url} alt={item.altText} width="400" height="400" />
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
            <CarouselIndicators items={props.images} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" onClickHandler={previous} />
            <CarouselControl direction="next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carrousel;