import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import useBoolean from "../../hooks/useBoolean";
// import NewsProducts from '../../pages/newsProducts/newsProducts';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);
  const { value, setValue, setFalse, setTrue, toggle } = useBoolean();

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="icon__title">
          <p
            style={{
              fontSize: "17px",
              marginLeft: "-20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={toggle}
          >
            {value ? (
              <RiArrowDropUpLine fill="#707a83" size={35} />
            ) : (
              <RiArrowDropDownLine fill="#707a83" size={35} />
            )}
            <span
              style={{
                marginLeft: "10px",
                color: "#04111d",
                font: "16px",
                fontWeight: "bold",
              }}
            >
              TIN TỨC - KHUYẾN MÃI
            </span>
          </p>

          {/* <span style={{ fontSize: '30px' }}>
                        {' '}
                        {isActive ? (
                            <RiArrowDropDownLine fill='#707a83' />
                        ) : (
                            <RiArrowDropUpLine fill='#707a83' />
                        )}
                    </span> */}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">{/* <NewsProducts /> */}</div>
      )}
    </div>
  );
};

export default Accordion;
