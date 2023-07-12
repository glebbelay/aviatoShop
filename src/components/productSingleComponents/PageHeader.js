import React from "react";

function PageHeader() {
  return (
    <div>

        <div class="row">
			<div class="col-md-6">
				<ol class="breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li><a href="shop.html">Shop</a></li>
					<li class="active">Single Product</li>
				</ol>
			</div>
		</div>
    </div>
  );
}

export default PageHeader;