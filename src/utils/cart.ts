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

function cartKey(): string {
  try {
    const s = localStorage.getItem('sookd_user');
    const user = s ? JSON.parse(s) : null;
    return user?.user_id ? `sookd_cart_${user.user_id}` : 'sookd_cart_guest';
  } catch {
    return 'sookd_cart_guest';
  }
}

export const getCart = (): CartItem[] => { try { return JSON.parse(localStorage.getItem(cartKey()) || '[]'); } catch { return []; } };
export const saveCart = (items: CartItem[]) => localStorage.setItem(cartKey(), JSON.stringify(items));
export const addToCart = (items: Omit<CartItem,'id'|'checked'|'addedAt'>[]) => {
  const cart = getCart();
  const newItems: CartItem[] = items.map(item => ({ ...item, id: `cart_${Date.now()}_${Math.random().toString(36).slice(2,7)}`, checked: true, addedAt: Date.now() }));
  saveCart([...cart, ...newItems]);
};
export const removeFromCart = (id: string) => saveCart(getCart().filter(c => c.id !== id));
