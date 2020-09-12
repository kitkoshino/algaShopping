import React, { useState, useEffect } from 'react';
import { Wrapper, Container } from './App.styles';
import AppHeader from '../AppHeader/AppHeader';
import AppContainer from '../AppContainer/AppContainer';
import LineChart from '../../shared/LineChart/LineChart';
import ShoppingList from '../ShoppingList';
import productsMock from '../../mocks/products.json';
import extractPercentage from '../../utils/extractPercentage';

function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61'];

  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);

    setSelectedProducts(newSelectedProducts);
  }, [products]);

  useEffect(() => {
    const total = selectedProducts
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);

    setTotalPrice(total);
  }, [selectedProducts]);

  function handleToggle(id) {
    const newProducts = products.map((product) => {
      return product.id === id
        ? {
            ...product,
            checked: !product.checked
          }
        : product;
    });

    setProducts(newProducts);
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList
              title="produtos disponíveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList
              title="sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
            />
          }
          right={
            <div>
              estatísticas
              <LineChart
                color={colors[0]}
                title="saudável"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes('healthy')
                  ).length
                )}
              />
              <LineChart
                color={colors[1]}
                title="não tão saudável assim"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes('junk')
                  ).length
                )}
              />
              <LineChart
                color={colors[2]}
                title="limpeza"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes('cleaning')
                  ).length
                )}
              />
              <LineChart
                color={colors[3]}
                title="outros"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes('others')
                  ).length
                )}
              />
              <div style={{ marginTop: 12 }}>
                <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                  previsão de gastos
                </h2>
              </div>
              <div style={{ fontSize: 24 }}>{totalPrice.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
              })}</div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
