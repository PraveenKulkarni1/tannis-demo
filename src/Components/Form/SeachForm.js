// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useSearch } from "../contextApi/SearchContext";
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// function SeachForm() {
//   const navigate = useNavigate();
//   const [values, setValues] = useSearch();

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ✅ Correct spelling
//     try {
//       let { data } = await axios.get(
//         `https://tannis.in/api/search-product/${values}`
//       );
//       setValues({ ...values, result: data });
//       navigate("/search");
//       console.log(values);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       {/* <form className="d-flex" role="search" onSubmit={handleSubmit}>
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           value={valueskeyword}
//           onChange={(e) => setValues({ ...values, keyword: e.target.value })}
//         />

//       </form> */}

//       <form className="d-flex px-2 " role="search" onSubmit={handleSubmit}>
//         <FaSearch size={20} className="my-auto" style={{ color: "gray" }} />
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           value={values.keyword}
//           onChange={(e) => setValues({ ...values, keyword: e.target.value })}
//         />
//       </form>
//     </div>
//   );
// }

// export default SeachForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearch } from "../contextApi/SearchContext";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function SeachForm() {
  const navigate = useNavigate();
  const [values, setValues] = useSearch();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Correct spelling
    try {
      let { data } = await axios.get(
        `https://tannis.in/api/search-product/${values}`
      );
      setValues({ ...values, result: data });
      navigate(`/search/${values.keyword}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex px-2 " role="search" onSubmit={handleSubmit}>
        <FaSearch
          size={20}
          className="my-auto SeachForm"
          style={{ color: "gray" }}
        />
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
      </form>
    </div>
  );
}

export default SeachForm;
