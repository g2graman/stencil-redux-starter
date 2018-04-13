import { MyApp } from './my-app';

describe('my-app', () => {
  it('should build', () => {
    expect(new MyApp()).toBeTruthy();
  });

  /*describe('rendering', () => {
    let window: TestWindow;

    beforeAll(async () => {
      window = new TestWindow();

      await window.load({
        components: [MyApp],
        html: '<my-app></my-app>'
      });
    });
  });*/
});
