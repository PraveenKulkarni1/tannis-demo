import React, { useState } from "react";
import Layout from "./Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import FiltrProduct from "./../Pages/FiltrProduct";

import { useSearch } from "../contextApi/SearchContext";

function Search() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});
  const navigate = useNavigate();
  const [values] = useSearch();

  const products = values?.result?.data;
  const toggleLike = (id, event) => {
    event.preventDefault();
    setLikedProducts((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  return (
    <Layout title={"All-Tannis-products"}>
      {products?.length > 0 ? (
        <>
          {" "}
          <div className="container">
            <div className="row filter-container">
              <div className="col-md-4 col-lg-3">
                <FiltrProduct />
              </div>
              <div className="col-md-8 col-lg-9 mt-3">
                <div className="row">
                  <div className="selectDrop">
                    <div className="col-md-4 col-10 d-flex justify-content-end">
                      <p className="w-25 p-2 sorttxt">Sort by:</p>
                      <select
                        className="form-select form-select dpBtn mb-3 border-1"
                        aria-label="small select example"
                      >
                        <option selected>Relevance</option>
                        <option value={1}>Price Low to High</option>
                        <option value={2}>Price High to Low</option>
                        <option value={3}>Discount Low to High</option>
                        <option value={4}>Discount High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row productsRow">
                  {products.length > 0 &&
                    products.map((item, i) => {
                      let {
                        id,
                        product: {
                          img,
                          description,
                          title,
                          thumbnail,
                          discount,
                          p_name,
                          brand,
                          mrp,
                        },
                      } = item;

                      return (
                        <NavLink
                          to="/product-details"
                          className="d-flex col-md-4 col-sm-6 col-6 mb-3"
                          key={id}
                        >
                          <div className="card productCard border-0 shadow-sm g-2">
                            <div className="iconAbs d-flex justify-content-end align-items-center">
                              <span
                                className={`heartIcon ${
                                  likedProducts[id] ? "red-heart" : ""
                                }`}
                                onClick={(e) => toggleLike(id, e)}
                              >
                                {likedProducts[id] ? (
                                  <FaHeart className="pFaHeaert" />
                                ) : (
                                  <CiHeart />
                                )}
                              </span>
                            </div>
                            <div className="iconRel">
                              <img
                                src={`https://tannis.in${item.thumbnail}`}
                                className="card-img-top"
                                alt="..."
                              />
                            </div>
                            <div className="card-body">
                              <p className="card-title proTitle">{title}</p>
                              <h6 className="card-text proText">{p_name}</h6>
                              <h6 className="titilHead">
                                <MdCurrencyRupee />
                                {mrp - discount}
                                {discount && (
                                  <del className="delProduct">
                                    <MdCurrencyRupee />
                                    {mrp}
                                  </del>
                                )}
                                {discount && (
                                  <span className="offdes">
                                    ({Math.floor((discount / mrp) * 100)}%)
                                  </span>
                                )}
                              </h6>
                              <p className="offerP3">1 Offer</p>
                              <p className="offerP4">15ml</p>
                              <button className="proCartBtn hoverButton">
                                Add to Bag
                              </button>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container cartEmpBg my-xl-5 my-lg-5 my-md-3 my-sm-3 my-2">
            <div className="row  justify-content-center align-items-center text-center ">
              <div className="col-8 my-5">
                <h1 className="cartOh1">Nothing to find here</h1>
                <p className="cartOp">No results found for your search</p>
                <button class="sec1Btn" onClick={() => navigate("/products")}>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Search;
