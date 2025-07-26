import React, { useState, useEffect } from "react";
import "./cartPage.css";
import toast from "react-hot-toast";
import { MdCurrencyRupee } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import MoreToLike from "./../SliderPage/MoreToLike";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Header2 from "./../Layout/Header2";
import WishlistProduct from "./WishListProduct";
import OtherBrought from "./OtherBrought";
import GiftCard from "./GiftCard";
import CartCoupen from "./CartCoupen";
import Form from "react-bootstrap/Form";
import axios from "axios";
import UseMediaQuery from "./../../UseMediaQuery";

function CartPage() {
  const isMobile = UseMediaQuery("(max-width:486px)");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);

  const [cart, setCart] = useState();
  const navigate = useNavigate();

  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://tannis.in/api/get-cart", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setCart(res);
      console.log(res, "getCart");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const cartProduct = cart?.data?.data?.carts;

  console.log(cartProduct);

  const cartTotal = cart?.data?.data;

  const handleIncCart = async (variant, item) => {
    const token = localStorage.getItem("token");
    const newQty = item++;
    console.log(newQty);
    try {
      const res = await axios.put(
        `https://tannis.in/api/update-cart-qty/`,
        { variant: variant, qty: item },

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(res.data, "Cart item updated");
      getCart(); // refresh cart
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecCart = async (variant, qty) => {
    const token = localStorage.getItem("token");
    const newQty = qty--;

    try {
      if (qty >= 1) {
        const res = await axios.put(
          `https://tannis.in/api/update-cart-qty/`,
          { variant: variant, qty: qty },

          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
      } else {
        toast.success("Item Deleted Successfully");
        handleRemoveCart(variant);
      }

      getCart(); // refresh cart
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveCart = async (id) => {
    const token = localStorage.getItem("token");
    try {
      let res = await axios.delete(
        `https://tannis.in/api/remove-from-cart/${id}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      toast.success("Item Deleted Successfully");
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="position-sticky top-0 start-0 z-3 bg-white">
        <Header2 />
      </div>

      {cartProduct?.length > 0 ? (
        <>
          <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <div className="row d-flex gap-3 px-2">
              <div className="col-md-7">
                <div className="cartBorder">
                  <div className="card mb-2 border-0">
                    <h3 className="cartItem my-3 px-2">
                      My Bag{" "}
                      <span className="cartSpan">
                        ({cartProduct?.length} items)
                      </span>
                    </h3>
                    {cartProduct?.map((item, i) => {
                      let { id, p_name, thumbnail, price, qty, variant } = item;

                      return (
                        <>
                          <div className="row g-0 px-2">
                            <div className="col-2">
                              <img
                                src={`https://tannis.in${thumbnail}`}
                                className="img-fluid cartImg"
                                alt="..."
                              />
                            </div>
                            <div className="col-10">
                              <div className="card-body">
                                <p className="card-title">
                                  {p_name.substring(0, 6)}
                                </p>
                                <h6 className="card-text">
                                  {p_name.substring(0, 30)}
                                </h6>
                                <div className="container-fluid p-0 mt-3 ">
                                  <div className="row d-flex align-items-center">
                                    <div className="col-md-8">
                                      <h6 className="titilHead">
                                        <MdCurrencyRupee />
                                        {qty * price}
                                        <span>
                                          <del className="delProduct">
                                            <MdCurrencyRupee />
                                            799{" "}
                                          </del>
                                          <span className="offdes">
                                            {" "}
                                            (10% Off)
                                          </span>
                                        </span>
                                      </h6>
                                      <button
                                        className="mt-sm-2 reCart"
                                        onClick={() =>
                                          handleRemoveCart(variant)
                                        }
                                      >
                                        REMOVE
                                      </button>
                                    </div>

                                    <div className="col-md-4 cartIconBorder">
                                      <div className=""></div>
                                      <div className="d-flex  align-items-center justify-content-center gap-3">
                                        <FiPlus
                                          onClick={() =>
                                            handleIncCart(variant, qty)
                                          }
                                          style={{ cursor: "pointer" }}
                                        />
                                        <p className="m-0">{qty}</p>

                                        <AiOutlineMinus
                                          onClick={() =>
                                            handleDecCart(variant, qty)
                                          }
                                          style={{ cursor: "pointer" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <GiftCard />
                </div>
                <WishlistProduct />
              </div>

              {/* Right Section */}
              <div
                className="col-md-4 cartBorderTwo px-2 sticky-top"
                style={{ top: "70px", zIndex: "1" }}
              >
                <div className="coupenOne p-2">
                  <div className="d-flex justify-content-between">
                    <h3 className="couHead">
                      <TbCircleDashedPercentage className="me-2" />
                      <span>Coupons & Bank Offers</span>
                    </h3>
                    <button
                      className="viewAllBtn mb-1"
                      onClick={() => setShowCouponModal(true)}
                    >
                      View All <IoIosArrowForward size={18} />
                    </button>
                  </div>
                  <CartCoupen />
                  <p className="couP1">Login to Apply Coupons & Bank Offers</p>
                </div>

                <>
                  <div className="my-3 p-2 coupenOne">
                    <h3 className="couh1">Price Details</h3>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="couP1">Total MRP</h3>
                        <p className="couP5">Inclusive of All Taxes</p>
                      </div>
                      <h3 className="couP1">
                        <MdCurrencyRupee /> {cartTotal?.total_mrp}
                      </h3>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h4 className="couP1">Subtotal</h4>
                      <h4 className="couP1">
                        <MdCurrencyRupee /> {cartTotal?.total_price}
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h4 className="couP1">Discount</h4>
                      <h4 className="couP2">
                        - <MdCurrencyRupee /> {cartTotal?.total_discount}
                      </h4>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="d-flex justify-content-between">
                      <h4 className="couh1">Total</h4>
                      <h4 className="couh1">
                        <MdCurrencyRupee /> {cartTotal?.total_price}
                      </h4>
                    </div>
                    <h3 className="couSave mb-2">
                      <LuPartyPopper className="me-2" />
                      Woohoo! You save <MdCurrencyRupee />{" "}
                      {cartTotal?.total_mrp - cartTotal?.total_price} on this
                      order.
                    </h3>
                    {isMobile ? (
                      <div className="container">
                        <div className="">
                          {" "}
                          <div className=" col-12 userOnlineFixed2 mb-2">
                            <Link
                              to="/order-details"
                              className="couCheckOut2 d-flex justify-content-center align-items-center px-2 mb-2"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="d-flex justify-content-center align-items-center">
                          <Link
                            to="/order-details"
                            className="couCheckOut d-flex justify-content-center align-items-center"
                          >
                            Checkout
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container cartEmpBg my-xl-5 my-lg-5 my-md-3 my-sm-3 my-2">
            <div className="row  justify-content-center align-items-center text-center ">
              <div className="col-8 my-5">
                <h1 className="cartOh1">Oops!</h1>
                <p className="cartOp">Your cart is empty</p>
                <button class="sec1Btn" onClick={() => navigate("/products")}>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <WishlistProduct />
              </div>
            </div>
          </div>
        </>
      )}

      <OtherBrought />

      {/* Modal for Viewing Coupons */}
      <Modal
        show={showCouponModal}
        onHide={() => setShowCouponModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Coupons & Bank Offers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex justify-content-between modelBorder px-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Enter Coupen Code"
                className="noBorder-input"
              />
            </Form.Group>
            <button className="mb-2 copMogBtn">Apply</button>
          </Form>
          <div className="my-3">
            <CartCoupen />
          </div>
          <div className="my-3">
            <CartCoupen />
          </div>
          <div className="my-3">
            <CartCoupen />
          </div>
          <div className="my-3">
            <CartCoupen />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartPage;
