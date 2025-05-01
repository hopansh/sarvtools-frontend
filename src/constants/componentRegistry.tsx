import React from 'react';

// For PNGs, wrap in a React component
const LogoPng = React.lazy(() =>
  import('@/assets/logo.png').then((mod) => ({
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img src={mod.default} alt="logo" {...props} />
    ),
  })),
);

export const componentRegistry: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  devLogo: LogoPng,
  shadiLogo: LogoPng,
  defaultLogo: LogoPng,
  // Add more mappings as needed
};
