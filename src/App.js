import React, { useState } from 'react';
import './App.css';
import calculonLogo from './calculon.png';

function App() {

  
 
  const [displayContent, setDisplayContent] = useState('0');

  const handleButtonClick = (buttonId) => {
    switch (buttonId) {
      case 'clear':
        setDisplayContent('0');
        break;
      case 'backspace':
        setDisplayContent((prevContent) => prevContent.slice(0, -1));
        break;


      case '=':
        try {
          setDisplayContent(eval(displayContent).toLocaleString());
        } catch (error) {
          setDisplayContent('Error');
        }
        break;
      default:
        setDisplayContent ((prevContent) =>
        prevContent === '0' ? buttonId : (prevContent + buttonId).toLocaleString());
    }
  };

  return (


    
    <div className="contenedor">
    
        <div className='calculon'>
        <div className='calculonTitulo'>
        <h1>CALCULON</h1>
      </div>
      <div className='calculonLogo'>
            <img src={calculonLogo} alt='logo'/>  
      </div>
     
      </div>

      <div className="calculadora dark">
        <div className="theme-toggler active">
          <i className="toggler-icono"></i>
        </div>
        <div className="display-screen">
          <div id="display">{displayContent}</div>
        </div>
        <div className="buttons">
          <table>
            <tr>
              <td>
                <button className="btn-operator" onClick={() => handleButtonClick('clear')}>
                  C
                </button>
              </td>
              <td>
                <button className="btn-operator" onClick={() => handleButtonClick('/')}>
                  /
                </button>
              </td>
              <td>
                <button className="btn-operator" onClick={() => handleButtonClick('*')}>
                  *
                </button>
              </td>
              <td>
                <button className="btn-operator" onClick={() => handleButtonClick('backspace')}>
                &larr;
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('7')}>
                  7
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('8')}>
                  8
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('9')}>
                  9
                </button>
              </td>
              <td>
                <button className="btn-operator" onClick={() => handleButtonClick('-')}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('4')}>
                  4
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('5')}>
                  5
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('6')}>
                  6
                </button>
              </td>
              <td>
                <button className="btn-operator" onClick={() => handleButtonClick('+')}>
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('1')}>
                  1
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('2')}>
                  2
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('3')}>
                  3
                </button>
              </td>
              <td rowSpan="2">
                <button className="btn-equal" onClick={() => handleButtonClick('=')}>
                  =
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn-operator" onClick={() => handleButtonClick('.')}>
                  .
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('0')}>
                  0
                </button>
              </td>
              <td>
                <button className="btn-number" onClick={() => handleButtonClick('00')}>
                  00
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;





