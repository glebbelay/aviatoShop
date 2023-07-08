import React from 'react'
import PageHeader from '../components/shopComponents/PageHeader'
import Categories from '../components/shopComponents/Categories'
import Product from '../components/shopComponents/Product'

function ShopPage() {
  return (
    <div>
        
        <PageHeader />
        <section class="products section">
            <div class="container"> 	
                <Categories />
                <Product />
            </div>
        </section>
    </div>
  )
}

export default ShopPage