const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          forceHTTPSRedirect: [true, { maxAge: 31536000, includeSubDomains: true, preload: true }],
          referrerPolicy: 'same-origin'
        })
      }
    ];
  }
};
