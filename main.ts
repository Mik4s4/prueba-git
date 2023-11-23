input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 3))
    if ("1" == "1") {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.clearScreen()
    if ("3" == "3") {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # . # . #
            `)
    }
    basic.clearScreen()
    if ("3" == "3") {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    basic.clearScreen()
})
