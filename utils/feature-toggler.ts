'use client';
const LOCALSTARE_PREFIX = 'feature_';

export type Feature = 'backoffice';

export const isFeatureEnabled = (feature: Feature): boolean => {
  return localStorage.getItem(LOCALSTARE_PREFIX + feature) === 'true';
};
