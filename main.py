# https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-d
# https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-a/blob/master/03-04-pomodoro-timeline.jpg
# JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-03-04-E
# Mint D, plusz a time_multiplier változó bevezetésével tudunk teszt időközök és valós között választani
# time_multiplier = 1, akkor demo W=2,5s SR=0,5s, LR=1,5s
# time_multiplier = 0.5, akkor a demo kétszer gyorsabb lesz (a szüneteket nem szoroztuk, hanem igazából osztottuk, mert a szorzó kisebb volt egynél
# time_multiplier = 60, akkor éles  W=25min SR=5min, LR=15min

def on_button_pressed_a():
    for index in range(4):
        basic.show_string(working_text)
        basic.pause(working_time)
        basic.show_string(rest_text)
        basic.pause(short_rest_time)
    basic.pause(long_rest_time - short_rest_time)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

rest_text = ""
working_text = ""
working_time = 0
long_rest_time = 0
short_rest_time = 0
led.set_brightness(25)
time_multiplier = 0.5
short_rest_time = 500 * time_multiplier
long_rest_time = 1500 * time_multiplier
working_time = 2500 * time_multiplier
working_text = "W"
rest_text = "R"

def on_forever():
    pass
basic.forever(on_forever)
