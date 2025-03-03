import React, { useState, useEffect } from "react";
import "./products.css";
import Layout from "./../Layout/Layout";
import { NavLink } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import FiltrProduct from "./FiltrProduct";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    getAllproduct();
  }, []);

  const getAllproduct = async () => {
    try {
      const result = await axios.get("https://tannis.in/api/products/");
      if (result.data.data) {
        setProducts(result.data.data);
      } else {
        setError("Data is Not Received");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to Receive Data");
      setLoading(false);
    }
  };

  const toggleLike = (id, event) => {
    event.preventDefault();
    setLikedProducts((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  if (loading) return <h1>Loading Data...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <Layout title={"All-Tannis-products"}>
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
                products.map((item) => {
                  let { id, thumbnail, discount, p_name, brand, mrp } = item;
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
                            src={`https://tannis.in${thumbnail}`}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className="card-body">
                          <p className="card-title proTitle">{brand}</p>
                          <h6 className="card-text proText">
                            {p_name.substring(0, 50)}
                          </h6>
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
    </Layout>
  );
};

export default Products;
