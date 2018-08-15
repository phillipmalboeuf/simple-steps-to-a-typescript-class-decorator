import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { withStoreContext, withContext, decorator } from './context'


interface HomepageProps extends RouteComponentProps<any> {}
interface HomepageState {
  cats: CatProps[]
}

export class Homepage extends React.Component<HomepageProps, HomepageState> {
  constructor(props: HomepageProps) {
    super(props)
    this.state = {
      cats: [{id: 1, name: 'Garfield'}, {id: 2, name: 'Mufasa'}]
    }
  }

  public render() {
    return <>
      {this.state.cats.map(cat => <Cat key={cat.id} { ...cat } />)}
      <Cart />
    </>
  }
}

interface StoreContextProps {
  context?: {
    cart: {catId: number}[],
    addPetToCart: (catId: number)=> void
  }
}

interface CatProps extends StoreContextProps {
  id: number,
  name: string
} 
interface CatState {}

@withStoreContext
export class Cat extends React.Component<CatProps, CatState> {
  constructor(props: CatProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return <div>
      <strong>{this.props.name}</strong>
      <button onClick={()=> this.props.context.addPetToCart(this.props.id)}>Add to Cart</button>
    </div>
  }
}


interface CartProps extends StoreContextProps {}
interface CartState {}

@withStoreContext
export class Cart extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return <ol>
      {this.props.context.cart.map((item, index)=> <li key={index}>{item.catId}</li>)}
    </ol>
  }
}