import React from 'react';

// For PNGs, wrap in a React component
const Logo = React.lazy(() =>
  import('@/assets/logo.svg').then((mod) => ({
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img src={mod.default} alt="logo" {...props} />
    ),
  })),
);

// Merge toolComponents and componentRegistry into a single export
export const componentRegistry: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  // Logo components
  devLogo: Logo,
  shadiLogo: Logo,
  defaultLogo: Logo,
  // Tool components
  'json-formatter': React.lazy(() => import('@/components/tools/json-formatter')),
  'base64-converter': React.lazy(() => import('@/components/tools/base64-converter')),
  'json-validator': React.lazy(() => import('@/components/tools/json-validator')),
  'regex-tester': React.lazy(() => import('@/components/tools/regex-tester')),
  'url-converter': React.lazy(() => import('@/components/tools/url-converter')),
  'hash-generator': React.lazy(() => import('@/components/tools/hash-generator')),
  'jwt-decoder': React.lazy(() => import('@/components/tools/jwt-decoder')),
  'lorem-ipsum': React.lazy(() => import('@/components/tools/lorem-ipsum')),
  'color-converter': React.lazy(() => import('@/components/tools/color-converter')),
  'timestamp-converter': React.lazy(() => import('@/components/tools/timestamp-converter')),
  'number-converter': React.lazy(() => import('@/components/tools/number-converter')),
  'qr-code-generator': React.lazy(() => import('@/components/tools/qr-code-generator')),
};
