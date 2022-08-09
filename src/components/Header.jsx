import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

const Header = (props) => {
  return (
    <Fragment>
      <div className="grid justify-items-end grid-cols-2 text-orange-500 shadow-md p-3">
        <div className="mr-96">
          <span className="text-3xl cursor-pointer">Munchies</span>
        </div>
        <div>
          <button className="px-6 py-2 mr-56 text-orange-500 rounded-md outline outline-orange-500 hover:bg-orange-500 hover:text-white duration-300 ease-in-out">
            <FontAwesomeIcon icon={faCartPlus} />
           <span className="ml-1">Cart</span>
           <span className="ml-2 bg-orange-500 text-white rounded-xl p-1">0</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
