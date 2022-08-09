import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pav Bhaji",
    description:
      "Bhaji made with peas, tomatoes, capcicum and potatoes served with pav",
    price: 120,
  },
  {
    id: "m2",
    name: "Vada Pav",
    description: "A Maharashtrian Speciality",
    price: 15,
  },
  {
    id: "m3",
    name: "Chole Bhature",
    description: "Delhi Special",
    price: 100,
  },
  {
    id: "m4",
    name: "Steamed Momos",
    description: "Veg steamed momos served with mayonaise and schezwan chutney",
    price: 80,
  },
];

const Meals = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <div className="my-3 rounded-xl shadow-md border border-gray-500">
      <div className="p-3 grid grid-cols-2">
        <div>
          <h1 className="text-4xl">{meal.name}</h1>
          <p className="w-96 mt-3 text-gray-700">{meal.description}</p>
        </div>
        <div className="ml-64">
          <p className="ml-14 text-xl">{meal.price} Rs</p>
          <div className="flex space-x-3 mt-3">
            <button className="bg-orange-500 p-2 w-10 rounded-xl text-white text-xl font-bold"><FontAwesomeIcon icon={faMinus}/></button>
            <input className="text-center border border-gray-500 rounded-xl w-14" type="number" min="0" />
            <button className="bg-orange-500 p-2 w-10 rounded-xl text-white text-xl font-bold"><FontAwesomeIcon icon={faPlus}/></button>
          </div>
        </div>
      </div>
      </div>
    );
  });

  return <div className="ml-64 mt-10 mr-56">{mealList}</div>;
};

export default Meals;
