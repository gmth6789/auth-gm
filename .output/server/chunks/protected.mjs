import { defineEventHandler } from 'h3';

const _protected = defineEventHandler(() => {
  return {
    message: [
      "This is a protected content. You can access this content because you are signed in."
    ]
  };
});

export { _protected as default };
//# sourceMappingURL=protected.mjs.map
