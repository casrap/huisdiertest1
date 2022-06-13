input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        . . . # .
        # # # . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . # . .
        # # . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . # . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . # . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let temp = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    temp = input.temperature()
    if (temp > 20) {
        basic.showString("warm")
    } else if (temp > 15) {
        basic.showString("lekker weer")
    } else if (temp > 10) {
        basic.showString("brrr")
    } else if (temp > 5) {
        basic.showString("k-koud")
    } else if (temp > 0) {
        basic.showString("t friest")
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.pause(60000)
})
