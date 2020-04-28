---
title: GSoC with Servo - weeks 5 and 6
date: 2019-07-09
---

Last two weeks were really busy for me as I had my final exams and also moved to a new place for the summer.
But, fortunately, I've managed to get to an end with the `JSON` clone algorithm implementation and can return to working on improving and writing WebDriver commands.

Besides the previously existing support for returning primitive JavaScript types from `ExecuteScript` and `ExecuteAsyncScript`, I added support for returning 
[collections](https://w3c.github.io/webdriver/#dfn-collection), [web elements](https://dom.spec.whatwg.org/#concept-element), 
[window proxies](https://html.spec.whatwg.org/#windowproxy) and objects having a `toJSON` function property, as per the WebDriver [specification](https://w3c.github.io/webdriver/#dfn-json-clone).
Currently, only [`collections support`](https://github.com/servo/servo/pull/23725) is pushed on the Servo's GitHub repository in order to keep the changes easy for review,
but I will progressively push the rest of the changes once the pending pull request is merged into the `master` branch.

Support for returning objects is still missing. I really wanted to have a full implementation of the `JSON` clone algorithm, but I decided that it's better to focus on
other things since supporting returning objects requires some additional work that would take a good amount of time.
Anyway, I'll keep this in mind and save the work I've done on it for some time in the near future. 

As part of last weeks' work, I also improved the implementation of 
[`is_array_like`](https://github.com/servo/servo/blob/d0bd2d5e44d4006b00ef53f351945d01e1c8458d/components/script/dom/bindings/conversions.rs#L556) by providing support 
for the collection types needed by the `JSON` clone algorithm. The improvements can be found [here](https://github.com/servo/servo/pull/23669),

I can say that these last two weeks were the most challenging so far, but also the most rewarding. I've really enjoyed working on low-level [`mozjs`](https://doc.servo.org/mozjs/) stuff.
It was an awesome learning experience and it definitely deepened my understanding of the interactions that occur within the browser's backend. 

This week I'm planning to investigate the failing tests issue in [this](https://github.com/servo/servo/pull/23585) pull request, return to working on missing WebDriver commands 
([`GetElementProperty`](https://w3c.github.io/webdriver/#get-element-property) for example), add support for more [locator strategies](https://w3c.github.io/webdriver/#locator-strategies) 
for finding elements and, hopefully, get the changes from the last two weeks merged into the main branch.
