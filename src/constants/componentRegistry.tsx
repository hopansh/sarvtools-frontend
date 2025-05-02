import React from 'react';

// For PNGs, wrap in a React component
const Logo = React.lazy(() =>
  import('@/assets/logo.svg').then((mod) => ({
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img src={mod.default} alt="logo" {...props} />
    ),
  })),
);

export const componentRegistry: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  devLogo: Logo,
  shadiLogo: Logo,
  defaultLogo: Logo,
  // Add more mappings as needed
};
