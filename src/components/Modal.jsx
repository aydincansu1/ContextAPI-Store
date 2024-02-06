const Modal = ({ children, close }) => {
  return (
    <div
      class="modal d-block bg-black bg-opacity-50"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content p-2">
          {/*Kapatma butonu*/}
          <div className="d-flex justify-content-end">
            <button onClick={close}>X</button>
          </div>
          {/* Ana icerik*/}
          <div>{children}</div>
          {/*Biuttonlar*/}
          <div className="d-flex justify-content-end gap-3 mt-5">
            <button onClick={close}>Iptal</button>
            <button className="btn btn-success">Onayla</button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Modal;
