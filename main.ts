input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
    basic.showLeds(`
        . . # . #
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("F")
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("B")
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
})
hummingbird.startHummingbird()
radio.setGroup(12)
