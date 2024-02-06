import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(null);
  const close = () => {
    setIsOpen(null);
  };
  return (
    <div className="d-flex flex-column gap-5">
      <h1>Ansayfaaa</h1>
      <h1>Kategori</h1>

      <a href="/">Elektronik</a>
      <a href="/">Giyim</a>
      <a href="/">Teknoji</a>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
      </p>
      <button onClick={() => setIsOpen("login")} className="btn btn-dark">
        Giris Yap
      </button>
      <button onClick={() => setIsOpen("mode")} className="btn btn-dark">
        Koyu Mod
      </button>
      <button onClick={() => setIsOpen("warn")} className="btn btn-dark">
        Uyari
      </button>

      {isOpen === "login" ? (
        <Modal close={close}>
          <form className="form-group">
            <label htmlFor="">Kullanici adi</label>
            <input className="form-control" type="text" />
            <label className="form-group">Sifre: </label>
            <input className="form-control" type="text" />
          </form>
        </Modal>
      ) : isOpen === "warn" ? (
        <Modal close={close}>
          <h3>Silmek istediginizden emin misniz</h3>
        </Modal>
      ) : isOpen === "mode" ? (
        <Modal close={close}>
          <label>Koyu mod</label>
          <input type="checkbox" />
        </Modal>
      ) : (
        ""
      )}
      {/* Normal Bilesen Kullanimi*/}
      {/* <Modal /> */}
      {/*Hoc Bilesen Kullanimi*/}
      {/* <Modal>
        <h3>Silmek istediginizxden emin miisniz? </h3>
      </Modal> */}

      {/* <Modal>
        <label>Yeni sife</label>
        <input type="text" />
      </Modal> */}
    </div>
  );
}
export default App;
