import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const HeaderDropdown = () => {
  const history = useHistory();
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div>
          <CIcon name="cil-user" />
          User name
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem onClick={() => history.push('/login')}>
          <CIcon name="cil-account-logout" className="mfe-2" />
          Log-out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
export default HeaderDropdown;
