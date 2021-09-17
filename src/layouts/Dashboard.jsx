import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductList from "../pages/Productlist";
import ProductDetail from "../pages/ProductDetail";
import Category from "../layouts/Category";
import CartDetail from "../pages/CartDetail";
import productAdd from "../pages/productAdd";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Category />
          </Grid.Column>

          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={productAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
