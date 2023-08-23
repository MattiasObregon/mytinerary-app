import { useState, useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"
import apiUrl from '../apiUrl.js'
import Footer from "../components/Footer"

export default function Home() {
    const [data, setData] = useState([])

    useEffect(
        ()=>{
            axios(apiUrl+'cities/carousel')
                .then( res => setData(res.data.data_carousel))
                .catch( err => console.log(err))
        },
        []
    )

  return (
    <main className="container mx-auto mt-80">
        <Carousel data={data}/>
        <Footer />
    </main>
    
  )
}