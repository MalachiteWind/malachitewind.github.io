// clean-url.js
if (window.location.pathname.endsWith('/') && window.location.pathname !== '/') {
    const newPath = window.location.pathname.slice(0, -1);
    const newUrl = window.location.origin + newPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }