import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mmkvStorage } from './storage';

interface CartItem {
  price: number;
  id: string | number;
  item: any;
  count: number;
  product_id: string | number;
}

interface CartStore {
  cart: CartItem[];
  addItem: (item: any) => void;
  removeItem: (id: string | number) => void;
  clearCart: () => void;
  getItemCount: (id: string | number) => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addItem: item => {
        const currentCart = get().cart;
        const existingItemIndex = currentCart.findIndex(
          cartItem => cartItem?.product_id === item?.product_id,
        );
        if (existingItemIndex >= 0) {
          const updatedCart = [...currentCart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            count: updatedCart[existingItemIndex].count + 1,
          };
          set({ cart: updatedCart });
        } else {
          set({
            cart: [
              ...currentCart,
              {
                id: item.id,
                item: item,
                count: 1,
                product_id: item.product_id,
                price: item.price,
              },
            ],
          });
        }
      },

      clearCart: () => set({ cart: [] }),
      removeItem: id => {
        const currentCart = get().cart;
        const existingItemIndex = currentCart.findIndex(
          cartItem => cartItem?.product_id === id,
        );

        if (existingItemIndex >= 0) {
          const updatedCart = [...currentCart];
          const existingItem = updatedCart[existingItemIndex];

          if (existingItem.count > 1) {
            updatedCart[existingItemIndex] = {
              ...existingItem,
              count: existingItem?.count - 1,
            };
          } else {
            updatedCart.splice(existingItemIndex, 1);
          }

          set({ cart: updatedCart });
        }
      },

      getItemCount: id => {
        const currentItem = get().cart.find(
          cartItem => cartItem.product_id === id,
        );
        return currentItem ? currentItem?.count : 0;
      },

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, cartItem) => total + cartItem.item.price * cartItem.count,
          0,
        );
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
