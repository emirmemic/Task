import React, { useState } from "react";
import Button from "./button";

const Modal = ({ label1, label2, submit, close }) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const handleSubmit = () => {
    submit(value1, value2);
    setValue1(0);
    setValue2(0);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop"></div>
      <div className="modal-content">
        <div className="modal-close" onClick={close}>
          X
        </div>
        <div>
          <div>
            <h4>{label1}</h4>
            <input
              min={0}
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              className="input-field"
              type="number"
            />
          </div>
          <div>
            <h4>{label2}</h4>
            <input
              min={0}
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="input-field"
              type="number"
            />
          </div>
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Modal;
