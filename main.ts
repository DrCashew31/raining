let X_move = 0
loops.everyInterval(100, function () {
    X_move = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        led.plot(X_move, index)
        basic.pause(200)
        led.unplot(X_move, index)
    }
})
