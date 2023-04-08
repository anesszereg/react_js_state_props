import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import IamgeSlider from '../../Components/ImageSlider/IamgeSlider'
import Order from '../../Components/Order/Order'

function Home() {
    return (
        <div style={{
            width:'100%',
        }}>
            <Navbar/>
            <div style={
                {
                    width:'100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap:'200px'
                }
            }>
                <IamgeSlider/>
                <Order/>
            </div>
        </div>
    )
}

export default Home
