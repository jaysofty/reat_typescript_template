interface Props {
  cartItemsCount: number;
}

const CartNav = ({ cartItemsCount }: Props) => {
  return <div>CartNav: {cartItemsCount}</div>;
};

export default CartNav;
