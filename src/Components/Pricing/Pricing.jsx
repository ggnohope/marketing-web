import "./Pricing.css";
import { pricing } from "../Assets/data";

const Pricing = () => {
  return (
    <div>
      <div className="price_container">
        <div className="heading">
          <p>BẢNG GIÁ</p>
          <h2>Các gói dịch vụ của chúng tôi</h2>
        </div>
        <div className="wrapper">
          {pricing.map(({ plan, price, features }, index) => (
            <div key={index} className="plan">
              <h2>{plan}</h2>
              <p>{price}</p>
              <ul>
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button>Chọn gói</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
