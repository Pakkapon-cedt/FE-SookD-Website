export interface CartItem {
  id: string;
  itemId: string;
  itemType: 'activity' | 'product';
  name: string;
  image?: string;
  price: number;
  qty: number;
  sellerName?: string;
  actDate?: string;
  actTime?: string;
  weightInfo?: string;
  checked: boolean;
  addedAt: number;
}

const KEY = 'sookd_cart';
export const getCart = (): CartItem[] => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } };
export const saveCart = (items: CartItem[]) => localStorage.setItem(KEY, JSON.stringify(items));
export const addToCart = (items: Omit<CartItem,'id'|'checked'|'addedAt'>[]) => {
  const cart = getCart();
  const newItems: CartItem[] = items.map(item => ({ ...item, id: `cart_${Date.now()}_${Math.random().toString(36).slice(2,7)}`, checked: true, addedAt: Date.now() }));
  saveCart([...cart, ...newItems]);
};
export const removeFromCart = (id: string) => saveCart(getCart().filter(c => c.id !== id));
