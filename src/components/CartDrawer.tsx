import React from 'react';
import { InquiryDrawer } from './InquiryDrawer';
import { InquiryItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: any[];
  onUpdateQty: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) => {
  const inquiryList: InquiryItem[] = cart.map((item) => {
    if (item.product) {
      return {
        product: item.product,
        estimatedQuantity: item.quantity || item.estimatedQuantity || 250,
        selectedColor: item.selectedColor || item.selectedSize,
        customNotes: item.customNotes,
      };
    }
    return item;
  });

  return (
    <InquiryDrawer
      isOpen={isOpen}
      onClose={onClose}
      inquiryList={inquiryList}
      onUpdateQty={onUpdateQty}
      onRemoveItem={onRemoveItem}
      onClearList={onClearCart}
    />
  );
};
