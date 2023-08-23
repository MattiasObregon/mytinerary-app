import { useParams, Link as Anchor} from "react-router-dom";

export default function CityDetail() {
  const { city_id } = useParams();

  return (
    <div className="flex flex-col items-center">
      <p>CityDetail {city_id} under construction</p>
      <Anchor to="/cities">
        <button className="mt-4 bg-indigo-600 text-white px-3 py-1 rounded-md">
          Go Back
        </button>
      </Anchor>
    </div>
  );
}
