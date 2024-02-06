//1)useContext bir context yapisina abone olmamizi saglar
import { useContext } from "react";
import { ProductContext } from "../contect/productContext";
import Loader from "../components/Loader";
import Card from "../components/Card";

//2)Abone olmak istedigimiz Context'i cagiracagiz

const HomePage = () => {
  //Context yapisinda tutulan bir veriye projedeki bilesen icerisinde erismek
  //istiyorsak bilesenden ilgili context yapisina abone oluruz
  const { products, category } = useContext(ProductContext);

  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5 ">
      {/* Veriler gelmediyse yukleniyor bas*/}
      {!products && <Loader />}
      {/* Veriler geldiyse her biri icin ekrana card bas*/}
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
