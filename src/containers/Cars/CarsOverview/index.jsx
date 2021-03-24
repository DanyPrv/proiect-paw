import React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CDataTable,
  CBadge,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import usersData from './usersData';

const fields = ['id', 'location', 'city', 'cars', 'status'];

function CarsOverview({ children }) {
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
              onRowClick={(row) => history.push(`/cars/${row.id}/details`)}
              scopedSlots={{
                cars:
                  (item) => (
                    <td>
                      <CBadge color={item.cars > 10 ? 'primary' : item.cars > 5 ? 'warning' : 'danger'}>
                        {item.cars}
                      </CBadge>
                    </td>
                  ),
                status:
                  (item) => (
                    <td>
                      <CBadge color={item.status === 'Open' ? 'success' : 'danger'}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
              }}
            />
          </CCardBody>
        </CCard>
        {children}
      </CCol>
    </>
  );
}

export default CarsOverview;
