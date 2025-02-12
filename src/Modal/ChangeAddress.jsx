import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import "./changeAddress.css";

const ChangeAddress = () => {
  const [showMainModal, setShowMainModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Praveen Kulkarni",
      type: "Home",
      address: "#32 Sai, Munne, Mumbai, Maharashtra - 400093",
      phone: "7406506051",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    type: "Home",
    address: "",
    phone: "",
  });

  const handleEdit = (address) => {
    setFormData(address);
    setIsAddingNew(false);
    setShowEditModal(true);
  };

  const handleAddNew = () => {
    setFormData({
      id: null,
      name: "",
      type: "Home",
      address: "",
      phone: "",
    });
    setIsAddingNew(true);
    setShowEditModal(true);
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
    <div className="container mt-4">
      <Button variant="primary" onClick={() => setShowMainModal(true)}>
        Open Address Modal
      </Button>

      <Modal
        show={showMainModal}
        onHide={() => setShowMainModal(false)}
        end
        dialogClassName="right-side-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Saved Addresses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {addresses.map((address) => (
            <div
              key={address.id}
              className="card p-3 shadow-sm mb-2 d-flex align-items-center"
            >
              <input type="radio" name="selectedAddress" className="me-2" />
              <div className="flex-grow-1">
                <h5 className="mb-1">{address.name}</h5>
                <span className="badge bg-primary">{address.type}</span>
                <p className="mb-1">{address.address}</p>
                <p className="mb-0">Mobile: {address.phone}</p>
              </div>
              <Button
                variant="outline-primary"
                className="ms-2"
                onClick={() => handleEdit(address)}
              >
                Edit <IoIosArrowForward size={15} />
              </Button>
            </div>
          ))}

          <Button
            variant="success"
            className="mt-3 w-100"
            onClick={handleAddNew}
          >
            + Add New Address
          </Button>
        </Modal.Body>
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
          <Form onSubmit={handleSaveChanges}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Type</Form.Label>
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
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={() => setShowEditModal(false)}
                className="me-2"
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {isAddingNew ? "Add Address" : "Save Changes"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChangeAddress;
