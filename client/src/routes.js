import Navigo from "navigo"
import Home from "./components/Home";
import OtherThing from "./components/OtherThing";
import Game from "./games/Game";

export const router = new Navigo("/", { hash: true });

function render(component) {
    document.querySelector("#app").innerHTML = component;
}


router
    .on("/", () => router.navigate("/home"))
    .on("/home", () => render(Home()))
    .on("/otherThing", () => render(OtherThing()))
    .on("/game", () => render(Game()));

