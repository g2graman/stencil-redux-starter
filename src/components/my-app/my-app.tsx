import { Component, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';

import container from '../../config/config';
import getDecorators from 'inversify-inject-decorators';

import { Identifiers } from '../../config/constants';

import Actions from '../state/actions';
import initialState from '../state/state';

import Utilities from '../../shared/utils';
import { css } from '../../shared/styles';

let { lazyInject } = getDecorators(container);

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  @lazyInject(Identifiers.Utilities) private readonly utilities: Utilities;

  @Prop({ context: 'store' }) store: Store;
  @State() readonly count: number = 0;

  componentWillLoad() {
    this.utilities.mapDispatchtoMethods(this, Actions);
    this.utilities.setupStore(this, Actions, initialState);
  }

  doIncrement = () => { // avoid having to bind this method for use in render
    this[Actions.INCREMENT.ACTION.name]();
  };

  doDecrement = () =>  { // avoid having to bind this method for use in render
    this[Actions.DECREMENT.ACTION.name]();
  };

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
          </stencil-router>
        </main>

        <button class={css.button} onClick={this.doIncrement}>INCREMENT</button>
        <button class={css.button} onClick={this.doDecrement}>DECREMENT</button>
        <input type='number' value={this.count} readonly/>
      </div>
    );
  }
}
