import React from 'react';
import { Wrapper, Title, Array } from './ShoppingList.styles';
import Checkbox from '../../shared/Checkbox/Checkbox';

function ShoppingList({ title, products, onToggle }) {
  return (
    <Wrapper>
      <Title>
        {title} :
        <Array>
          {products.map((product) => {
            return (
              <Checkbox
                value={product.checked}
                title={product.name}
                onClick={() => onToggle(product.id, product.checked, product.name)}
              />
            );
          })}
        </Array>
      </Title>
    </Wrapper>
  );
}

export default ShoppingList;
