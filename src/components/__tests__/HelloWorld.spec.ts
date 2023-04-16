import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify, { components } from '../../plugins/vuetify';

import HelloWorldComponent from '../HelloWorldComponent.vue';

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorldComponent, {
    global: { plugins: [vuetify] },
    props: { msg: 'Hello Vitest' },
  });

  it('mount component', async () => {
    expect(HelloWorldComponent).toBeTruthy();

    const img = wrapper.findComponent(components.VImg);
    expect(img).toBeTruthy();

    expect(wrapper.text()).toContain('Welcome to the Vuetify');
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
