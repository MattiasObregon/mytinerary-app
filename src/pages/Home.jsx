import Carousel from "../components/Carousel"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Home() {
    const [show, setShow] = useState(true)
    const [data, setData] = useState([])

    useEffect(
        ()=>{
            axios('/data.json')
                .then( res => setData(res.data))
                .catch( err => console.log(err))
        },
        []
    )

  return (
    <main className="container mx-auto mt-80">
        <Carousel data={data}/>
    </main>
  )
}