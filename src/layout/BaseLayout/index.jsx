import { Link, Outlet, useLocation } from "react-router-dom";
import { mainLogo } from "../../assets";

const BaseLayout = () => {
  const location = useLocation()

  console.log(location);
  return (
    <div className="flex">
      <div className="w-1/6 h-screen pt-12">
        <div className="flex justify-center items-center gap-x-3">
          <img src={mainLogo} alt="" className="w-10"/>
          <p className="text-2xl font-bold">Base</p>
        </div>
        <ul className="flex flex-col mt-10 text-gray-500 gap-y-3">
          <li className="pl-7 py-3 bg-gradient-to-r from-mainColor from-10%">
            <Link className="text-white" to={'/'}>
              Dashboard
            </Link>
          </li>
          <li className="pl-7">
            <Link to={'/analytics'}>
              Analytics
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow bg-mainGray">
        <Outlet/>
      </div>
    </div>
  )
}

export default BaseLayout;