//  https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-d
//  https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-a/blob/master/03-04-pomodoro-timeline.jpg
//  JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-03-04-E
//  Mint D, plusz a time_multiplier változó bevezetésével tudunk teszt időközök és valós között választani
//  time_multiplier = 1, akkor demo W=2,5s SR=0,5s, LR=1,5s
//  time_multiplier = 0.5, akkor a demo kétszer gyorsabb lesz (a szüneteket nem szoroztuk, hanem igazából osztottuk, mert a szorzó kisebb volt egynél
//  time_multiplier = 60, akkor éles  W=25min SR=5min, LR=15min
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let index = 0; index < 4; index++) {
        basic.showString(working_text)
        basic.pause(working_time)
        basic.showString(rest_text)
        basic.pause(short_rest_time)
    }
    basic.pause(long_rest_time - short_rest_time)
    basic.clearScreen()
})
let rest_text = ""
let working_text = ""
let working_time = 0
let long_rest_time = 0
let short_rest_time = 0
led.setBrightness(25)
let time_multiplier = 0.5
short_rest_time = 500 * time_multiplier
long_rest_time = 1500 * time_multiplier
working_time = 2500 * time_multiplier
working_text = "W"
rest_text = "R"
basic.forever(function on_forever() {
    
})
