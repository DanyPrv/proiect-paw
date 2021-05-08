import React, { useState } from 'react';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
  CAlert,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { reducer, createLocationActions, sliceKey } from './slice';
import saga from './saga';
import { selectCreateLocationError, selectCreateLocationSuccess } from './selectors';
import { locationsOverviewActions } from '../LocationsOverview/slice';

const CreateLocation = () => {
  const [modal, setModal] = useState(true);
  const history = useHistory();

  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });
  const dispatch = useDispatch();
  const success = useSelector(selectCreateLocationSuccess);
  const apiErrors = useSelector(selectCreateLocationError);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    dispatch(createLocationActions.setCreateError(false));
    dispatch(createLocationActions.create(values));
  };

  const onClose = () => {
    setModal(!modal);
    dispatch(locationsOverviewActions.getLocations());
    dispatch(createLocationActions.setCreateSuccess(false));
    history.push('/locations');
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
            Create location
          </CModalTitle>
        </CModalHeader>

        <CForm onSubmit={handleSubmit(onSubmit)}>
          <CModalBody>
            {!success ? (
              <>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      Address
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Address"
                    name="address"
                    invalid={errors && !!errors.address}
                    innerRef={register({ required: true })}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      City
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="City"
                    name="city"
                    invalid={errors && !!errors.city}
                    innerRef={register({ required: true })}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      Status
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Status"
                    name="status"
                    invalid={errors && !!errors.status}
                    innerRef={register({ required: true })}
                  />
                </CInputGroup>
                {apiErrors && <div className="text-danger">Something went wrong..</div>}

              </>
            )
              : (
                <CAlert color="success">
                  Location created successfully
                </CAlert>
              )}
          </CModalBody>
          <CModalFooter>
            {!success && (
            <CButton color="primary" className="px-4" type="submit">
              Create
            </CButton>
            )}
            <CButton color="secondary" onClick={() => onClose()}>{!success ? 'Create' : 'Close'}</CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default CreateLocation;
