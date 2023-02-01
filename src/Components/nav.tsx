import React, { useEffect, useState } from "react";
import { Layout,Form, Button, } from "antd";
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('Authentication') as string // check cookie or local storage etc.
useEffect(()=>{

},[isLoggedIn]);

  const signOut=()=>{
  localStorage.setItem("Authentication","false");
  navigate('/login')
}
  return (
    <Layout className="layout">
      <Header>
        <div className="buttons">
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>navigate('/about')}>
          About us
        </Button>
      </Form.Item>
      {isLoggedIn === "true"?
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"onClick={()=>navigate('/profile')}>
          Profile
        </Button>
      </Form.Item>
      :
      null}
      {isLoggedIn === "true"?
         <Form.Item>
         <Button type="primary" htmlType="submit" className="login-form-button"onClick={()=>signOut()}>
           Sign out
         </Button>
       </Form.Item> 
       :
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"onClick={()=>navigate('/login')}>
          Sign in
        </Button>
      </Form.Item>
    
}
      </div>
      </Header>
    </Layout>
  );
};

export default Home;
