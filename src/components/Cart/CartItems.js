import { RES_MENU_IMG_URL } from "../../utils/constants";
import { useDispatch} from "react-redux";
import { addItem, deleteItem, removeItem } from "../../features/cardSlice";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // Dispatch action to add item or increment quantity
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Dispatch removeItem to Redux
  };

  const handleDeleteItem = (item) => {
  dispatch(deleteItem(item)); // Ensure it clears fully
  };

  return (
    <div>
      {items?.map((item) => (
        <div className="flex justify-between items-center p-2 border-b border-[#ccc]">
          <div className="min-w-[80px] max-w-[150px] h-auto">
            <img
              className="w-full h-auto font-semibold"
              src={`${RES_MENU_IMG_URL}${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
          </div>
          <div className="mx-5 font-semibold">
            <h5>{item.card.info.name}</h5>
            <h6>{`₹${
              item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100
            }`}</h6>
          </div>

          <div className="flex center my-5 font-semibold">
            <span>Qty:</span>
            <div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="p-1 m-1 cursor-pointer w-5 bg-primary-color text-white border-none rounded-md inline-flex"
              >
                -
              </button>

              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="1"
                className="border-none text-black w-6 center"
                value={item.quantity}
              />
              <button
                onClick={() => handleAddItem(item)}
                className="p-1 m-1 cursor-pointer w-5 bg-primary-color text-white border-none rounded-md inline-flex"
              >
                +
              </button>
              <BsFillTrash3Fill
                className="text-white text-2xl mx-5 p-1 cursor-pointer hover:text-primary-color transition duration-200"
                onClick={() => handleDeleteItem(item)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
