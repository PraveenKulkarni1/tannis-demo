// import React, { useState } from "react";
// import "./specifFea.css";
// import { IoMdCheckmark } from "react-icons/io";
// import { useCollapse } from "react-collapsed";

// function SpecifFea() {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

//   const [activeId2, setActiveId2] = useState(null);
//   const toggleCollapse2 = (id) => {
//     setActiveId2(activeId2 === id ? null : id);
//   };
//   return (
//     <div>
//       <div className=" justify-content-center speBorder">
//         <div className="">
//           {[
//             {
//               id: 1,
//               question: "Special Features",
//               answer: (
//                 <>
//                   <div className="d-flex justify-content-around">
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-around">
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               ),
//             },
//             {
//               id: 2,
//               question: "Super ingredients",
//               answer: (
//                 <>
//                   <div className="d-flex justify-content-around">
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-around">
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                     <div>
//                       <p>
//                         <IoMdCheckmark />
//                         Shea Butter
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               ),
//             },
//             {
//               id: 3,
//               question: "Product Details",
//               answer: (
//                 <>
//                   <div className="d-flex justify-content-between px-5">
//                     <h6>Country Of Origin</h6>
//                     <p>India</p>
//                   </div>
//                   <div className="d-flex justify-content-between px-5">
//                     <h6>Conscious</h6>
//                     <p>Cruelty Free</p>
//                   </div>

//                   {isExpanded ? (
//                     ""
//                   ) : (
//                     <button className="expand" {...getToggleProps()}>
//                       Read More
//                     </button>
//                   )}
//                   <section {...getToggleProps()}>
//                     <div className="d-flex justify-content-between px-5">
//                       <h6>Country Of Origin</h6>
//                       <p>India</p>
//                     </div>
//                     <div className="d-flex justify-content-between px-5">
//                       <h6>Conscious</h6>
//                       <p>Cruelty Free</p>
//                     </div>
//                   </section>

//                   {isExpanded ? (
//                     ""
//                   ) : (
//                     <button {...getToggleProps()}>Read Less</button>
//                   )}
//                 </>
//               ),
//             },
//           ].map((item) => (
//             <div key={item.id} className="border-bottom border-secondary py-3">
//               <div
//                 className="d-flex justify-content-between align-items-center px-2"
//                 role="button"
//                 onClick={() => toggleCollapse2(item.id)}
//               >
//                 <h5 className="pdtText">{item.question}</h5>
//                 <h3>{activeId2 === item.id ? "-" : "+"}</h3>
//               </div>
//               {activeId2 === item.id && (
//                 <p className="c fagP mt-2 ">{item.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SpecifFea;

import React, { useState } from "react";
import "./specifFea.css";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function SpecifFea() {
  const [activeId, setActiveId] = useState(null);
  const toggleCollapse = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const [expandedItems, setExpandedItems] = useState({});

  const toggleReadMore = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="justify-content-center speBorder">
        <div className="">
          {[
            {
              id: 1,
              question: "Special Features",
              answer: (
                <>
                  <div className="d-flex justify-content-around">
                    <div>
                      <p className="iconText">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                    <div>
                      <p className="iconText">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div>
                      <p className="iconText">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                    <div>
                      <p className="iconText">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              id: 2,
              question: "Super ingredients",
              answer: (
                <>
                  <div className="d-flex justify-content-around">
                    <div>
                      <p className="iconText">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                    <div>
                      <p className="iconText">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div>
                      <p className="">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                    <div>
                      <p className="">
                        <IoMdCheckmark />
                        Shea Butter
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              id: 3,
              question: "Product Details",
              answer: (
                <>
                  <div className="d-flex justify-content-between px-5">
                    <h6 className="">Country Of Origin</h6>
                    <p className="">India</p>
                  </div>
                  <div className="d-flex justify-content-between px-5">
                    <h6 className="">Conscious</h6>
                    <p className="">Cruelty Free</p>
                  </div>

                  {!expandedItems[3] ? (
                    <Link
                      className="expand pdtText px-2"
                      onClick={() => toggleReadMore(3)}
                    >
                      Read More
                      <IoIosArrowDown />
                    </Link>
                  ) : (
                    <>
                      <section>
                        <div className="d-flex justify-content-between px-5">
                          <h6 className="">Country Of Origin</h6>
                          <p className="">India</p>
                        </div>
                        <div className="d-flex justify-content-between px-5">
                          <h6 className="">Conscious</h6>
                          <p className="">Cruelty Free</p>
                        </div>
                      </section>
                      <Link
                        onClick={() => toggleReadMore(3)}
                        className="pdtText px-2"
                      >
                        Read Less
                        <IoIosArrowUp />
                      </Link>
                    </>
                  )}
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.id}
              className="border-bottom border-secondary py-2 py-lg-3"
            >
              <div
                className="d-flex justify-content-between align-items-center px-2 "
                role="button"
                onClick={() => toggleCollapse(item.id)}
              >
                <h5 className="pdtText">{item.question}</h5>
                <h3>{activeId === item.id ? "-" : "+"}</h3>
              </div>
              {activeId === item.id && (
                <p className=" fagP mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecifFea;
