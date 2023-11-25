import solid_logo from "../assets/solid.svg";
import instagram_logo from "../assets/instagram-logo.svg"
import shopping_cart_icon from "../assets/shopping-cart-outline-svgrepo-com.svg"

function Header() {
  return (
    <div class="fixed top-0 w-full flex justify-center shadow-md">
      <div class="flex flex-col justify-center w-2/5">
        <div class="flex justify-center my-5">
          <img alt="Solid logo" src={solid_logo} class="h-32" />
        </div>
        <div>
          <nav>
            <ol class="flex justify-evenly p-1">
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                start
              </li>
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                t-shirts
              </li>
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                bags
              </li>
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                prints
              </li>
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                stickers
              </li>
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                jewelry
              </li>
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                custom
              </li>
              <li class="text-xl hover:text-pink-500 transition-all duration-150">
                about
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div>
          <img alt="instagram logo" src={instagram_logo} class="h-8 m-2" />
        </div>
        <div>
          <img alt="shoppingcart logo" src={shopping_cart_icon} class="h-8 m-2" />
        </div>
      </div>
    </div>
  );
}

export default Header;
