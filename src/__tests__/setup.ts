import { afterEach } from 'vitest';

// Cleanup DOM if running in browser environment
afterEach(() => {
  if (typeof document !== 'undefined') {
    document.body.innerHTML = '';
  }
});
