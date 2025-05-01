// Returns the subdomain from window.location.hostname
export function getSubdomain(
  hostname: string = window.location.hostname,
): string {
  const parts = hostname.split('.');
  if (parts.length < 3 && parts[1] !== 'localhost') return 'default';
  return parts[0];
}
