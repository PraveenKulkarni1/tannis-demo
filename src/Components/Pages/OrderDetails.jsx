import React, { useState } from "react";
import "./cartPage.css";
import "./orderDetails.css";
import p3 from "../../assets/p3.avif";
import p1 from "../../assets/p1.avif";
import { MdCurrencyRupee } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import MoreToLike from "./../SliderPage/MoreToLike";

import Header2 from "./../Layout/Header2";
import Footer from "../Layout/Footer";
import ChangeAddress from "./../../Modal/ChangeAddress";

// modal
import { Modal, Form } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
// import "./changeAddress.css";
function OrderDetails() {
  const [showMainModal, setShowMainModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      houseNo: "#32",
      buildingName: "Sai",
      pincode: "400093",

      city: "Mumbai",
      state: "Maharastra",
      name: "Praveen Kulkarni",
      type: "Home",
      email: "",
      country: "India",
      contact: "7406506051",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    type: "Home",
    houseNo: "",
    buildingName: "",
    pincode: "",
    city: "",
    state: "",
    name: "",
    email: "",
    country: "",
    contact: "",
  });

  const handleEdit = (address) => {
    setShowMainModal(false);
    setFormData(address);
    setIsAddingNew(false);
    setTimeout(() => setShowEditModal(true), 300);
  };

  const handleAddNew = () => {
    setShowMainModal(false);
    setFormData({
      id: null,
      type: "Home",
      houseNo: "",
      buildingName: "",
      pincode: "",
      city: "",
      state: "",
      name: "",
      email: "",
      country: "",
      contact: "",
    });
    setIsAddingNew(true);
    setTimeout(() => setShowEditModal(true), 300);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    if (isAddingNew) {
      setAddresses([...addresses, { ...formData, id: addresses.length + 1 }]);
    } else {
      setAddresses(
        addresses.map((addr) => (addr.id === formData.id ? formData : addr))
      );
    }

    setShowEditModal(false);
  };
  return (
    <>
      <div className="position-sticky top-0 start-0 z-3 bg-white">
        <Header2 />
      </div>
      <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 orderMain ">
        <div className="row d-flex gap-3 mx-auto">
          <div className="col-12">
            <h3 className="couHead">Review Order Details</h3>
          </div>

          <div className="col-md-7 col1BorderOne d-flex flex-column">
            <div className="card mb-2 border-0">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="coupenOne p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="couHead my-3">Address</h3>

                        <Link
                          className="couP1 text-dark my-3 d-flex align-items-center"
                          onClick={() => setShowMainModal(true)}
                        >
                          Change
                          <IoIosArrowForward
                            size={15}
                            className="IoStyle ms-1"
                          />
                        </Link>
                      </div>
                      <h3 className="couP1">
                        Praveen Kulkarni <span className="copBorder">Home</span>
                      </h3>
                      <h3 className="couP3">
                        #32 Sai, Munne, Mumbai, Maharashtra - 400093
                      </h3>
                      <p className="couP5 mb-0">Mobile: 785825325</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="couHead my-2">Expected Delivery</h3>
                <p className="couP4">Shipment 1 of 1</p>

                <div className="shipBorder">
                  <h3 className=" couP1 my-2">
                    <RiTruckLine size={20} className="IoStyle" />
                    <span className="p-1"> Delivery by Tue, 11 Mar</span>
                  </h3>
                  <img src={p1} alt="" className="img-fluid shipImg" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col2BorderTwo p-0">
            <div className="coupenOne p-2 d-flex justify-content-between">
              <h3 className="couHead">
                <span className="">Payment Method</span>
              </h3>
              <h3 className="couP1">
                Select <IoIosArrowForward size={15} className="IoStyle" />
              </h3>
            </div>
            <div className="my-3 p-2 coupenOne">
              <h3 className="couh1">Price Details</h3>
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="couP1">Total MRP</h3>
                  <p className="couP5">Inclusive of All Taxes</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="couP1">
                    {" "}
                    <MdCurrencyRupee />
                    11,145.01
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="couP1">Subtotal</h4>
                <h4 className="couP1">
                  {" "}
                  <MdCurrencyRupee />
                  9,802
                </h4>
              </div>
            </div>
            <div className="coupenOne p-2">
              <div className="d-flex justify-content-between">
                <h4 className="couh1">Total</h4>
                <h4 className="couh1">
                  {" "}
                  <MdCurrencyRupee />
                  9,802
                </h4>
              </div>
            </div>
            <div className="d-flex my-2 justify-content-center align-items-center">
              <Link
                to="/order-details"
                className="couCheckOut d-flex justify-content-center align-items-center"
              >
                Select Payment Method
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {" "}
            <div className="coupenOne"></div>
          </div>
        </div>
      </div>

      <Modal
        show={showMainModal}
        onHide={() => setShowMainModal(false)}
        end
        dialogClassName="right-side-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {addresses.map((address) => (
            <div
              key={address.id}
              className="card p-3 shadow-sm mb-2 d-flex justify-content-between"
            >
              <div className="d-flex justify-content-between">
                <input type="radio" name="selectedAddress" className="me-2" />
                <div className="flex-grow-2">
                  <h5 className="mb-1">{address.name}</h5>
                  <span className="copBorder">{address.type}</span>
                  <p className="mb-1">{address.address}</p>
                  <p className="mb-0">Mobile: {address.contact}</p>
                </div>

                <FiEdit
                  size={20}
                  onClick={() => handleEdit(address)}
                  className="ms-2"
                />
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button className="mt-3 couCheckOut mx-auto" onClick={handleAddNew}>
            + Add New Address
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
        dialogClassName="right-side-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isAddingNew ? "Add New Address" : "Edit Address"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveChanges} className="formAddreess">
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Flat No/House No/Building No
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="houseNo"
                value={formData.houseNo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">Address Type</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Building Name/Street/Society
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="buildingName"
                value={formData.buildingName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Pincode
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                City
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                State
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Country
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Fullname
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Contact
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel"> Email(optional)</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="couCheckOut mx-auto">
            {isAddingNew ? "Add Address" : "Save Changes"}
          </button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default OrderDetails;
