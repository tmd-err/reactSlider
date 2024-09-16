import React from 'react';
import leftArrow from '../icons/leftArrow.svg'
import rightArrow from '../icons/rightArrow.svg'
const BtnSlider = ({direction,moveSlide}) => {
    return (
        <div>
            <button onClick={moveSlide} className={direction=='next' ?'btn-slide next':'btn-slide prev'}>
                <img width={50} src={direction=='next'?rightArrow:leftArrow} alt="" />
            </button>
        </div>
    );
};

export default BtnSlider;