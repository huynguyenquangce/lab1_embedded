let buttonPressed = 0
input.onGesture(Gesture.TiltLeft, function () {
    // Set A as pressed
    buttonPressed = 1
    basic.clearScreen()
    while (buttonPressed == 1) {
        // Run as long as A is pressed
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . . .
            # . . . .
            # # # # .
            # . . . .
            . # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            . . . . .
            # # # . #
            . . . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . #
            # # . # #
            . . . . #
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # # #
            . . . # .
            . . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            `)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    // Set B as pressed
    buttonPressed = 2
    basic.clearScreen()
    while (buttonPressed == 2) {
        // Run as long as B is pressed
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # .
            . . . . #
            . # # # #
            . . . . #
            . . . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . . .
            # . # # #
            . . . . .
            . . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . # #
            # . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            . # . . .
            # # # . #
            . # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            `)
        basic.pause(100)
    }
})
