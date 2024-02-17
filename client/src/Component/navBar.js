import { Link } from 'react-router-dom';
import { ReactComponent as logoSvg } from "../logo.svg"

function Navbar() {

  

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>file_type_xml</title>
              <path d="M20.42,21.157l2.211,2.211L30,16,22.631,8.631,20.42,10.843,25.58,16Z" style={{ fill: '#f1662a' }} />
              <path d="M11.58,10.843,9.369,8.631,2,16l7.369,7.369,2.211-2.211L6.42,16Z" style={{ fill: '#f1662a' }} />
              <path d="M17.411,7.677l1.6.437-4.42,16.209-1.6-.437,4.42-16.209Z" style={{ fill: '#f1662a' }} />
            </svg>
          </div>
          <ul className="flex">


            <li className="relative group text-white p-2 hover:bg-gray-500">
              View
              <ul className="mt-2 mr-0 absolute hidden bg-gray-800 group-hover:block z-50 w-40">
                <button className="text-white text-left block w-full p-2  hover:bg-gray-500" >All</button>
                <button className="text-white text-left block w-full p-2 hover:bg-gray-500" >XML1</button>
                <button className="text-white text-left block w-full p-2 hover:bg-gray-500" >!XML1</button>
              </ul>
            </li>
            <button className="text-white p-2 hover:bg-gray-500">Run Testd</button>
            <div className="flex items-center">
              <input
                type="file"
                id="select-file"
                hidden
                // ref={fileInputRef}
                // onChange={upload}
                multiple
                accept="application/xml"
              />
              <label
                htmlFor="select-file"
                className="text-white p-2 hover:bg-gray-500 cursor-pointer"
              >
                Choose file
              </label>
            </div>
          </ul>
        </div>
      </nav>
    </>


  );
}

export default Navbar;
