import desert from "../assets/windows xp desert.png";

export default function Game() {
    
    return /*html*/`
        <div id="game">
            <p>i will be the game</p>
            <img src="${desert}" width="25%" height="25%" alt="windows xp desert?">
            <p><a href="/home" data-navigo>Go Back</a></p>
        </div>
    `;
}