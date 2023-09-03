import { useEffect } from "react"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import { useSelector, useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"

const { read_carousel } = city_actions

export default function Home() {
    const carousel = useSelector( store => store.cities.carousel )
    const dispatch = useDispatch()

    useEffect(() => {
      if (carousel.length === 0) {
        dispatch(read_carousel())
      }
    }, [])

    return (
      <main className="container mx-auto mt-80">
          <Carousel data={carousel}/>
          <Footer />
      </main>
    )
}