import * as React from 'react'

export const StoreContext = React.createContext({
  cart: [] as {catId: number}[],
  addPetToCart: (catId: number)=> function(): void {}
})

export function withContext<C extends React.ComponentClass>(Component: C): C {
  return Component
}

export function decorator<C>(ClassDefinition: C): C {
  return ClassDefinition
}

export function withStoreContext<C extends React.ComponentClass>(Component: C): C {
  return (props => <StoreContext.Consumer>
      {context => <Component {...props} context={context} />}
    </StoreContext.Consumer>) as any as C
}