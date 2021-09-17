import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCard } from "../store/actions/cardActions";
import { useDispatch } from "react-redux";
export default function Productlist() {
  const dispatch = useDispatch();

  const [product, setProducts] = useState([]);

  useEffect(() => { 
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  const handleAddToCard = (Product) => {
    dispatch(addToCard(Product));
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> Ürün adı</Table.HeaderCell>
            <Table.HeaderCell>Ürün Fiyatı </Table.HeaderCell>
            <Table.HeaderCell>Stok</Table.HeaderCell>
            <Table.HeaderCell>Ürün Açıklaması</Table.HeaderCell>
            <Table.HeaderCell>Kategori adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {product.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
              </Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={()=>handleAddToCard(product)}>Sepete ekle</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
