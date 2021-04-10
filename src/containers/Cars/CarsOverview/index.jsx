import React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardHeader,
  CDataTable,
  CBadge,
  CButton,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import carsData from './carsData';

const fields = ['id', 'model', 'year', 'engine', 'fuel'];

function CarsOverview({ children }) {
  const history = useHistory();
  return (
    <CRow>
      <CCol>
        <CRow>
          <CCol className="text-right mb-1">
            <CButton color="primary">Add new car</CButton>
          </CCol>
        </CRow>
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
    </CRow>
  );
}

export default CarsOverview;
