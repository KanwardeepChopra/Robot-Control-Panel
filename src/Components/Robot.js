import React, { useState } from 'react';
import './Robot.css';
import  windowIcon from '../images/build.png';
import upArrowImage from '../images/up-arrow.png';
import downArrowImage from '../images/down-arrow.png';
import rightArrowImage from '../images/right-arrow.png';
import leftArrowImage from '../images/left-arrow.png';
import robotImage from '../images/robot.png';
import resetImage from '../images/reset.png';


const Robot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [movementLog, setMovementLog] = useState([]);
  const gridSize = 5;

  const moveUp = () => {
    if (position.y < gridSize - 1) {
      setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y + 1 }));
      setMovementLog(prevLog => [...prevLog, 'The robot is moved Down']);
    }
  };

  const moveDown = () => {
    if (position.y > 0) {
      setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y - 1 }));
      setMovementLog(prevLog => [...prevLog, 'The robot is moved Up']);
    }
  };

  const moveRight = () => {
    if (position.x < gridSize - 1) {
      setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + 1 }));
      setMovementLog(prevLog => [...prevLog, 'The robot is moved Right']);
    }
  };

  const moveLeft = () => {
    if (position.x > 0) {
      setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - 1 }));
      setMovementLog(prevLog => [...prevLog, 'The robot is moved Left']);
    }
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
    setMovementLog([]);
  };

  const renderGrid = () => {
    const grid = [];
    for (let row = 0; row < gridSize; row++) {
      const rowCells = [];
      for (let col = 0; col < gridSize; col++) {
        const cellStyle = {
          border: '1px solid black',
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        };
        if (row === 4 && col === 4) {
            cellStyle.backgroundColor = 'red';
          }
        if (row === position.y && col === position.x) {
          rowCells.push(
            <div key={`${row}-${col}`} style={cellStyle} >
              <img src={robotImage} alt="Robot" style={{ width: '80%', height: '80%' }} />
            </div>
          );
        } else {
          rowCells.push(<div key={`${row}-${col}`} style={cellStyle}  />);
        }
      }
      grid.push(<div key={row} style={{ display: 'flex' }}> {rowCells} </div>);
    }
    return grid;
  };


  return (
    
    <div className="window">
    <div className="window-header">
      <img src= {windowIcon} alt="Icon" className="window-icon" style={{ width: '5%', height: '5%' }} />
      <h1 className="window-title">Build</h1>
    </div>

        <div className="window-content">
        <div className='container'>
      <div className='grid-container'>
        {renderGrid()}
      </div>
      <div className='robot-position'>Robot Position: ({position.x}, {position.y})</div>

      <div className="movement-log-container">
          <h3 className="movement-log-title">Instructions Implemented:</h3>
          <div className="movement-log">
            <ul>
              {movementLog.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          </div>
        </div>
        <h2>Logic Pannel</h2>
    <div className='buttons-container'>
      <button className='upBut' onClick={moveUp}>
        <img src={downArrowImage} alt="Up" style={{ width: '30px', height: '30px' }}/>
      </button>

      <button className='downBut' onClick={moveDown}>
        <img src={upArrowImage} alt="Down" style={{ width: '30px', height: '30px' }}/>
      </button>

      <button className='rightBut' onClick={moveRight}>
        <img src={rightArrowImage} alt="Right" style={{ width: '30px', height: '30px' }}  />  
      </button>

      <button className='leftBut' onClick={moveLeft}>
        <img src={leftArrowImage} alt="Left" style={{ width: '30px', height: '30px' }}/>
      </button> 

    </div>

      <button className="reset-button"
         onClick={resetPosition}>
        <img src={resetImage} alt="reset" style={{ width: '30px', height: '30px' }} />    
      </button>
        </div>
      </div>
    </div>
    

  );
};

export default Robot;

