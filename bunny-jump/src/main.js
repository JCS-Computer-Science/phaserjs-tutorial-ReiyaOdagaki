import Phaser from './lib/phaser.js'

console.dir(Phaser)

import Game from './scenes/Game.js'

export default new Phaser.Game({
     type: Phaser.AUTO,
     width: 480,
     height: 640,
     scene: Game,
     physics: {
         default: 'arcade',
         arcade: {
         gravity: {
         y: 200
         },
         debug: true
         }
        } 
})
    //PAGE 24 PDF / PAGE 21 PHASER