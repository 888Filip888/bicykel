input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 - C5 - C5 - C5 - ", 720)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # # #
        . . . # #
        . . # . #
        . # . . .
        # . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 G C5 G C5 G C5 G ", 500)
    music.playMelody("C5 G C5 G C5 G C5 G ", 500)
    music.playMelody("C5 G C5 G C5 G C5 G ", 500)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.showString("ZRAŽKA")
    radio.sendString("ZRÁŽKA")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . #
        `)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
