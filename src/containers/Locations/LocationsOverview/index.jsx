import React, { useEffect } from 'react';
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
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { locationsOverviewActions, reducer, sliceKey } from './slice';
import saga from './saga';
import { selectLocationsOverviewData } from './selectors';
import { isUserAdmin } from '../../../utils/user';

const fields = ['id', 'address', 'city', 'status'];

function Locations({ children }) {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });
  const history = useHistory();
  const dispatch = useDispatch();
  const locations = useSelector(selectLocationsOverviewData);
  useEffect(() => {
    dispatch(locationsOverviewActions.getLocations());
  }, []);
  return (
    <CRow>
      <CCol>
        {isUserAdmin()
        && (
        <CRow>
          <CCol className="text-right mb-1">
            <CButton color="primary" onClick={() => history.push('/locations/create')}>Add new location</CButton>
          </CCol>
        </CRow>
        )}
        <CCard>
          <CCardHeader>
            Locations
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={locations}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              clickableRows
              onRowClick={(row) => history.push(`/locations/${row.id}/details`)}
              scopedSlots={{
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
