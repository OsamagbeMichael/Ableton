// Single data boundary for every component. In dev, `?data=worst` swaps in the
// break-ui worst-case fixtures before first render (see main.jsx). Production
// never loads worst.js: the dev-only branch is removed at build time.
import * as demo from './content.js';

export const content = { ...demo };

export function applyWorstCase(worst) {
  Object.assign(content, worst);
}
