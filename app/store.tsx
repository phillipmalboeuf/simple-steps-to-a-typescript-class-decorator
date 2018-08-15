import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { StoreContext } from './context'
import { Homepage } from './homepage'

interface StoreProps {}
interface StoreState {
  cart: {catId: number}[]
}

export class Store extends React.Component<StoreProps, StoreState> {
  constructor(props: StoreProps) {
    super(props)
    this.state = {
      cart: []
    }
  }

  public addPetToCart(catId: number): void {
    this.setState({ cart: [...this.state.cart, { catId }] })
  }

  public render() {
    return <StoreContext.Provider value={{
        cart: this.state.cart,
        addPetToCart: this.addPetToCart.bind(this)
      }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </StoreContext.Provider>
  }
}