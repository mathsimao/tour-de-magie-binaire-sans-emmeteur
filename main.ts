input.onButtonPressed(Button.A, function () {
    nombre = nombre + 2 ** compteur
    basic.showString("O")
    compteur += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(nombre)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("N")
    compteur += 1
})
let nombre = 0
let compteur = 0
compteur = 0
nombre = 0
let pause2 = 2000
let fin = 5
basic.showString("Magie !")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    while (compteur < fin) {
        basic.showString("Carte " + (compteur + 1) + "?")
        basic.pause(pause2)
    }
})
