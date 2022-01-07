import React from 'react'
import '../App.css'
import Animation from './video/Animation.mp4';
const Home = () => {
    return (
        <div className='myclass'>
            {/* <img src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='img_class' /> */}
            <video autoPlay loop className='videoclass'>
                <source src={Animation} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home
