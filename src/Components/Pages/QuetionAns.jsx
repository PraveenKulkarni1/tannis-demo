// import React from "react";
// import "./queAns.css";
// import { IoIosInformationCircleOutline } from "react-icons/io";
// function QuetionAns() {
//   return (
//     <div>
//       <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
//         <div className="row">
//           <div className="col-md-5">
//             <h3 className="proRatMain">Questions And Answers</h3>
//           </div>
//           <div className="col-md-5">
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//             </form>
//           </div>
//           <div className="col-md-2">
//             <select
//               className="form-select form-select dpBtn mb-3 border-0"
//               aria-label="small select example"
//             >
//               <option selected>Most Recent</option>
//               <option value={1}>Oldest</option>
//             </select>
//           </div>
//         </div>

//         <div className="row my-1d  d-flex justify-content-between align-items-center">
//           <div className="col-md-6 queh1">
//             Don't see the answer you're looking for?
//           </div>
//           <div className="col-md-6 d-flex justify-content-end">
//             <button className="queBtn1">Post a question</button>
//           </div>
//         </div>

//         <div className="row my-2 ">
//           <form> </form>
//           <div className="col-md-8">
//             <div className="mb-3">
//               <textarea
//                 className="form-control"
//                 id="exampleFormControlTextarea1"
//                 placeholder="Write a question"
//                 rows={3}
//                 defaultValue={""}
//               />
//             </div>
//           </div>
//           <div className="col-md-4 ">
//             <div className="d-flex gap-2">
//               <button className="queBtn1">Cancel</button>
//               <button className="queBtn2">Post</button>
//             </div>
//             <div className="d-flex gap-1 flex-row my-1">
//               <IoIosInformationCircleOutline size={25} />
//               <p className="quePara">
//                 Your submitted question will be publicly visible on the product
//                 page for the seller and other customers to answer
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuetionAns;

import React, { useState } from "react";
import "./queAns.css";
import { IoIosInformationCircleOutline } from "react-icons/io";

function QuetionAns() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  return (
    <div>
      <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
        <div className="row">
          <div className="col-md-5">
            <h3 className="proRatMain">Questions And Answers</h3>
          </div>
          <div className="col-md-5 my-xl-0 my-lg-0 my-md-0 my-sm-1 my-1">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-md-2 my-xl-0 my-lg-0 my-md-0 my-sm-2 my-2">
            <select
              className="form-select form-select dpBtn mb-3 border-0 "
              aria-label="small select example"
            >
              <option selected>Most Recent</option>
              <option value={1}>Oldest</option>
            </select>
          </div>
        </div>

        {/* Post a Question Section */}
        <div className="row my-1 d-flex justify-content-between align-items-center">
          <div className="col-md-6 queh1">
            Don't see the answer you're looking for?
          </div>
          <div className="col-md-6 postQues my-xl-0 my-lg-0 my-md-0 my-sm-2 my-2">
            <button
              className="queBtn1"
              onClick={() => setShowQuestionForm(true)}
            >
              Post a question
            </button>
          </div>
        </div>

        {showQuestionForm && (
          <div className="row my-2">
            <div className="col-md-8">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Write a question"
                  rows={3}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex gap-2">
                <button
                  className="queBtn1"
                  onClick={() => setShowQuestionForm(false)}
                >
                  Cancel
                </button>
                <button className="queBtn2">Post</button>
              </div>
              <div className="d-flex gap-1 flex-row my-1">
                <IoIosInformationCircleOutline size={25} />
                <p className="quePara">
                  Your submitted question will be publicly visible on the
                  product page for the seller and other customers to answer.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuetionAns;
