---
title: GSoC with Servo - week 2
date: 2019-06-10
---

The previous week I was mainly concerned with fixing the common [error](https://github.com/servo/servo/issues/23535) in the `wdspec` tests,
since it was blocking the progress in enabling the WebDriver tests.

The error originated in [`test_no_browsing_context`](https://github.com/servo/servo/blob/4c776f33d407c1ef84952967925318476ac9e3f6/tests/wpt/web-platform-tests/webdriver/tests/get_current_url/get.py#L17),
present in almost all `wdspec` tests.
Since this is the first test to be run for the majority of the commands and since the WebDriver server panicked due to the error it triggered, all the next tests were failing since
they were trying to connect to the failed WebDriver server instance.

The `test_no_browsing_context` test attempts to create a new window by means of the `Execute Script` command with a `window.open()` argument.
But creating a new window needs a mutable borrow of [`documents`](https://github.com/servo/servo/blob/8f11b52d9a80a51ddf80212817b87efc20bef8d6/components/script/script_thread.rs#L2964-L2966)
in the current script thread.
This is why the `DomRefCell<T> already borrowed` error occured and it happened because `documents` was already immutably borrowed in
[`handle_webdriver_msg`](https://github.com/servo/servo/blob/4c776f33d407c1ef84952967925318476ac9e3f6/components/script/script_thread.rs#L1837).
Fixing this required [special treatment](https://github.com/servo/servo/pull/23544) in handling the `ExecuteScript` and `ExecuteAsyncScript` WebDriver messages.

Last week, the `new_session` tests were finally [enabled](https://github.com/servo/servo/pull/23443) in Servo, together with a compliant implementation of the `New Session` command.
However, this happened with some delay due to an [issue](https://github.com/web-platform-tests/wpt/issues/17210) in the `wpt` test runner, which I addressed with a quick [fix](https://github.com/web-platform-tests/wpt/pull/17212).

I also worked on adding different missing pieces in the implementation of some WebDriver commands which will be needed when the rest of the `wdspec` tests will to be enabled.

In the third week I'm planning to enable the `wdspec` tests for the commands that our WebDriver implementation supports and also revise their implementation where needed.

This week was not very productive in terms of achieved results, as I mostly did debugging and analysed where things could be going wrong.
But this got me a better understanding of how things are working under the hood and it was a necessary preparation for the next steps.
