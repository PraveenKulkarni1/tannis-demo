// import React, { useState, useEffect } from "react";
// import "./secHeader.css";
// import { Link } from "react-router-dom";
// import WhatsNew from "./Navbar/WhatsNew";
// import Makeup from "./Navbar/Makeup";
// import Skin from "./Navbar/Skin";
// import Hair from "./Navbar/Hair";
// import Fragrance from "./Navbar/Fragrance";
// import BathBody from "./Navbar/BathBody";
// import ToolsAppn from "./Navbar/ToolsAppn";
// import MomBoby from "./Navbar/MomBoby";
// import Wellness from "./Navbar/Wellness";
// import Minis from "./Navbar/Minis";
// import Homegrown from "./Navbar/Homegrown";
// import axios from "axios";
// const SecHeader = () => {
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     getCategory();
//   }, []);
//   const getCategory = async () => {
//     try {
//       const { data } = await axios.get("https://tannis.in/api/categories/");
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <>
//       <div className="container-fluid ">
//         <div className="secNavHeader ">
//           <nav className="navbar navbar-expand-lg  bg-body-tertiar">
//             <div className="container">
//               <ul className="navbar-nav">
//                 <li className="dropdown secDropdown mainDropdown">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     What's New
//                   </Link>
//                   <WhatsNew />
//                 </li>

//                 <li className="dropdown secDropdown mainDropdown">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Makeup
//                   </Link>
//                   <Makeup />
//                 </li>
//                 <li className="dropdown secDropdown mainDropdown">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Skin
//                   </Link>
//                   <Skin />
//                 </li>
//                 <li className="dropdown secDropdown mainDropdown">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Hair
//                   </Link>
//                   <Hair />
//                 </li>
//                 <li className="dropdown secDropdown mainDropdown">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Fragrance
//                   </Link>
//                   <Fragrance />
//                 </li>
//                 <li className="dropdown secDropdown mainDropdown">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Bath & Body
//                   </Link>
//                   <BathBody />
//                 </li>
//                 <li className="">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     aria-expanded="false"
//                   >
//                     Tool & Appliances
//                   </Link>
//                   <ToolsAppn />
//                 </li>
//                 <li className="">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     aria-expanded="false"
//                   >
//                     Mom & Baby
//                   </Link>
//                   <MomBoby />
//                 </li>
//                 <li className="">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     aria-expanded="false"
//                   >
//                     Wellness
//                   </Link>
//                   <Wellness />
//                 </li>
//                 <li className="">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     aria-expanded="false"
//                   >
//                     Minis
//                   </Link>
//                   <Minis />
//                 </li>
//                 <li className="">
//                   <Link
//                     to="/"
//                     className="nav-link px-3  bg-white cardTextp"
//                     aria-expanded="false"
//                   >
//                     Homegrown
//                   </Link>
//                   <Homegrown />
//                 </li>
//               </ul>
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarMegaMenu"
//               ></div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SecHeader;

import React, { useState, useEffect } from "react";
import "./secHeader.css";
import { Link, useNavigate } from "react-router-dom";
import WhatsNew from "./Navbar/WhatsNew";
import Makeup from "./Navbar/Makeup";
import Skin from "./Navbar/Skin";
import Hair from "./Navbar/Hair";
import Fragrance from "./Navbar/Fragrance";
import BathBody from "./Navbar/BathBody";
import ToolsAppn from "./Navbar/ToolsAppn";
import MomBoby from "./Navbar/MomBoby";
import Wellness from "./Navbar/Wellness";
import Minis from "./Navbar/Minis";
import Homegrown from "./Navbar/Homegrown";
import axios from "axios";
import { useProductContext } from "../contextApi/ProductContext";
const SecHeader = () => {
  const { setCategoryProducts } = useProductContext();
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    try {
      const { data } = await axios.get("https://tannis.in/api/categories/");
      setCategory(data);
    } catch (err) {
      console.error("Error fetching products for category:", err);
    }
  };
  let handleCateClick = async (categoryId) => {
    try {
      const data = await axios
        .get(`https://tannis.in/api/product-by-mid-category/${categoryId}`)
        .then((response) => {
          setCategoryProducts(categoryId, response.data);
          navigate("/products");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="secNavHeader ">
          <nav className="navbar navbar-expand-lg  bg-body-tertiar">
            <div className="container">
              <ul className="navbar-nav">
                {category?.map((category, i) => {
                  return (
                    <li
                      className="dropdown secDropdown mainDropdown"
                      key={category.id}
                    >
                      <Link
                        to="/"
                        className="nav-link px-3  bg-white cardTextp"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => handleCateClick(category.id)}
                      >
                        {category.c_name}
                      </Link>
                      {category.c_name === "Makeups" && <Makeup />}
                      {category.c_name === "Skincare" && <Skin />}
                      {category.c_name === "Hair" && <Hair />}
                      {category.c_name === "Fragrance" && <Fragrance />}
                      {category.c_name === "Bath & Body" && <BathBody />}
                      {category.c_name === "Tools & Appliances" && (
                        <ToolsAppn />
                      )}
                      {category.c_name === "Mom & Baby" && <MomBoby />}
                      {category.c_name === "Wellness" && <Wellness />}
                      {category.c_name === "Minis" && <Minis />}
                      {category.c_name === "Homegrown" && <Homegrown />}
                    </li>
                  );
                })}
              </ul>
              <div
                className="collapse navbar-collapse"
                id="navbarMegaMenu"
              ></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SecHeader;
