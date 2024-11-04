import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreatePoll from "../views/CreatePoll.vue";
import LoginPage from "../views/LoginPage.vue";
import PublicPolls from "../views/PublicPolls.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProtectedRoute from "../views/ProtectedRoute.vue";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: () => RegisterPage,
    },
    {
      path: "/public-polls",
      name: "publicPolls",
      component: () => PublicPolls,
    },
    {
      path: "/create-poll",
      name: "createpoll",
      component: () => CreatePoll,
      meta: {
        isAuthRequired: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAutheticated = auth.currentUser;
  const isAuthRequired = to.matched.some(
    (record) => record.meta.isAuthRequired
  );
  if (isAuthRequired && !isAutheticated) {
    // alert("hello");
    next("/login");
  } else {
    next();
  }
});

export default router;
