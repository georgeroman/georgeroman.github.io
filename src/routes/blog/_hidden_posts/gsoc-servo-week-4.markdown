---
title: GSoC with Servo - week 4
date: 2019-06-25
---

Last week, the fourth week of GSoC, I worked on implementing some missing pieces of functionality and some new WebDriver commands.
I also inspected some tests in the `wdspec` testing suite together with their status in order to identify possible common failures.

These are the new commands that are now supported by Servo's WebDriver implementation: [`Status`](https://github.com/servo/servo/pull/23588), 
[`GetPageSource`](https://github.com/servo/servo/pull/23581), 
[`SwitchToWindow`](https://github.com/servo/servo/pull/23580) (for now, only a single window is supported),
[`DismissAlert`](https://github.com/servo/servo/pull/23580) (currently, user alerts are not supported, so this is only a dummy implementation).

Some new tests got enabled: [`get_title`](https://github.com/web-platform-tests/wpt/tree/master/webdriver/tests/get_title) and 
[`get_current_url`](https://github.com/web-platform-tests/wpt/tree/master/webdriver/tests/get_current_url).
These were previously disabled due to the fact that they triggered panics in the WebDriver server.
It seems that this happened when the tests attempted to open a directory instead of a file.
The [solution](https://github.com/servo/servo/pull/23593) to this was pretty simple.

Last week I also [added](https://github.com/servo/servo/pull/23598) a filter for the intermittent failures in the `wdspec` testing suite so that 
these get reported in the same way as the failures in the other `wpt` tests. 

In addition to the previous work, I started to implement the `link text` and `partial link text` selector strategies for commands related to finding elements.
While in the middle of it I realized that there is a missing piece of functionality that makes a lot of tests fail: 
the [`JSON` clone](https://www.w3.org/TR/webdriver1/#dfn-internal-json-clone-algorithm) algorithm.

The `JSON` clone algorithm is mainly used by the `ExecuteScript` and `ExecuteAsyncScript` commands for returning JavaScript data to the WebDriver client.
The current WebDriver implementation in Servo only supports primitive values as return values from JavaScript.
But almost all of the tests that rely on `ExecuteScript` or `ExecuteAsyncScript` are expecting objects as return values.
So, having it fully implemented would fix some existing tests and would reveal possible flaws that are directly related to the tested command.

In the quest for it, I started with a JavaScript implementation but this got me nowhere since serializing `DOM` objects requires access to certain fields that are not accessible from JavaScript.
So, I decided to go with a pure Rust implementation.
This means that I need to deal with the [`JSObject`](https://doc.servo.org/mozjs/jsapi/struct.JSObject.html) that represents an object from JavaScript.

Although I've just started to work on this, I find it extremely interesting and rewarding.
Diving deeper into the workings of Servo is a great way to gain a deeper understanding of how all the different components of the browser engine are gracefully working together.

This week I'm planning to work on implementing the `JSON` clone algorithm and, once this gets done, to review the status of the tests that depend on it.
