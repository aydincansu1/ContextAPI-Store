import { useContext } from "react";
import { BasketContext } from "./../contect/basketContext";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="card " style={{ width: "250px" }}>
      <Link to={`/${product.id}`}>
        <div className="d-flex justify-content-center ">
          <img
            className="object-fit-contain  m-3 color-black"
            height={120}
            src={product.image}
            alt={product.name}
          />
        </div>
      </Link>
      <div className="card-body d-flex flex-column gap-1">
        <h4 className="text-truncate">{product.title}</h4>
        <p>{product.price}</p>
        <p>{product.category}</p>

        <button onClick={() => addToBasket(product)} className="btn btn-dark">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
