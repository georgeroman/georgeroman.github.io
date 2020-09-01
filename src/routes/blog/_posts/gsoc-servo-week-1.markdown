---
title: GSoC with Servo - week 1
date: 2019-06-04
---

For Google Summer of Code 2019, I'm working on improving WebDriver support in Servo.
The details of the project can be found [here](https://summerofcode.withgoogle.com/dashboard/project/5248302524661760/details/).

In the first week of the coding period I managed to fix both of the issues related to creating new WebDriver sessions during testing.

The current WebDriver implementation doesn't support multiple concurrent sessions.
Trying to create a new session while another one is still active results in a `Session is already started` error.
This is exactly the [error](https://github.com/servo/servo/issues/22619) we were intermittently getting when running the automated WebBluetooth tests and the error we were always getting
when running the `wdspec` [`new_session`](https://github.com/servo/servo/tree/master/tests/wpt/web-platform-tests/webdriver/tests/new_session) tests.
Note that both of these tests are parallelized.

While investigating what might possibly cause the error in the WebBluetooth tests, I noticed that whenever it occured,
the [wptrunner](https://github.com/servo/servo/tree/master/tests/wpt/web-platform-tests/tools/wptrunner/wptrunner) test runner strangely assigned the same port to different instances of WebDriver.
Having several processes trying to create a new session on the same port was the cause of the error.
It seemed that there was a data race when assigning ports for the WebDriver instances.
I solved this by [protecting](https://github.com/web-platform-tests/wpt/pull/16819) the retrieval of a free port with a lock.

But it seemed that this was not enough.
The `new_session` tests were still failing due to the same error.
As I fully described [here](https://github.com/servo/servo/issues/22619#issuecomment-496270969), this was happening because for the `wdspec` tests,
the port retrieval was not done in different threads, as for the WebBluetooth tests, but in different processes.
Each process had a different copy of the state needed to safely retrieve a free port and the changes made by one process to it were not reflected in the other processes.
This time, the [solution](https://github.com/web-platform-tests/wpt/pull/17047) was to switch to random OS port retrieval by always binding to port `0`.
Although this is still prone to data races, it was the easiest solution, as sharing state between different processes is not trivial to do. 

Once I got these issues fixed, I focused on implementing the [w3c specification](https://w3c.github.io/webdriver/#new-session-0) for the `New Session` command.
As a result of this, the majority of the associated `wdspec` tests are now passing.

I also started to check the status of the whole `wdspec` test suite.
Unsurprisingly, there are lots of errors and failures.
However, I found a common error in the majority of the tests and that's what I'm going to focus on next.

It was a great first week! I learned a lot about concurrency and realized how hard it is to write programs that are both safe and concurrent.
