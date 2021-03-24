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
import carsData from './carsData';

const fields = ['id', 'model', 'year', 'engine', 'fuel'];

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
              items={carsData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              clickableRows
              onRowClick={(row) => history.push(`/cars/${row.id}/details`)}
              scopedSlots={{
                fuel:
                  (item) => (
                    <td>
                      <CBadge color="primary">
                        {item.fuel}
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
