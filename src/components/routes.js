import Login from "./pages/login";
import Parametre from ".//pages/parametre"
import Numero from ".//pages/numero";

const routes = [
    {
        path: "/",
        component: Parametre,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/numero",
        component: Numero,
    }
];

export default routes;
