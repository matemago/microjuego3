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

      this.map = this.game.add.tilemap('map');
      this.map.addTilesetImage('floor');
      this.map.setCollisionByExclusion([ 0 ]);
      

      this.layer = this.map.createLayer('Tile Layer 1');
      this.layer.resizeWorld();
      this.physics.p2.convertTilemap(this.map, this.layer);




      this.game.physics.p2.gravity.y = 250;

      this.target1 = this.add.sprite(200, 200, 'target');
      this.target2 = this.add.sprite(100, 100, 'target2');
      this.player = this.add.sprite(x, y, 'player');
      this.game.physics.p2.enable([this.player, this.target1, this.target2]);
      this.player.body.collideWorldBounds;
      this.player.body.setCircle(4);
      this.target2.body.setCircle(8);
      this.target1.body.setCircle(8);

      this.target1.body.static = true;
      this.target2.body.static = true;

      this.player.body.createBodyCallback(this.target1, function() {this.target1.kill();}, this);
      this.player.body.createBodyCallback(this.target2, function() {this.target2.kill();}, this);

      this.game.physics.p2.setImpactEvents(true);

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
