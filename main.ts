let degree = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
    degree = input.compassHeading()
    if (degree >= 0 && degree < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (degree >= 45 && degree < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (degree >= 135 && degree < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (degree >= 225 && degree < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
