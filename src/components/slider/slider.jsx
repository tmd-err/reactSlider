import React, { useEffect, useState } from 'react';
import sliderObject from './sliderObject';
import './slider.css' ;
import BtnSlider from './BtnSlider';

function Slider(props) {
    const [slideIndex , setSlideIndex] = useState(1) ; 

    const next =()=>{
        if(slideIndex != sliderObject.length)
        {
            setSlideIndex(slideIndex + 1) ;
        }else{
            setSlideIndex(1)
        }
    }
    const moveDot =(index)=>{
        setSlideIndex(index)
    }
    const prev = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(sliderObject.length);
        }
    };
    
    return (
        <div className='container-slider'>
            {sliderObject.map((ele,obj)=>{
                return(
                    <div key={obj} className={slideIndex === obj + 1 ? 'slide animate' : 'slide'}>
                        <img height={200} width={200} src={process.env.PUBLIC_URL + `/img/img${obj + 1}.jpg`} alt="Not found" />

                    </div>

                )
            })}
            <div className="btn-container">
                <BtnSlider moveSlide = {prev} direction = 'prev'/>
                <BtnSlider moveSlide = {next} direction = 'next'/>
            </div>
            <div className="container-dots">
                {Array.from({length:5}).map((e,i)=>(
                    <div onClick={()=>moveDot(i+1)} className={
                        slideIndex == i+1?'dot active-dot':'dot'
                    }
                    ></div>
                ))}
            </div>
        </div>
        
    );
}

export default Slider;