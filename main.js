/** @type {import( "../typings/phaser")} */

import { LoadScene } from "./src/scenes/LoadScene";
import { MenuScene } from "./src/scenes/MenuScene";

let game = new Phaser.Game({
  width: 100,
  height: 100,
  scene: [LoadScene, MenuScene]
});
