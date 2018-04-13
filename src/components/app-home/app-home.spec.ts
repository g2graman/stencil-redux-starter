import { TestWindow } from '@stencil/core/dist/testing';

import { AppHome } from './app-home';

describe('app', () => {
  it('should build', () => {
    expect(new AppHome()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window: TestWindow;

    beforeAll(async () => {
      window = new TestWindow();

      element = await window.load({
        components: [AppHome],
        html: '<app-profile></app-profile>'
      });
    });
  });
});
