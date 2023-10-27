import React from "react";
import { Link } from "react-router-dom";

export default function Headbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#">
            FONGDO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item m-2">
                <Link className="btn btn-info fs-5" to="/">
                  แดชบอร์ด
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="btn btn-success fs-5" to="/order">
                  คำสั่งซื้อใหม่
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="btn btn-danger fs-5" to="/productlist">
                  รายการสินค้า
                </Link>
              </li>
              <li className="nav-item m-2">
                <button type="button" className="btn btn-primary fs-5">
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
