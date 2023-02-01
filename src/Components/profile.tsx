import React, { Component, useEffect, useState } from "react";
import { Button } from "antd";
import UpdateModal from '../Modal/updateModal'
import "./styles.css";

const UserProfile = () => {
  const [data, SetData] = useState() as any;
  const [isOpen, SetOpen] = useState(false);

  useEffect(() => {
    const endpoint = `https://randomuser.me/api/?nat=us&results=1&page=1`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        SetData(json.results);
      });
  }, []);
const openUpdateModal=()=>{
    SetOpen(!isOpen)
}  
const handleCancel = () => {
    SetOpen(false);
  };
return (
    <div className="clearfix">
      <div className="row">
        <div className="col-md-4 animated fadeIn">
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <div>
                  <img
                    src={data && data[0].picture.large}
                    className="card-img-top"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="card-title">
                    {data &&
                      `Welcome ${data[0].name.title} ${data[0].name.first} ${data[0].name.last}`}
                  </h5>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form"
                    onClick={openUpdateModal}
                  >
                    Update
                  </Button>
                </div>
              </div>

              <p className="card-text">
                this is the dummy text which is showing for nothing
                <br />
                <span className="phone">{data && data[0].cell}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <UpdateModal isOpen={isOpen} handleCancel={handleCancel}/>
    </div>
  );
};

export default UserProfile;
