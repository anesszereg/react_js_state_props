import React, { useState } from 'react'
import './ImageSlider.css'
import image1 from '../../assets/images/image-product-1.jpg'
import image2 from '../../assets/images/image-product-2.jpg'
import image3 from '../../assets/images/image-product-3.jpg'
import image4 from '../../assets/images/image-product-4.jpg'

function IamgeSlider() {

    const [bigImage, setBigImage] = useState(image1);

    const handleImageClick = (newImage) => {
      setBigImage(newImage);
    };
    return (
        <div className='imageContainer'>
            <div className="big_image">
                <img src={bigImage} alt=""/>
            </div>
            <div className="other_image">
        <img src={image1} alt="" onClick={() => handleImageClick(image1)} />
        <img src={image2} alt="" onClick={() => handleImageClick(image2)} />
        <img src={image3} alt="" onClick={() => handleImageClick(image3)} />
        <img src={image4} alt="" onClick={() => handleImageClick(image4)} />
      </div>

        </div>
    )
}

export default IamgeSlider
