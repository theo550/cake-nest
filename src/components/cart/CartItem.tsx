import { MenuType } from "../../types/menu"

type Props = {
  item: MenuType;
}
function CartItem(props: Props) {
  const { item } = props;

  return (
    <div>{item.title}</div>
  )
}

export default CartItem