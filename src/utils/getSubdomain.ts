import { siteConfigs } from '@/config/siteConfigs';

// Returns the subdomain from window.location.hostname
export function getSubdomain(
  hostname: string = window.location.hostname,
): string {
  const parts = hostname.split('.').slice(0, 2);
  const availableSubdomains = Object.keys(siteConfigs);
  let name = 'default';
  availableSubdomains.forEach((subdomain) => {
    if (parts.includes(subdomain)) {
      name = subdomain;
      return;
    }
  });
  return name;
}
