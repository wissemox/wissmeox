import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Carousel from 'react-elastic-carousel'

const Address = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      
    return (
        <div data-Aos="fade" className="border-b pl-10 mt-4 color-blue">
            <p>Appele nous Numere Telephone : 71701002</p>
        </div>
    )
}

export default Address
