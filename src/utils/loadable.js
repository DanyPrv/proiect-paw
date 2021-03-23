import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
