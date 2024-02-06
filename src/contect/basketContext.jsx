import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

//1) context yapisi tanimla
export const BasketContext = createContext();

//2) contect'de tutulan verileri uygulamaya aktaracak
// bir saglayici bileseni tanimla

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);
  //sepete urun ekler
  const addToBasket = (newProduct) => {
    //1) bu urunden sepette var mi kotrol et
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      //2) urun sepette varsa  > miktarini 1 arttir
      //a) bulunan urunun miktarini bir arttir
      const updated = { ...found, amount: found.amount + 1 };
      //b)sepet dizisindeki eski urunun yerine guncel halini koy
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      //c)state guncelle
      setBasket(newBasket);
      toast.info(`urun miktari arttirildi (${updated.amount})`);
    } else {
      //3) urun sepette yoksa > urunuu sepete ekle (miktari  1'e esitle)
      setBasket([...basket, { ...newProduct, amount: 1 }]);
      toast.success(`Urun sepete eklendi`);
    }
  };
  //sepetten urun kaldirir
  const removeFromBasket = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      setBasket(newBasket);
      toast.success(`Urun miktari azaltildi (${updated.amount})`);
    } else {
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
      toast.error(`Urun sepetten kaldirildi`);
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
