import { defineManifest } from 'argonite-core';

export default defineManifest({
  name: 'Argonite Popup Example',
  description: 'A simple Chrome extension popup using Argonite Core.',
  version: '1.0.0',
  manifest_version: 3,
  action: {
    default_popup: 'popup.html',
    default_title: 'Argonite Popup Example'
  },
  permissions: [],
});
