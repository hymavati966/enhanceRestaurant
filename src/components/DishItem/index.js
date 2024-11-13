import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishType,
    dishName,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div className="backCon">
      <div className="controller-container d-flex flex-row align-items-center bg-success">
        <button className="button" type="button" onClick={onDecreaseQuantity}>
          -
        </button>
        <p className="quantity">{getQuantity()}</p>
        <button className="button" type="button" onClick={onIncreaseQuantity}>
          +
        </button>
      </div>
    </div>
  )

  return (
    <li className="dish-items-container">
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} me-3`}
      >
        <div className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`} />
      </div>
      <div className="first-container">
        <div className="dish-details-container">
          <h1 className="dish-name">{dishName}</h1>
          <p className="dish-currency-price">
            {dishCurrency} {dishPrice}
          </p>
          <p className="dish-description">{dishDescription}</p>
          {dishAvailability && renderControllerButton()}
          {!dishAvailability && (
            <p className="not-availability-text text-danger">Not Available</p>
          )}
          {addonCat.length !== 0 && (
            <p className="addon-availability-text">Customizations available</p>
          )}
        </div>
        <div className="second-container">
          <p className="dish-calories text-warning">{dishCalories} calories</p>
          <img className="dish-image" alt={dishName} src={dishImage} />
        </div>
      </div>
    </li>
  )
}
export default DishItem
