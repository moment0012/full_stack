import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getHello } from './api/hello';
import { createUser } from './api/user';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

function App() {


  function fileUpload(data) {
    return axios.post("/api/upload/upload-single-file", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
  }

  const [nestData, setNestData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [fileList, setFileList] = useState([]);

  // 发送请求给Nest
  const handleGetData = async () => {
    try {
      const { data } = await getHello();
      setNestData(data);
    } catch (error) {
      setNestData(null)
    }
  }

  // 创建用户
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

  // 移除文件
  const handleRemove = (file) => {
    const files = fileList.filter((item) => item.uid !== file.uid);
    setFileList(files);
  };

  // beforeUpload钩子
  const handleBeforeUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    await fileUpload(formData);
    setFileList([...fileList, file]);
    message.success("上传成功");
  }


  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <button onClick={handleGetData}>发送请求给Nest</button>
        <br />
        后端返回的数据:{JSON.stringify(nestData ? nestData : '没有数据')}
        <br />
        <button onClick={handleCreateUser}>创建用户</button>
        <br />
        后端返回的数据:{JSON.stringify(userData ? userData : '创建失败')}
        <br />
        <Upload fileList={fileList}
          onRemove={handleRemove}
          beforeUpload={handleBeforeUpload}
        >
          <Button icon={<UploadOutlined />}>选择文件</Button>

        </Upload>
      </div>
    </div>
  );
}

export default App;
