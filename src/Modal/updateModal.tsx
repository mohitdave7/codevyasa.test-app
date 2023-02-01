import React, { useState ,useEffect} from 'react';
import { Button, Modal } from 'antd';


interface update  {
    isOpen?: boolean;
    handleCancel: (event: React.MouseEvent<HTMLElement>) => void
}
const UpdateModal= (props:update) => {
    const {handleCancel,isOpen}=props;
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    
  useEffect(()=>{
    setIsModalOpen(props.isOpen)
  },[props.isOpen])



  return (
    <>
      <Modal title="Requesting a quote" open={isModalOpen} onOk={handleCancel}onCancel={handleCancel}>
        <p>Step 1: Requesting Author...</p>
        <p>Step 2: Requesting Quote...</p>
      </Modal>
    </>
  );
};

export default UpdateModal;