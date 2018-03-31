import { Component, Prop, State } from '@stencil/core';
import { Action, Store } from '@stencil/redux';

import Actions from '../state/actions';
import { configureStore } from '../state/store';
import initialState from '../state/state';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;
  @State() count: number;

  /* should match Actions.INCREMENT.ACTION.name */ increment: Action;
  /* should match Actions.DECREMENT.ACTION.name */ decrement: Action;

  componentWillLoad() {
    this.store.setStore(configureStore(initialState));

    this.store.mapStateToProps(this, (state) => {
      const {
        count
      } = state;

      return count;
    });

    this.store.mapDispatchToProps(this, {
      [Actions.INCREMENT.ACTION.name]: Actions.INCREMENT.ACTION,
      [Actions.DECREMENT.ACTION.name]: Actions.DECREMENT.ACTION,
    });

  }

  doIncrement = () => {
    this.increment();
  };

  doDecrement = () =>  {
    this.decrement();
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

        <button onClick={this.doIncrement}>INCREMENT</button>
        <button onClick={this.doDecrement}>DECREMENT</button>
        <input type="number" value={this.count}/>
      </div>
    );
  }
}
