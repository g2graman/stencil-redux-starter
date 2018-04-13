import { TestWindow } from '@stencil/core/dist/testing';

import { AppProfile } from './app-profile';

describe('app-profile', () => {
  it('should build', () => {
    expect(new AppProfile()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window: TestWindow;

    beforeAll(async () => {
      window = new TestWindow();

      element = await window.load({
        components: [AppProfile],
        html: '<app-profile></app-profile>'
      });
    });

    it('should not render any content if there is not a match', async () => {
      await window.flush();
      expect(element.textContent).toEqual('');
    });

    it('should work with a name passed', async () => {
      element.match = {
        params: {
          name: 'stencil'
        }
      };

      await window.flush();
      expect(element.textContent).toContain('Hello! My name is stencil. My name was passed in through a route param!');
    });
  });
});
