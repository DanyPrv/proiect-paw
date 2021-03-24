import React, { useState } from 'react';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react';
import { useHistory, useParams } from 'react-router-dom';

const CarDetails = () => {
  const [modal, setModal] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const onClose = () => {
    setModal(!modal);
    history.push('/cars');
  };
  return (
    <>
      <CModal
        show={modal}
        onClose={() => onClose()}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>
            {`Details for car ${id}`}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          bla bla bla bla
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Do Something</CButton>
          {' '}
          <CButton color="secondary" onClick={() => onClose()}>Cancel</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CarDetails;
