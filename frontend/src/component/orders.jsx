import React, { useState } from "react";

export default function Oreders() {
  const [productlist, setProductlist] = useState([
    {
      'id':1,
      'name':'Iced Americano',
      'price': 55,
      'image':'icedamericano'
    },
    {
      'id':4,
      'name':'Iced Espresso',
      'price': 60,
      'image':'icedespresso'
    },{
      'id':5,
      'name':'Iced Latte',
      'price': 60,
      'image':'icedlatte'
    },{
      'id':6,
      'name':'Iced Capuchino',
      'price': 60,
      'image':'icedcapuchino'
    },
  ])

  return (
    <div className="container">
      <div className="row">

    {productlist.map((i)=>(

      <div key={i.id} className="card m-4 shadow" style={{ width: "20rem" }}>
       <img className="img img-fluid" src={`/src/assets/images/${i.image}.jpg`} />
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <div className="my-2">
            <button className="btn btn-primary m-1">0%</button>
            <button className="btn btn-primary m-1">50%</button>
            <button className="btn btn-primary m-1">100%</button>
          </div>

          <div className="row">
            <button className="btn btn-primary">สั่งซื้อ</button>
          </div>
        </div>
      </div>
    ))}
      </div>
    </div>
  );
}
