import React, { useState } from 'react';
import Product from './Components/Product/Product';

export default function AppProduct() {
  const _buttonStyle = {
    position: 'absolute',
    left: '24px',
    top: '24px',
    maxWidth: '300px',
    padding: '12px 24px',
    margin: '0 auto',
    border: '0',
    outline: '0',
    fontSize: '24px',
    backgroundColor: '#efefef',
    borderRadius: '4px',
  };

  const [_show, setShow] = useState(false);

  return (
    <>
      {_show && <Product />}
      <button type="button" onClick={() => setShow(v => !v)} style={_buttonStyle}>💪Toggle💪</button>
    </>
  );
}

