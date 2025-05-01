import React from 'react';

export const toolComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
    // 'json-formatter': React.lazy(() => import('@/components/tools/json-formatter')),
    'base64-converter': React.lazy(() => import('@/components/tools/base64-converter')),
    // 'json-validator': React.lazy(() => import('@/components/tools/json-validator')),
    // 'regex-tester': React.lazy(() => import('@/components/tools/regex-tester')),
    // 'url-converter': React.lazy(() => import('@/components/tools/url-converter')),
    // 'hash-generator': React.lazy(() => import('@/components/tools/hash-generator')),
    // 'jwt-decoder': React.lazy(() => import('@/components/tools/jwt-decoder')),
    // 'lorem-ipsum': React.lazy(() => import('@/components/tools/lorem-ipsum')),
    // 'color-converter': React.lazy(() => import('@/components/tools/color-converter')),
    // 'timestamp-converter': React.lazy(() => import('@/components/tools/timestamp-converter')),
  };