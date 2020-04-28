---
title: GSoC with Servo - weeks 9 and 10
date: 2019-08-05
---

Last two weeks' focus was on finishing implementing the WebDriver [actions](https://w3c.github.io/webdriver/#actions) commands.
These were the most challenging ones so far as there was no existing infrastructure in place as opposed to most of the other WebDriver commands.
For the [keyboard actions](https://w3c.github.io/webdriver/#keyboard-actions) most of the implementation was already provided by the
[`keyboard_types`](https://docs.rs/keyboard-types/0.4.4/keyboard_types/webdriver/index.html) crate, which made my part of the implementation straightforward.
Unfortunately, this was not the case with [pointer actions](https://w3c.github.io/webdriver/#pointer-actions), which I had to fully implement from scratch.

These weeks I got to contribute with some code changes to the [`webdriver-rust`](https://crates.io/crates/webdriver) crate.
This is the library that is used by both Servo and Firefox for creating and running the WebDriver server and processing the commands' arguments.

One thing that I've done is [implement](https://hg.mozilla.org/mozilla-central/rev/827775bba76d) the `Deserialize` trait for `ErrorStatus`.
In Servo, the communication between the browser and the WebDriver server is done by means of [`ipc-channel`](https://github.com/servo/ipc-channel).
This uses [`serde`](https://crates.io/crates/serde) for serializing and deserializing the data that is passed over the channel.
At the moment, we have no good way of propagating the errors that occur in the browser side back to the WebDriver server, so we just return an error
with an empty body.
This is problematic as we have a lot of WebDriver related functionality implemented in the browser side and a lot of different errors could occur there.
Having the `Deserialize` trait implemented for `ErrorStatus` fixes this issue and makes for a more [spec](https://w3c.github.io/webdriver) compliant implementation.

Another thing that I've worked on is make the [input source](https://w3c.github.io/webdriver/#input-sources-0)'s `id` field mandatory, as per the [spec](https://w3c.github.io/webdriver).
Initially, this field had a type of `Option<String>` and, when [processing](https://w3c.github.io/webdriver/#processing-actions) an action sequence,
it was allowed to be either `undefined` or even inexistent. 
This was not [spec](https://w3c.github.io/webdriver) compliant, as it is clearly [specified](https://w3c.github.io/webdriver/#dfn-process-an-input-source-action-sequence)
that the `id` property must be valid a `String`.
[Fixing](https://hg.mozilla.org/mozilla-central/rev/fff7b5299ecf) this was quite easy. As part of it I also added a [`wpt`](https://github.com/web-platform-tests/wpt) test.

These weeks I also started to work on the [`TakeElementScreenshot`](https://w3c.github.io/webdriver/#take-element-screenshot) command.
Currently, I'm blocked on [`drawing a bounding box from the frame buffer`](https://w3c.github.io/webdriver/#dfn-draw-a-bounding-box-from-the-framebuffer),
more specifically on the sixth step that consists of drawing the element's rectangle onto a [2D canvas context](https://www.w3.org/TR/2dcontext/), but with a little help I'll hopefully get it done.
As part of this I identified another [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1571305) in [`webdriver-rust`](https://www.w3.org/TR/2dcontext/):
it misses the optional `scroll` parameter that specifies whether the element that is screenshotted will be scrolled into view or not.

Following my [proposal](https://docs.google.com/document/d/1iovWUZgo76r66tQBNZzkvWp7tcbE4Dei_3F8fnTBIXw/edit) I will now focus on implementing
a [`testdriver.js`](https://web-platform-tests.org/writing-tests/testdriver.html) backend.
Besides this, I'm planning to get the previous work on [actions](https://w3c.github.io/webdriver/#actions) reviewed and merged into the main branch.

Sometimes, things don't work out as expected, as is the case with the [PR](https://github.com/servo/servo/pull/23725) for returning arrays from `ExecuteScript`.
It's still pending as there is a small issue with a particular test that seems to fail suspiciously on [`TaskCluster`](https://tools.taskcluster.net/groups/Sfd1306ARDirevbwP8Zn7g).
Hopefully, that should get fixed soon.

I managed to implement a good amount of new functionality in the last two weeks.
Specifically, I really enjoyed my side contributions to [`webdriver-rust`](https://crates.io/crates/webdriver) because I got to work with a different workflow than what I was used to.

I'm looking forward to the next two weeks as I'm expecting to wrap up the work that was done in the previous weeks, getting ready for the end of GSoC!
