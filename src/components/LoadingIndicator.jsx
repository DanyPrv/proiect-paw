import React from 'react';
import { CSpinner } from '@coreui/react';

function LoadingIndicator() {
  return (
    <div className="pt-3 text-center" style={{ width: '40px', height: '40px' }}>
      <CSpinner />
    </div>

  );
}

export default LoadingIndicator;
