import './App.css';
import { useState } from 'react';
import UnitControl from './components/UnitControl';
import CardFooter from './components/CardFooter';
import UnitConverter from './components/UnitConverter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

function App() {
  // 定義 state，取得預設值為 0 的 inputValue 和修改該狀態的 setInputValue 方法
  const [inputValue, setInputValue] = useState(0);

  // 定義事件處理器
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
        <CardFooter inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
