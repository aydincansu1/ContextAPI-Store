import { useContext } from "react";
import { BasketContext } from "../contect/basketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce((total, i) => total + i.price * i.amount, 0);

  return (
    <div className="container my-5 justify-content-between">
      <div className="d-flex flex-column gap-5  ">
        {/* Sepette urun yoksa*/}
        {basket.length === 0 && (
          <p className="text-center my-5">
            <span className="mx-3">Oncelikle sepete bir urun ekleyiniz</span>
            <Link to={"/"}> Urunler</Link>
          </p>
        )}
        {/* Sepette urun varsa*/}
        {basket.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
        ))}
      </div>
      <div className="border p-5 rounded my-5">
        <p>
          Sepetteki Urun :{" "}
          <span className="text-warning">{totalAmount} adet</span>
        </p>
        <p>
          Toplam Fiyat :{" "}
          <span className="text-success"> {totalPrice.toFixed(2)} ₺</span>
        </p>
      </div>
    </div>
  );
};
export default CheckoutPage;
