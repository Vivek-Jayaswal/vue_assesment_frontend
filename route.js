import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./src/components/SignUp.vue";
import Login from "./src/components/Login.vue";
import Invoice from "./src/components/Invoice.vue";
import axios from "axios";

const routes = [
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "Login",
    path: "/",
    component: Login,
  },
  {
    name: "Invoice",
    path: "/invoice",
    component: Invoice,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      const response = await axios.get(
        "http://localhost:8000/auth/check-session",
        { withCredentials: true }
      );

      console.log("auth response :- ", response);

      if (response.status === 200 && response.data.isAuthenticated) {
        next();
      } else {
        next({ name: "Login" });
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
