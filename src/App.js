import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {  
  const [member, setMember] = useState(localStorage.member);
  const [logined, setLogined] =useState(member?.id ? true : false); 
 
  return (
    <div className="App">
      {logined == true
        ? <div>로그인 상태입니다.</div>
        : <div>로그인해주세요</div>
      }
    </div>
  );
}

export default App;
