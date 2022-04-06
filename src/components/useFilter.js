import { useState, useCallback } from "react";

const useFilter = (initialValue) => {
  const [items, setItems] = useState(initialValue);
  const onClick = useCallback((item) => {
    setItems((items) => {
      const itemIndex = items.indexOf(item);
      const newItems = itemIndex > -1 ? [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)] : [...items, item];
      return newItems;
    });
  }, []);
  const isSelected = (item) => items.indexOf(item) > -1;
  return { items, onClick, isSelected };
};

export default useFilter;
