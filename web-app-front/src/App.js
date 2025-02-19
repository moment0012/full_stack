import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getHello } from './api/hello';
import { createUser } from './api/user';

function App() {

  const [nestData, setNestData] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleGetData = async () => {
    try {
      const { data } = await getHello();
      setNestData(data);
    } catch (error) {
      setNestData(null)
    }
  }


  const handleCreateUser = async () => {
    const params = {
      name: 'cuizhihui',
      age: 25,
      email: '123@123.com'
    }
    try {
      const { data } = await createUser(params);
      setUserData(data);
    } catch (error) {
      setUserData(null)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleGetData}>发送请求给Nest</button>
        <br />
        后端返回的数据:{JSON.stringify(nestData ? nestData : '没有数据')}

        <button onClick={handleCreateUser}>创建用户</button>
        <br />
        后端返回的数据:{JSON.stringify(userData ? userData : '创建失败')}
      </header>
    </div>
  );
}

export default App;
