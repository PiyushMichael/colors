import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    const matrixTask = () => new Promise((resolve, reject) => {
      const arr = [];
      let temp = [];
      let i = 8;
      let j = 8;
      let k = 8;
      while (i <= 256) {
        while (j <= 256) {
          while (k <= 256) {
            temp.push(`rgb(${i-1},${j-1},${k-1})`);
            k += 8;
          }
          if (j % 64 === 0) {
            arr.push(temp);
            temp = [];
          }
          j += 8;
          k = 8;
        }
        i += 8;
        j = 8;
      }
      resolve(arr);
    });

    matrixTask()
    .then(res => {
      setLoading(false);
      setMatrix(res);
    })
    .catch(e => {
      console.log(e);
    });
  }, []);

  return (
    <div>
      {
        loading ?
        <h1>Loading....</h1> :
        <div style={container}>
          {matrix.map((row, iy) => (
            <div key={iy.toString()} style={pixelRow}>
              {row.map((pixel, ix) => (
                <div style={{ ...pixelStyle, backgroundColor: pixel }} key={ix.toString().concat('pxl')} />
              ))}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

const container = {
  margin: 64,
};

const pixelRow = {
  display: 'flex',
};

const pixelStyle = {
  height: 4,
  width: 4,
}

export default App;
