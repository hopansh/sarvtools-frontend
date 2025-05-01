import { componentRegistry } from '@/constants/componentRegistry';

export function getLazyComponentByKey(key: string) {
  return componentRegistry[key] || null;
}
