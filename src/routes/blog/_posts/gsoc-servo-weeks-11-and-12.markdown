---
title: GSoC with Servo - weeks 11 and 12
date: 2019-08-19
---

Weeks 11 and 12 have been quite productive, with a good amount of new features added to WebDriver.

One new command that got [implemented](https://github.com/servo/servo/pull/23943) last week is [`TakeElementScreenshot`](https://w3c.github.io/webdriver/#take-element-screenshot).
Although it's very similar to [`TakeScreenshot`](https://w3c.github.io/webdriver/#take-screenshot) in terms of implementation, it needed some additional small tweaks in order to work properly.

The core functionality of both of these commands is offered by [`draw_img`](https://github.com/servo/servo/blob/fb5a12159a2f7e84ac2470952078a4dafa3ce28e/components/compositing/gl.rs#L82) which,
as the name implies, encodes part (a rectangle) of the frame buffer into an image.
Before, [`draw_img`](https://github.com/servo/servo/blob/fb5a12159a2f7e84ac2470952078a4dafa3ce28e/components/compositing/gl.rs#L82) expected that rectangle to always start at point `(0, 0)`.
But for [`TakeElementScreenshot`](https://w3c.github.io/webdriver/#take-element-screenshot) the screenshotted rectangle could start anywhere in the viewport, not necessarily at that point.
This was easily addressed, but it was not all I needed.
One more thing that was needed was the conversion between an element's rectangle top left corner coordinates to its down left corner coordinates used by OpenGL.
Basically, the `y` coordinate required conversion using a simple formula:

`down_left_y = viewport_height - top_left_y - rect_height`

Another new thing that I did last week was [change](https://github.com/servo/servo/pull/23951) the communication between the WebDriver server and the browser to have it possible
to propagate error codes between the two.
This was an easy change, but it involved a lot of additional small changes.
At this step I also added proper distinction between [stale](https://w3c.github.io/webdriver/#dfn-is-stale) and inexistent elements.
This involved keeping track of all the nodes ever created in the current
[`ScriptThread`](https://github.com/servo/servo/blob/fb5a12159a2f7e84ac2470952078a4dafa3ce28e/components/script/script_thread.rs#L521) and then use this information in
[`find_node_by_unique_id`](https://github.com/servo/servo/blob/fb5a12159a2f7e84ac2470952078a4dafa3ce28e/components/script/webdriver_handlers.rs#L57).

The work on [testdriver.js](https://web-platform-tests.org/writing-tests/testdriver.html) got blocked by a [strange panick](https://github.com/servo/webrender/issues/3739).
At a first glance, this has an easy fix but, since I'm not very familiar with [`webrender`](https://github.com/servo/webrender), I'm not sure if it's the right fix or not.
Fortunately, I've managed to patch my own version of [`webrender`](https://github.com/servo/webrender) so I can continue working on 
[testdriver.js](https://web-platform-tests.org/writing-tests/testdriver.html) without getting into this failure again.

There is only one more week left of GSoC, twelve weeks have passed so quickly! In the last week I'm planning to wrap up the awaiting pull requests
([`pointerMove`](https://github.com/servo/servo/pull/23996) WebDriver action and [final additions](https://github.com/servo/servo/pull/23947) to the `JSON` clone algorithm)
and continue working on the [testdriver.js](https://github.com/servo/servo/pull/23947).
