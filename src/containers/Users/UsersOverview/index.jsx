import React, { useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CDataTable,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { userOverviewActions, reducer, sliceKey } from './slice';
import { selectUserOverviewData } from './selectors';

import saga from './saga';

const fields = ['id', 'firstName', 'lastName', 'email'];

function UsersOverview({ children }) {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector(selectUserOverviewData);
  useEffect(() => {
    dispatch(userOverviewActions.getUsers());
  }, []);
  return (
    <>
      <CCol>
        <CCard>
          <CCardHeader>
            Users
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={users ?? []}
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
