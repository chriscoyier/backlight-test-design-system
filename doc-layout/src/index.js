import '~/theme/src/theme.scss';

import '@divriots/dockit-core/style.css';
import '@divriots/dockit-core/css-showcases';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  let dark = false;
  logo.addEventListener('click', () => {
    dark = !dark;
    document.documentElement.setAttribute(
      'color-scheme',
      dark ? 'dark' : 'light'
    );
  });
});
