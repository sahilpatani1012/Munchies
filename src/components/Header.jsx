import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <div className="grid justify-items-end grid-cols-2 text-orange-500 shadow-md p-3">
        <div className="mr-96">
          <span className="text-3xl cursor-pointer">Munchies</span>
        </div>
        <div>
          <button className="px-3 py-1 mr-56 text-orange-500 rounded-md outline outline-orange-500 hover:bg-orange-500 hover:text-white duration-300 ease-in-out">
            Cart (0)
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
