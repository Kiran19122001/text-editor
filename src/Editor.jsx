import React, { useState, useRef } from 'react';
import { FaItalic, FaUnderline, FaAlignLeft, FaAlignRight, FaAlignCenter, FaBold } from 'react-icons/fa';
import { IoTextSharp } from 'react-icons/io5';
import { FaTextSlash } from 'react-icons/fa6';
import { BiSolidRectangle } from 'react-icons/bi';
import './styles.css';

export default function Editor() {
  const [fontSize, setFontSize] = useState(20);
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [position, setPosition] = useState('flex-start');
  const [capital, setCapital] = useState(false);
  const [text, setText] = useState('');
  const inputRef = useRef(null);
  const [textColor, setTextColor] = useState('black'); // State for text color

  const clearText = () => {
    inputRef.current.value = '';
  };

  const handleColorChange = (color) => {
    setTextColor(color); // Set text color based on the color picker
  };

  return (
    <div className='main-container'>
      <h1 className='head'>Text Editor</h1>
      <div className='editors'>
        <div className='edititems'>
          <input
            type='number'
            onChange={(e) => setFontSize(e.target.value)}
            className='input'
            value={fontSize}
          />
          <button className='buttons' type='button' onClick={() => setBold((prev) => !prev)}>
            <FaBold />
          </button>
          <button className='buttons' type='button' onClick={() => setItalic((prev) => !prev)}>
            <FaItalic />
          </button>
          <button className='buttons' type='button' onClick={() => setUnderline((prev) => !prev)}>
            <FaUnderline />
          </button>
          <button className='buttons' type='button' onClick={() => setPosition('start')}>
            <FaAlignLeft />
          </button>
          <button className='buttons' type='button' onClick={() => setPosition('center')}>
            <FaAlignCenter />
          </button>
          <button className='buttons' type='button' onClick={() => setPosition('end')}>
            <FaAlignRight />
          </button>
          <button className='buttons' type='button' onClick={() => setCapital((prev) => !prev)}>
            <IoTextSharp />
          </button>
          <button className='buttons' type='button' onClick={clearText}>
            <FaTextSlash />
          </button>
          <input type='color' onChange={(e) => handleColorChange(e.target.value)} /> {/* Color picker */}
          
        </div>
        <textarea
          className='textarea'
          placeholder='Type something...'
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            fontFamily: isItalic ? 'italic' : 'Roboto, sans-serif',
            textDecoration: isUnderline ? 'underline' : 'none',
            textAlign: position,
            textTransform: capital ? 'capitalize' : 'none',
            color: textColor, // Apply the selected text color
          }}
          value={text}
        />
      </div>
    </div>
  );
}
