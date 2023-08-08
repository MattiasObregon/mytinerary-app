import { Link as Anchor } from 'react-router-dom'

export default function CardPolaroid({item}) {
  return (
    <Anchor to={`/city/${item.id}`} key={item.id} className="w-[308px] h-[200px] relative">
        <img src={item.photo} alt={item.id} className="w-full h-full object-cover rounded-md" />
        <p className="absolute bottom-2 left-2 text-white font-semibold">{item.city}</p>
    </Anchor>
  )
}