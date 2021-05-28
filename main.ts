input.onButtonPressed(Button.A, function () {
    balle.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(balle.get(LedSpriteProperty.X), balle.get(LedSpriteProperty.Y))
    bullet.set(LedSpriteProperty.Brightness, 200)
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
function music2 () {
    for (let index = 0; index < 2; index++) {
        music.playTone(139, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Breve))
        basic.pause(200)
        music.playTone(139, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Breve))
        basic.pause(200)
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(139, music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Breve))
        basic.pause(200)
        music.playTone(139, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Breve))
        basic.pause(200)
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Breve))
        basic.pause(200)
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Breve))
    }
}
input.onButtonPressed(Button.B, function () {
    balle.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    music2()
})
let ticks = 0
let bullet: game.LedSprite = null
let passage = 0
let balle: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showString(" 3 2 1 !")
let obstacles: game.LedSprite[] = []
balle = game.createSprite(2, 4)
let bonus = game.createSprite(passage, passage)
balle.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    basic.pause(1000)
    while (true) {
        while (obstacles.length > 4 && obstacles[0].get(LedSpriteProperty.Y) == 4) {
            obstacles.removeAt(0).delete()
            game.addScore(0.25)
        }
        for (let obstacle2 of obstacles) {
            obstacle2.change(LedSpriteProperty.Y, 1)
        }
        if (ticks % 3 == 0) {
            passage = randint(0, 4)
            for (let index2 = 0; index2 <= 4; index2++) {
                if (index2 != passage) {
                    obstacles.push(game.createSprite(index2, 0))
                }
            }
        }
        bonus.set(LedSpriteProperty.X, passage)
        bonus.set(LedSpriteProperty.Brightness, 140)
        basic.pause(1000)
        if (bullet) {
            if (bullet.isTouching(bonus)) {
                game.addScore(1)
            }
        }
        if (bullet) {
            if (bullet.isTouchingEdge()) {
                bullet.delete()
            }
        }
        for (let obstacle3 of obstacles) {
            if (obstacle3.get(LedSpriteProperty.X) == balle.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == balle.get(LedSpriteProperty.Y)) {
                for (let index = 0; index < 5; index++) {
                    basic.showLeds(`
                        # . . . #
                        . . . . .
                        # # # # #
                        . . # . #
                        . . # # #
                        `)
                }
                basic.pause(1000)
                game.gameOver()
            }
        }
        ticks += 1
        basic.pause(1000)
    }
})
