import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contect/productContext";

const CardDetail = () => {
  const { id } = useParams(); // URL'den id parametresini al

  const { products } = useContext(ProductContext); // ProductContext'ten products verisini al

  // id'ye göre ürünü bul
  const product = products.find((product) => product.id === parseInt(id));

  // Eğer ürün bulunamadıysa veya products verisi yoksa hata mesajı göster
  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }
  return (
    <div className="container my-4">
      <div>
        <div className="row g-5">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded-start "
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="text-truncate">{product.title}</h5>
              <p className="card-text">
                {" "}
                <span className="text-success">Fiyat: </span> {product.price}
              </p>
              <p className="card-text">
                <span className="text-success text-nowrap"> Kategori: </span>
                {product.category}
              </p>
              <p className="card-text">
                {" "}
                <span className="text-success">Açıklama:</span>{" "}
                {product.description}
              </p>
              {/* Diğer ürün özelliklerini buraya ekleyebilirsiniz */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
