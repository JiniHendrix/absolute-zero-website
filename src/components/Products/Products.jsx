import React from 'react';

function onBtnClick() {
  const test = document.querySelector('.test');
  console.log(test);
  test.classList.toggle('show-me');
}

const Products = () => (
  <div>
    <button onClick={onBtnClick}>Click Me</button>
    <div className="test" />
  </div>
);

export default Products;
