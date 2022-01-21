import Nunjucks from 'nunjucks';
import Button from '../src/button.njk?raw';
import iconSVG from './ic-baseline-waving-hand.svg?raw';

import '~/theme';
import '../src/_button.scss';

const ButtonTpl = Nunjucks.compile(Button);

export default {
  parameters: { layout: 'centered' },
};

export const button = () =>
  Nunjucks.renderString(
    `{% import ButtonTpl as Button %}
    {{ Button.btn('Hello Rioters 🤘 !') }}`,
    { ButtonTpl }
  );

export const buttonOutlined = () =>
  Nunjucks.renderString(
    `{% import ButtonTpl as Button %}
    {{ Button.btn('An outlined button', classes="outlined") }}`,
    { ButtonTpl }
  );

export const buttonWithIcon = () =>
  Nunjucks.renderString(
    `{% import ButtonTpl as Button %}
    {{ Button.btn('A button with an icon', icon=iconSVG) }}`,
    { ButtonTpl, iconSVG }
  );

export const buttonOutlinedWithIcon = () =>
  Nunjucks.renderString(
    `{% import ButtonTpl as Button %}
    {{ Button.btn('A button with an icon', classes="outlined", icon=iconSVG) }}`,
    { ButtonTpl, iconSVG }
  );

export const buttonDisabled = () =>
  Nunjucks.renderString(
    `{% import ButtonTpl as Button %}
    {{ Button.btn('A disabled button', attrs="disabled") }}`,
    { ButtonTpl }
  );
