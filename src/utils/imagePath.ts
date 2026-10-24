/**
 * Utility to resolve local image and asset URLs with Vite's BASE_URL.
 * Supports subfolder hosting (e.g. https://kenahwellness.com/github-preview/)
 * and root development environments ('/').
 *
 * Rules:
 * - Leaves external URLs (http://, https://, //), data URIs, and blob URIs untouched.
 * - Leaves empty or falsy paths as empty string.
 * - Prevents double-prefixing if the path already starts with the base URL.
 * - Joins normalized base with the clean relative asset path.
 */
export function getImagePath(src?: string | null): string {
  if (!src) return '';

  // Preserve external URLs, data URLs, and protocol-relative URLs
  if (/^(https?:|\/\/|data:|blob:)/i.test(src)) {
    return src;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  // Avoid double prefixing if already prefixed with base URL
  if (normalizedBase !== '/' && src.startsWith(normalizedBase)) {
    return src;
  }

  // Remove leading slash if present to join cleanly with normalizedBase
  const cleanPath = src.startsWith('/') ? src.slice(1) : src;
  return `${normalizedBase}${cleanPath}`;
}
