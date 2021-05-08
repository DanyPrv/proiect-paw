import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useSelector, useDispatch } from 'react-redux';

import { appActions } from '../../../App/slice';
import { selectUser } from '../../../App/selectors';

const HeaderDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onLogout = () => {
    dispatch(appActions.logout());
    history.push('/login');
  };
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div>
          <CIcon name="cil-user" />
          {`${user.firstName} ${user.lastName}`}
        </div>
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" />
          Profile
        </CDropdownItem>
        <CDropdownItem onClick={() => onLogout()}>
          <CIcon name="cil-account-logout" />
          Log-out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
export default HeaderDropdown;
