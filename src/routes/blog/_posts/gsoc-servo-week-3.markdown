---
title: GSoC with Servo - week 3
date: 2019-06-17
---

Last week the first big project milestone was achieved! The `wdspec` tests are now [enabled](https://github.com/servo/servo/pull/23570) in Servo!

My first approach at this was to enable the tests one by one, together with small fixes in the associated commands' implementation.
At first, this went pretty well. I started by enabling `get_title`, `get_current_url` and all cookie related tests.
However, enabling `find_element` and related tests raised some issues.

The test suites of commands related to finding elements contain lots of tests, a lot more than most of the other commands.
Since they couldn't complete in the `30` seconds default timeout threshold in `wptrunner`, the tests were ended prematurely and were wrongly reported as timed out.
One solution I considered was passing a `--timeout-multiplier=4` argument to the test runner job in the CI server.
With it, the timeout threshold would get a fourfold increase, from `30` seconds to two minutes.
This, however, would have unnecessarily increased the testing time since the `wdspec` tests are ran together with the majority of the `wpt` tests and 
the increased timeout would have also been reflected in all these other tests.

As suggested [here](https://github.com/servo/servo/pull/23550#issuecomment-501745411), the best way to overcome this issue was by running a different job only for `wdspec` tests.
This way, the increased timeout would only be reflected in the `wdspec` tests and the other tests would be run in the same way as before.
Now, all `wdspec` tests needed to be enabled at once because the changes in [`include.ini`](https://github.com/servo/servo/blob/master/tests/wpt/include.ini),
the file where different test suites can be enabled or disabled, are only reflected when running the whole `wpt` test suite, not just a part of it as was the case with the `wdspec` tests.

Once the tests were enabled I started working on implementing some missing commands ([`SwitchToWindow`](https://w3c.github.io/webdriver/#switch-to-window) and 
[`DismissAlert`](https://w3c.github.io/webdriver/#dismiss-alert)) that were polluting the test runner output with `Command not implemented` errors.

During the weekend I worked on the [`GetPageSource`](https://w3c.github.io/webdriver/#get-page-source) command and today I finished implementing the `tag name` selector strategy
for `FindElement` and related commands.

It was great week, very productive in terms of results! Now that the `wdspec` tests are enabled, the infrastructure for testing the current WebDriver implementation 
and for implementing the missing commands is all set up.

This week I'm going to continue working on implementing new WebDriver commands and on providing fixes where necessary in the existing implementation.
