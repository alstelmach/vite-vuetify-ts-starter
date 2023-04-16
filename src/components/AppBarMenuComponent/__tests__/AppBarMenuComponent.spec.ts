import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import AppBarMenuComponent from '../AppBarMenuComponent.vue';
import { getUserConfigStore } from '@/store';

describe('AppBarMenuComponent', () => {
  mockWindowMatchMedia();

  const testingPinia = createTestingPinia({
    createSpy: vi.fn(),
  });

  const userConfigStore = getUserConfigStore(testingPinia);
  userConfigStore._darkThemeModeEnabled = true;
  userConfigStore._currentLocale = 'en';

  const wrappedComponent = shallowMount(AppBarMenuComponent, {
    global: {
      plugins: [testingPinia],
    },
  });

  it('renders theme toggle button', () => {
    const themeToggleButton = wrappedComponent.find('.v-btn');
    expect(themeToggleButton).toBeTruthy();
  });

  it('updates document title on mounted hook', () => {
    expect(document.title).toBe('Robercik');
  });

  wrappedComponent.unmount();
});

function mockWindowMatchMedia(): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}
