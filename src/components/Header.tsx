import solid_logo from "../assets/solid.svg";
import instagram_logo from "../assets/instagram-logo.svg"
import shopping_cart_icon from "../assets/shopping-cart-outline-svgrepo-com.svg"
import { createSignal } from "solid-js";
import clsx from "clsx";

function Header() {
  let hide_offset = 300;

  let [get_should_hide, set_should_hide] = createSignal(false);
  const listener = document.addEventListener('scroll', (event) => {
    const current_scroll = window.scrollY || document.documentElement.scrollTop;
    if (current_scroll > hide_offset) {
      set_should_hide(true);
    } else {
      set_should_hide(false);
    }
  });
  return (
    <div class={clsx('fixed h-52 top-0 w-full flex justify-center shadow-md z-40 bg-white transition-all duration-300', get_should_hide() ? '-top-52' : '')}>
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
