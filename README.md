# mui-scroll-button

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

[**Live Demo**](https://tonyjsdev.github.io/mui-scroll-spy/)

extended [react-scroll](https://github.com/fisshy/react-scroll) to be used on material-ui Button Element

## installation

`npm install --save mui-scroll-button`

## How to use

use Button for link elements and Element to refer the element you want to scroll to

```jsx
import { Button, Element } from "mui-scroll-spy";

<Button activeStyle={{ border: "1px solid black" }}
        to="first"
        smooth={true}
        offset={-68}
>
    menu 1
</Button>
<Button activeStyle={{ border: "1px solid black" }}
        to="second"
        smooth={true}
        offset={-68}
>
    menu 2
</Button>
<Button activeStyle={{ border: "1px solid black" }}
        to="third"
        offset={-68}
>
    menu 3
</Button>
<Element name="first" style={{ height: "1300px" }}>
    First
</Element>
<Element name="second" style={{ height: "1300px" }}>
    Second
</Element>
<Element name="third" style={{ height: "1300px" }}>
    Third
</Element>
```

## Button Properties:

Besides all the normal Button from MUI properties

- to: String - Target(Element) to scroll to with the same name
- offset: number -additional px to scroll to when click
- duration: number - duration of animation of the scroll
- spy: boolean (optional) - Make Button selected when scroll is at its targets position
- activeStyle: CSSProperties (optional) - Style applied when element is reached (needs spy to be true to work)

[npm-url]: https://www.npmjs.com/package/mui-scroll-button
[npm-image]: https://img.shields.io/npm/v/mui-scroll-button
[github-license]: https://img.shields.io/github/license/tonyjsdev/mui-scroll-spy
[github-license-url]: https://github.com/tonyjsdev/mui-scroll-spy/blob/master/LICENSE
[github-build]: https://github.com/tonyjsdev/mui-scroll-spy/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com//tonyjsdev/mui-scroll-spy/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/mui-scroll-button
