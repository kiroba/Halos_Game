import { CST } from "../CST";
import { MenuScene } from "./MenuScene";

export class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.LOAD
    });
  }
  init() {}
  preload() {
    //load images, spritesheets and sounds

    this.load.image("title_bg", "./dist/assets/title_bg.jpg");
    this.load.image("options_button", "./dist/assets/options_button.jpg");
    this.load.image("play_button", "./dist/assets/play_button.jpg");
    this.load.image("logo", "./dist/assets/logo.jpg");
    this.load.spritesheet("player", "./dist/assets/player.png", {
      frameHeight: 32,
      frameWidth: 32
    });
    this.load.audio("title_music", "./dist/assets/title_music.mp3");

    //creating loading bar
    let loadingBar = this.add.graphics({
      fillstyle: {
        color: 0xffffff //white
      }
    });
    /*
    Loader Events:
    complete - when done loading everything
    progress - loader numbers progress in decimal
    */

    //simulate large load
    for (let i = 0; i < 100; i++) {
      this.load.spritesheet("cat" + i, "./assets/cat.png", {
        frameHeight: 32,
        frameWidth: 32
      });
    }

    this.load.on("progress", (percent) => {
      loadingBar.fillRect(
        0,
        this.game.renderer.height / 2,
        this.game.renderer.width * percent,
        50
      );
      console.log(percent);
    });
  }
  create() {
    // this is for dynamic scenes
    //this.scene.add(CST.SCENES.MENU, MenuScene, false)
    this.scene.start(CST.SCENES.MENU, "hello from loading");
  }
}
