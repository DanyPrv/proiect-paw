import React, { useEffect } from 'react';
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
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { carsOverviewActions, reducer, sliceKey } from './slice';
import saga from './saga';
import { selectCarsOverviewData } from './selectors';
import { isUserAdmin } from '../../../utils/user';

const fields = ['id', 'model', 'year', 'engine', 'fuel'];

function CarsOverview({ children }) {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });
  const history = useHistory();
  const dispatch = useDispatch();
  const cars = useSelector(selectCarsOverviewData);
  useEffect(() => {
    dispatch(carsOverviewActions.getCars());
  }, []);
  return (
    <CRow>
      <CCol>
        {isUserAdmin()
        && (
          <CRow>
            <CCol className="text-right mb-1">
              <CButton color="primary" onClick={() => history.push('/cars/create')}>Add new car</CButton>
            </CCol>
          </CRow>
        )}
        <CCard>
          <CCardHeader>
            Users
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={cars}
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
