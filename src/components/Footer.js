import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 bg-primary text-light">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col">
            <h5 className="">
              <i className="bi bi-bank"></i> MericBank
            </h5>
            <p>
              Bu sitede yayınlanan her türlü ses, görüntü, yazı içeren bilgi ve
              belge, ticari marka ve her tür fikri mülkiyet hakkı , ilgili
              markalara aittir, yalnızca sahipleri tarafından ve sahiplerinin
              izni ile kullanılmaktadır ve telif hakları kapsamındadır.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />
        </div>
      </div>

      <div className="footer-copyright text-center py-3">© 2022 Copyright</div>
    </footer>
  );
};
export default Footer;
