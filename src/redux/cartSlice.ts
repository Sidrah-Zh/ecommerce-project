import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = (): Product[] => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: Product[];
}

const initialState: CartState = {
  cartItems: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const updatedCart = loadCartFromLocalStorage();

      const existingProduct = updatedCart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        updatedCart.push({ ...action.payload, quantity: 1 });
      }

      state.cartItems = updatedCart;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const updatedCart = loadCartFromLocalStorage().filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = updatedCart;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const updatedCart = loadCartFromLocalStorage();
      const item = updatedCart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.cartItems = updatedCart;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const updatedCart = loadCartFromLocalStorage();
      const item = updatedCart.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          updatedCart.splice(updatedCart.indexOf(item), 1);
        }
      }
      state.cartItems = updatedCart;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
