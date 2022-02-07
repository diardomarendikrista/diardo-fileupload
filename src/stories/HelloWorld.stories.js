import React from 'react';
import { storiesOf } from '@storybook/react';

import { HelloWorld } from '../components/HelloWorld';

const stories = storiesOf('diardo-fileupload', module);

stories.add('HelloWorld', () => {
	return <HelloWorld />;
});
