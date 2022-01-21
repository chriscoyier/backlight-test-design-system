import Nunjucks from 'nunjucks';
import buttonGroup from '../src/buttonGroup.njk?raw';

import '~/theme';
import '../src/_buttonGroup.scss';

const ButtonTpl = Nunjucks.compile(buttonGroup);

export const button = () =>
  Nunjucks.renderString(
    `{% import ButtonTpl as buttonGroup %}
    {{ buttonGroup.buttonGroup('Hello, World!') }}`,
    { ButtonTpl }
  );
