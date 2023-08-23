import { Link as Anchor } from 'react-router-dom';

export default function CardCity({ item }) {
  return (
    <div key={item.id} className="h-[200px] relative flex-shrink-0 p-2">
      <div className="absolute top-2 left-2 text-white font-semibold flex flex-col">
        <p className="px-[20px] pt-[10px]">{item.city}</p>
        <div className="flex px-[15px] pt-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p>{item.country}</p>
        </div>
      </div>
      <img src={item.photo} alt={item.id} className="w-full h-full object-cover rounded-md" />
      <Anchor
        to={`/city/${item._id}`}
        className="absolute bottom-[25px] left-[30px] bg-indigo-600 text-white px-[15px] py-[6px] rounded-md"
      >
        View More
      </Anchor>
    </div>
  );
}
