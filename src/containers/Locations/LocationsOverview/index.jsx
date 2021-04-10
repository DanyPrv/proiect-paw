import React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CCardHeader,
  CDataTable,
  CBadge,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import locationsData from './locationsData';

const fields = ['id', 'location', 'city', 'cars', 'status'];

function Locations({ children }) {
  const history = useHistory();
  // useEffect(() => {
  //
  // }, [window.location.href]);
  return (
    <CRow>
      <CCol>
        <CRow>
          <CCol className="text-right mb-1">
            <CButton color="primary">Add new location</CButton>
          </CCol>
        </CRow>
        <CCard>
          <CCardHeader>
            Locations
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={locationsData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              clickableRows
              onRowClick={(row) => history.push(`/locations/${row.id}/details`)}
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
    </CRow>
  );
}

export default Locations;
