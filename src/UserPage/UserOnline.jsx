import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./userOnline.css";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const options = [
  { value: "Recent", label: "Recent" },
  { value: "Last 30 days", label: "Last 30 days" },
  { value: "Last 6 Months", label: "Last 6 Months" },
  { value: "Last 12 Months", label: "Last 12 Months" },
];

const statusOptions = [
  { value: "All Status", label: "All Status" },
  { value: "Delivered", label: "Delivered" },
  { value: "Cancelled", label: "Cancelled" },
  { value: "Returned", label: "Returned" },
];

export default function UserOnline() {
  const [selectedOption, setSelectedOption] = useState("Recent");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [showDateModal, setShowDateModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const handleDateSelect = (value) => {
    setSelectedOption(value);
    setShowDateModal(false);
  };

  const handleStatusSelect = (value) => {
    setSelectedStatus(value);
    setShowStatusModal(false);
  };

  return (
    <div className="container userOnStBor">
      <div className="row">
        <div className="col-6 d-flex">
          <Button
            className="userOnlineBtn noPrimary"
            onClick={() => setShowDateModal(true)}
          >
            <HiOutlineAdjustmentsHorizontal className="icon mt-2" size={15} />{" "}
            Order Date <br />
            <p className="selectUserP">
              {selectedOption ? ` ${selectedOption}` : ""}
            </p>
          </Button>
        </div>
        <div className="col-6">
          <Button
            className="userOnlineBtn noPrimary"
            onClick={() => setShowStatusModal(true)}
          >
            <HiOutlineAdjustmentsHorizontal className="icon mt-2" size={15} />{" "}
            Order Status <br />
            <p className="selectUserP">
              {selectedStatus ? ` ${selectedStatus}` : ""}
            </p>
          </Button>
        </div>
      </div>

      <Modal
        show={showDateModal}
        onHide={() => setShowDateModal(false)}
        centered
      >
        <Modal.Body>
          <Form>
            {options.map((option) => (
              <Form.Check
                key={option.value}
                type="radio"
                label={option.label}
                name="dateOptions"
                checked={selectedOption === option.value}
                onChange={() => handleDateSelect(option.value)}
              />
            ))}
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showStatusModal}
        onHide={() => setShowStatusModal(false)}
        centered
      >
        <Modal.Body>
          <Form>
            {statusOptions.map((status) => (
              <Form.Check
                key={status.value}
                type="radio"
                label={status.label}
                name="statusOptions"
                checked={selectedStatus === status.value}
                onChange={() => handleStatusSelect(status.value)}
              />
            ))}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
