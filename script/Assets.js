"use strict";

var sprites = {};
var sounds = {};

Game.loadAssets = function () {
    var loadSprite = function (sprite) {
        return Game.loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/" + sprite);
    };

     var loadSound = function (sound) {
        return new Audio("https://2048-cupcake.github.io/pool/assets/sounds/" + sound);
    };

    sprites.mainMenuBackground = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/main_menu_background.png");
    sprites.background = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/spr_background4.png");
    sprites.ball = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/spr_ball2.png");
    sprites.redBall = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/spr_redBall2.png");
    sprites.yellowBall = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/spr_yellowBall2.png");
    sprites.blackBall = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/spr_blackBall2.png");
    sprites.stick = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/spr_stick.png");
    sprites.twoPlayersButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/2_players_button.png");
    sprites.twoPlayersButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/2_players_button_hover.png");
    sprites.onePlayersButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/1_player_button.png");
    sprites.onePlayersButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/1_player_button_hover.png");
    sprites.muteButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/mute_button.png");
    sprites.muteButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/mute_button_hover.png");
    sprites.muteButtonPressed = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/mute_button_pressed.png");
    sprites.muteButtonPressedHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/mute_button_pressed_hover.png");
    sprites.easyButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/easy_button.png");
    sprites.easyButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/easy_button_hover.png");
    sprites.mediumButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/medium_button.png");
    sprites.mediumButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/medium_button_hover.png");
    sprites.hardButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/hard_button.png");
    sprites.hardButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/hard_button_hover.png");
    sprites.backButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/back_button.png");
    sprites.backButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/back_button_hover.png");
    sprites.continueButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/continue_button.png");
    sprites.continueButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/continue_button_hover.png");
    sprites.insaneButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/insane_button.png");
    sprites.insaneButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/insane_button_hover.png");
    sprites.aboutButton = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/about_button.png");
    sprites.aboutButtonHover = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/about_button_hover.png");
    sprites.controls = loadSprite("https://2048-cupcake.github.io/pool/assets/sprites/controls.png");

    sounds.side = loadSound("https://2048-cupcake.github.io/pool/assets/sounds/Side.wav");
    sounds.ballsCollide = loadSound("https://2048-cupcake.github.io/pool/assets/sounds/BallsCollide.wav");
    sounds.strike = loadSound("https://2048-cupcake.github.io/pool/assets/sounds/Strike.wav");
    sounds.hole = loadSound("https://2048-cupcake.github.io/pool/assets/sounds/Hole.wav");
    
    // Bossa Antigua Kevin MacLeod (incompetech.com)
    // Licensed under Creative Commons: By Attribution 3.0 License
    // http://creativecommons.org/licenses/by/3.0/
    sounds.jazzTune = loadSound("https://2048-cupcake.github.io/pool/assets/sounds/Bossa%20Antigua.mp3");
}

sounds.fadeOut = function(sound) {
 
    var fadeAudio = setInterval(function () {

        if(GAME_STOPPED)
            return;

        // Only fade if past the fade out point or not at zero already
        if ((sound.volume >= 0.05)) {
            sound.volume -= 0.05;
        }
        else{
            sound.pause();
            clearInterval(fadeAudio);
        }
    }, 400);
}