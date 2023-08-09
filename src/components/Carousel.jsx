import Arrow from "../components/Arrow";
import CardPolaroid from "../components/CardPolaroid";
import { useState } from "react";

export default function Carousel({data}) {
    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)

    function next_slide() {
        if (data.length <= counterTo){
            setCounter(0)
            setCounterTo(4)
    }   else {
            setCounter(counter + 4)
            setCounterTo(counterTo + 4)
    }
}

    function prev_slide() {
        if (counter <= 0){
            setCounter(data.length - 4)
            setCounterTo(data.length)
    }   else {
            setCounter(counter - 4)
            setCounterTo(counterTo - 4)
    }
}

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold font-segoe-ui">Find the perfect destination</h1>
        <div className="md:text-left">
          <p className="my-10 text-2xl md:w-4/5 font-segoe-ui">
            Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
          </p>
        </div>
        <button className="mt-4 bg-blue-600 text-xl text-white font-bold py-4 px-8 w-64 rounded-md">
          View More
        </button>
      </div>
          <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide}/>
            <div className="md:w-1/2 flex flex-col justify-center items-center ml-4">
              <div className="flex flex-wrap gap-3">
                {data.slice(counter, counterTo).map((item) => (<CardPolaroid key={item.id} item={item} /> ))}
              </div>
            </div>
          <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide}/>
    </div>
  )
}