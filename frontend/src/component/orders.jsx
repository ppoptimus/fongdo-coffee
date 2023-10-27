import React, { useState } from "react";

export default function Oreders() {
  const [productlist, setProductlist] = useState([
    {
      id: 1,
      name: "Iced Americano",
      price: 55,
      image: "icedamericano",
    },
    {
      id: 2,
      name: "Iced Espresso",
      price: 60,
      image: "icedespresso",
    },
    {
      id: 3,
      name: "Iced Latte",
      price: 60,
      image: "icedlatte",
    },
    {
      id: 4,
      name: "Iced Capuchino",
      price: 60,
      image: "icedcapuchino",
    },
  ]);

  const [orders, setOrders] = useState([]);

  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState([]);

  const onclickProduct = () => {
    console.log(orders);
  };

  const onquantityDown = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onquantityUp = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          {productlist.map((i) => (
            <div
              key={i.id}
              className="card m-4 shadow align-items-center"
              style={{ width: "20rem" }}
            >
              <img className="img img-fluid" src={`/src/assets/images/${i.image}.jpg`} />
              <div className="card-body col-11 text-center">
                <h5 className="card-title">{i.name}</h5>

                <div className="">
                  <button
                    className="btn btn-primary col-12"
                    onClick={() => {
                      orders.push({
                        id: i.id,
                        price: i.price,
                        quantities: 1,
                        amount: i.price,
                      });
                    }}
                  >
                    สั่ง {">>"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-4 bg-light">
          <div className="container my-2">
            <div className="row col-12 align-items-center">
              <div className="col-4">
                <label>Iced Americano</label>
              </div>
              <div className="col-4">
                <div className="input-group">
                  <button className="btn btn-primary" onClick={onquantityDown}>
                    -
                  </button>
                  <input
                    className="form-control text-center"
                    type="text"
                    value={quantity}
                    readOnly
                  ></input>
                  <button className="btn btn-primary" onClick={onquantityUp}>
                    +
                  </button>
                </div>
              </div>
              <div className="col-2">
                <label>
                  {"฿"}
                  100
                </label>
              </div>
              <div className="col-2">
                <button className="btn btn-danger">ลบ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-danger" onClick={onclickProduct}>
        Test
      </button>
    </div>
  );
}
