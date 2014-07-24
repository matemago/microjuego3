(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.jumpTimer = 0;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
      , y = this.game.height / 2;

      this.game.physics.startSystem(Phaser.Physics.P2JS);
     

      this.camera.follow(this.player, Phaser.Camera.STYLE_LOCKON);
      //this.camera.scale(0.1,0.1);


    },

    update: function () {

    if (this.input.keyboard.isDown(Phaser.Keyboard.A))
    {
      this.player.body.moveLeft(200);
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
    {
      this.player.body.moveRight(200);
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.W) && this.game.time.now > this.jumpTimer)
    {
      this.player.body.moveUp(250);
      this.jumpTimer = this.game.time.now + 1000;
    }








      /*var x, y, cx, cy, dx, dy, angle, scale;

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

      angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      this.player.angle = angle;

      dx = x - cx;
      dy = y - cy;
      scale = Math.sqrt(dx * dx + dy * dy) / 100;

      this.player.scale.x = scale * 0.6;
      this.player.scale.y = scale * 0.6;*/
    }
  };

  window['microjuego3'] = window['microjuego3'] || {};
  window['microjuego3'].Game = Game;

}());
