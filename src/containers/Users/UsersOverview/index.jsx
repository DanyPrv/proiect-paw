import React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CDataTable,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import usersData from './usersData';

const fields = ['id', 'firstName', 'LastName', 'orders'];

function UsersOverview({ children }) {
  const history = useHistory();
  return (
    <>
      <CCol>
        <CCard>
          <CCardHeader>
            Users
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              clickableRows
              onRowClick={(row) => history.push(`/users/${row.id}/details`)}
            />
          </CCardBody>
        </CCard>
        {children}
      </CCol>
    </>
  );
}

export default UsersOverview;
