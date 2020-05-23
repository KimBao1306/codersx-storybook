import {configure} from '@storybook/react';
import {addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.css';

addDecorator(withInfo);

configure(require.context('../src/components', true, /\.stories\.js$/), module);
