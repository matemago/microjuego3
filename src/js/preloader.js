(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/molecula.png');
      this.load.image('target', 'assets/molecula2.png');
      this.load.image('target2', 'assets/molecula3.png');
      this.load.tilemap('map', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.image('floor', 'assets/purple.jpg')
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['microjuego3'] = window['microjuego3'] || {};
  window['microjuego3'].Preloader = Preloader;

}());
