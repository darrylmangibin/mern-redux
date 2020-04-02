import React from 'react';
import spinner from './spinner.gif';

const Loading = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "78vh"
    }}>
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Loading;