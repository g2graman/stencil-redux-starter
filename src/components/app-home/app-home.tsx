import { Component } from '@stencil/core';

import { style } from 'typestyle';

import { css } from '../../shared/styles';

const homeClass = style({
  padding: '10px'
});

@Component({
  tag: 'app-home',
  // styleUrl: 'app-home.css'
})
export class AppHome {
  render() {
    return (
      <div class={homeClass}>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button class={css.button}>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
