import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Checkout from "../views/Checkout.vue";
import Login from "../views/Authentication/Login.vue";
import Register from "../views/Authentication/Register.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"), // Create a NotFound.vue component
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
