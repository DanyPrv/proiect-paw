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
import { reducer, createCarActions, sliceKey } from './slice';
import saga from './saga';
import { selectCreateCarError, selectCreateCarSuccess } from './selectors';
import { carsOverviewActions } from '../CarsOverview/slice';

const CreateCar = () => {
  const [modal, setModal] = useState(true);
  const history = useHistory();

  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });
  const dispatch = useDispatch();
  const success = useSelector(selectCreateCarSuccess);
  const apiErrors = useSelector(selectCreateCarError);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    values.engine = Number(values.engine);
    dispatch(createCarActions.setCreateError(false));
    dispatch(createCarActions.create(values));
  };

  const onClose = () => {
    setModal(!modal);
    dispatch(carsOverviewActions.getCars());
    dispatch(createCarActions.setCreateSuccess(false));
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
            Create car
          </CModalTitle>
        </CModalHeader>

        <CForm onSubmit={handleSubmit(onSubmit)}>
          <CModalBody>
            {!success ? (
              <>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      Model
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Model"
                    name="model"
                    invalid={errors && !!errors.model}
                    innerRef={register({ required: true })}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      Year
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Year"
                    name="year"
                    invalid={errors && !!errors.year}
                    innerRef={register({ required: true })}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      Engine
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="number"
                    placeholder="Engine"
                    name="engine"
                    invalid={errors && !!errors.engine}
                    innerRef={register({ required: true })}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      Fuel
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Fuel"
                    name="fuel"
                    invalid={errors && !!errors.fuel}
                    innerRef={register({ required: true })}
                  />
                </CInputGroup>
                {apiErrors && <div className="text-danger">Something went wrong..</div>}

              </>
            )
              : (
                <CAlert color="success">
                  Car created successfully
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

export default CreateCar;
