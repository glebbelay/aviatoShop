import React from "react";

function PageHeader() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <ol className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li className="active">Single Product</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
