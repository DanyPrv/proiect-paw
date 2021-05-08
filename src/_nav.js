import React from 'react';
import CIcon from '@coreui/icons-react';
import { cloneDeep } from 'lodash';
import { isUserAdmin } from './utils/user';
// eslint-disable-next-line no-underscore-dangle
const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Locations',
    to: '/locations',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
    isGrantedFunction: () => isUserAdmin(),
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cars',
    to: '/cars',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-car-alt" customClasses="c-sidebar-nav-icon" />,
  },
];

const isAllowed = (menuItem) => !('isGrantedFunction' in menuItem) || menuItem.isGrantedFunction();

export function allowedMenuItems(items) {
  let allowedItems;
  // eslint-disable-next-line array-callback-return,consistent-return
  allowedItems = items.filter((menuItem) => {
    if (isAllowed(menuItem)) {
      if (menuItem.children) {
        const allowedChildren = [{}];
        menuItem.children.forEach((child) => {
          if (isAllowed(child)) {
            allowedChildren.push(child);
          }
        });

        menuItem.children = allowedChildren;
      }

      return menuItem;
    }
  });
  allowedItems = cloneDeep(allowedItems);
  allowedItems.forEach((item) => {
    delete item.isGrantedFunction;
  });
  return allowedItems;
}
export default _nav;
