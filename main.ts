basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 50) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    } else {
        music.stopAllSounds()
    }
})
