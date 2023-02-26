export const printPrice = (price: number) => {
  return `$ ${price}`;
};

export const printShortTitle = (text: string, size: number) => {
  if (text.length > size) {
    return text.slice(0, size - 3) + '...';
  } else {
    return text;
  }
};
