import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

import { style } from 'typestyle';
import { px } from 'csx';

import { css } from '../../shared/styles';

const profileClass = style({
  padding: px(10)
});


@Component({
  tag: 'app-profile',
  // styleUrl: 'app-profile.css'
})
export class AppProfile {
  @Prop() match: MatchResults;

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class={profileClass}>
          <stencil-route-link url='/'>
            <button class={css.button}>Home</button>
          </stencil-route-link>

          <p>
            Hello! My name is {this.match.params.name}.
            My name was passed in through a route param!
          </p>
        </div>
      );
    }
  }
}
