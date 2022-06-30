input.onButtonPressed(Button.A, function () {
    janeejanee = randint(1, 4)
    basic.clearScreen()
    led.plot(0, 0)
    basic.pause(200)
    led.plot(3, 1)
    basic.pause(300)
    led.plot(2, 4)
    basic.pause(200)
    led.plot(3, 1)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(400)
    led.plot(4, 2)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(100)
    led.plot(2, 3)
    basic.pause(200)
    led.plot(3, 3)
    if (janeejanee == 1) {
    	
    } else if (janeejanee == 2) {
    	
    } else {
    	
    }
})
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
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # # # # .
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
let janeejanee = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.lightLevel() >= 90) {
        basic.showString("licht")
    } else if (input.lightLevel() < 90) {
        basic.showString("donker")
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(60000)
})
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
basic.forever(function () {
	
})
