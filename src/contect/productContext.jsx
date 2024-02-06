import axios from "axios";
import { createContext, useEffect, useState } from "react";
/* 


* Context API
* Uygulamada birden cok bilesen ihtiyaci olan verileri
* Bilesenlerden bagimsiz bir sekilde konumlanan merkezlerde yonetmeye yarar
* Context yapisi icerisinde verilerin statini ve verileri degistirmeye yarayan fonksiyonlar tutulabilir
* Context, tutugumuz degiskenleri bilesenlere dogruda katarim yapabilen merkezi yonetim aracidir

*/

//!Context yapisinin temelini olusturma
export const ProductContext = createContext();

//!Saglayici ve onun tuttugu verileri tanimla
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    //*butun verileri al
    //"https://fakestoreapi.com/products"

    //*belirli kategorideki verileri al
    //https://fakestoreapi.com/products/category/jewelery

    //hangi url ye istek atilacagini belirle
    const url =
      category === "all"
        ? `https://fakestoreapi.com/products `
        : `https://fakestoreapi.com/products/category/${category}`;

    //api istegi at
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  //context yapisinda tuttugumuz verileri bilesenlere saglar
  //Value olarak eklenen veriler projedeki butun veriler tarafinddan erisilebilir olur
  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
