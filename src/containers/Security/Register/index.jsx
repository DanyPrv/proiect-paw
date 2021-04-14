import React, { useEffect } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useHistory } from 'react-router-dom';
import { registerActions, reducer, sliceKey } from './slice';

import saga from './saga';
import { selectRegisterSuccess } from './selectors';

const Register = () => {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });
  const dispatch = useDispatch();
  const success = useSelector(selectRegisterSuccess);
  const history = useHistory();
  const {
    register, handleSubmit, errors, getValues,
  } = useForm();
  useEffect(() => {
    if (success) {
      history.push('/login');
    }
  }, [success]);
  const onSubmit = (values) => {
    delete values.password2;
    dispatch(registerActions.setRegisterError(false));
    dispatch(registerActions.register(values));
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="First name"
                      autoComplete="first-name"
                      name="firstName"
                      invalid={errors && !!errors.firstName}
                      innerRef={register({ required: true })}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Last name"
                      autoComplete="last-name"
                      name="lastName"
                      invalid={errors && !!errors.lastName}
                      innerRef={register({ required: true })}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      name="username"
                      invalid={errors && !!errors.username}
                      innerRef={register({ required: true })}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      innerRef={register()}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                      invalid={errors && !!errors.password}
                      innerRef={register({ required: true })}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      name="password2"
                      invalid={errors && !!errors.password2}
                      innerRef={register({ required: true, validate: (value) => value === getValues('password') })}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol>
                      <CButton color="success" type="submit" block>Create Account</CButton>
                    </CCol>
                    <CCol>
                      <CButton color="info" block onClick={() => history.push('/login')}>Login</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
