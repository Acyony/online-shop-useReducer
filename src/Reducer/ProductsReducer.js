export default function reducer(state, action) {
  switch (action.type) {
    case "getProducts":
      return { products: action.payload};
    case "filterProducts":
      return { products: state.products.filter((p) => p.category === action.payload)};
      default: 
      return state;
  }
}
