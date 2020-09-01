---
title: GSoC with Servo - weeks 7 and 8
date: 2019-07-23
---

Two more weeks have passed and things are slowly and surely improving.

In the beginning of the seventh week I investigated why the [`tag name` selector PR](https://github.com/servo/servo/pull/23585) was failing the tests, given that these
were passed when run locally.
The issue seemed to be a missing `HOST_FILE` environment variable, which provides mappings from the hostnames used by the HTTP testing server to appropriate IP addresses.
This was an easy fix, as the needed file already [existed](https://github.com/servo/servo/blob/master/tests/wpt/hosts) in the codebase.
However, since this issue affected all the tests that were dependent on the HTTP testing server, the fix for it caused a lot of unexpected tests results.
Most of them were unexpected passes, but a few were unexpected 
[errors occurring at the setup stage](https://build.servo.org/builders/linux-rel-wpt/builds/12913/steps/shell__5/logs/filtered-wdspec-errorsummary.log), that is before the actual tests are actually run. 

Basically, when reaching [this](https://github.com/servo/servo/blob/4470035f7540602a011b87ec25f4cbb39194c7d5/tests/wpt/web-platform-tests/webdriver/tests/support/fixtures.py#L156) line, 
the session, which is explicitly checked to exist a few lines before, is inexistent.
I spent some good time trying to figure out why this strange anomaly occurred.

The issue was caused by the [`delete_session`](https://github.com/servo/servo/blob/master/tests/wpt/web-platform-tests/webdriver/tests/delete_session/delete.py) tests, which somehow 
[end](https://github.com/servo/servo/blob/4470035f7540602a011b87ec25f4cbb39194c7d5/tests/wpt/web-platform-tests/webdriver/tests/delete_session/delete.py#L19) the current session without
notifying the test harness of it. Thus, we are left with the id of a previous session, which the test harness interprets as a valid session, although in reality
there is no existing session. Trying to execute commands on a session-less WebDriver instance triggers the `Session not created` errors, as in the described issue.

As a quick fix for this I simply disabled the tests for `DeleteSession`. This issue already took a lot of time to fix so I'll come back to figuring out exactly how it happens and fixing
it later when more time is available.

These weeks, I also [started](https://github.com/servo/servo/pull/23805) to work on implementing support for [actions](https://w3c.github.io/webdriver/#actions) and the associated
[`PerformActions`](https://w3c.github.io/webdriver/#perform-actions) and [`ReleaseActions`](https://w3c.github.io/webdriver/#release-actions) commands.
I already have a working version which supports the `pause`, `keyUp` and `keyDown` actions, but it needs to be polished a bit before it's ready for production.

One unfortunate thing with the `PerformActions` and `ReleaseActions` commands is that their associated `wpt` tests all have dependencies on other WebDriver commands, some of them not
being yet implemented in Servo. So, most of the tests fail due to this, and the only way to check the implementation is by manually testing it. 
One available option, though, is to write tests that are independent of other commands.

Besides these, I also finished implementing [`GetElementProperty`](https://w3c.github.io/webdriver/#get-element-property) and [`link text`](https://w3c.github.io/webdriver/#link-text)
and [`partial link text`](https://w3c.github.io/webdriver/#partial-link-text) selectors for `FindElement` and related commands. The PRs for these can be found
[here](https://github.com/servo/servo/pull/23820) and [here](https://github.com/servo/servo/pull/23745).

These two weeks have been very productive. A lot of existing PRs are being finalized and the whole implementation is getting better, more stable and more compliant.

Next, I will be mainly focusing on adding further support for the [actions](https://w3c.github.io/webdriver/#actions) and [interaction](https://w3c.github.io/webdriver/#interaction) commands,
as well as getting to an end with the support for returning arrays and arbitrary objects from WebDriver.
