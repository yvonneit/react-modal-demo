import React, { useState } from 'react';
import { Modal } from 'antd';

const ModalDetail = (props) => {
  return (
    <Modal
      visible={props.visible}
      onCancel={props.closeModal}
      title="Basic Modal"
    >
      <p>{props.data.name}</p>
      <p>{props.data.address}</p>
    </Modal>
  );
};

export default ModalDetail;
