---
title: GSoC with Servo - final report
date: 2019-08-23
---

GSoC is unfortunately over.
Three months working on improving the WebDriver implementation in Servo have passed very quickly.
During this period, a lot of new features and improvements got their way into Servo's WebDriver.
Here are some of the most important ones:

 - the `wpt` [`webdriver` tests](https://github.com/web-platform-tests/wpt/tree/master/webdriver) got enabled

 - the [`NewSession`](https://w3c.github.io/webdriver/#new-session-0) command got a spec compliant implementation

 - new commands got implemented: [`GetPageSource`](https://w3c.github.io/webdriver/#get-page-source), [`Status`](https://w3c.github.io/webdriver/#status),
[`GetElementProperty`](https://w3c.github.io/webdriver/#get-element-property), [`TakeElementScreenshot`](https://w3c.github.io/webdriver/#take-element-screenshot),
[`PerformActions`](https://w3c.github.io/webdriver/#perform-actions), [`ReleaseActions`](https://w3c.github.io/webdriver/#release-actions)

 - [`ExecuteScript`](https://w3c.github.io/webdriver/#execute-script) and [`ExecuteAsyncScript`](https://w3c.github.io/webdriver/#execute-async-script) can now return
[collections](https://w3c.github.io/webdriver/#dfn-collection) and objects (only some predefined properties can get returned for the moment)

 - [`FindElement`](https://w3c.github.io/webdriver/#find-element) and all the related commands got support for `tag name`, `link text` and `partial link text` selectors

 - full [actions](https://w3c.github.io/webdriver/#actions) support got implemented: `pause`, `keyDown`, `keyUp`, `pointerDown`, `pointerUp` and `pointerMove`

 - [`webdriver_handlers`](https://github.com/servo/servo/blob/master/components/script/webdriver_handlers.rs) got refactored to have it possible to return errors back to the WebDriver server

All the code related to my project is available at different sources:
[Servo PRs](https://github.com/servo/servo/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Ageorgeroman+merged%3A%3E%3D2019-05-23),
[wpt PRs](https://github.com/web-platform-tests/wpt/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Ageorgeroman+merged%3A%3E%3D2019-05-15) and
webdriver patches ([D39110](https://phabricator.services.mozilla.com/D39110), [D39632](https://phabricator.services.mozilla.com/D39632), [D39784](https://phabricator.services.mozilla.com/D39784)).
Also, detailed description of all the work I've done is available [here](https://georgeroman.github.io) in the form of weekly or biweekly blog posts.

As final words, contributing to Servo as part of GSoC was an amazing experience and I learned a lot from it.
I want to specially thank my mentor, Josh Matthews, for his support throughout the project.
He was always available for any questions and his guidance and suggestions were extremely useful.
I also want to thank the members of the Servo community for any help they gave me during the project.

Although GSoC is now ended, I'm planning to keep contributing to Servo.
There are still a lot more new things to learn and work on!
