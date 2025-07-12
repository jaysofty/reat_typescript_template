import ListGroup from "./ListGroup";
import Button from "./Button";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  const onSelectItem = (item: string) => {
    console.log("Selected:", item);
  };

  return (
    <>
      <div>Cart</div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <ListGroup
          heading="Cart Item"
          items={cartItems}
          bordered
          rounded
          hoverable
          onSelectItem={onSelectItem}
        />
      </ul>

      <Button color="primary" stretched onClick={onClear}>
        Cear
      </Button>
    </>
  );
};

export default Cart;
