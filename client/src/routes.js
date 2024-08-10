import Navigo from "navigo"
import Home from "./components/Home";
import OtherThing from "./components/OtherThing";

export const router = new Navigo("/");

function swapApp(component) {
    document.querySelector("#app").innerHTML = component;
}


router.on("/", () => router.navigate("/home"))
router.on("/home", () => swapApp(Home()));
router.on("/otherThing", () => swapApp(OtherThing()));
