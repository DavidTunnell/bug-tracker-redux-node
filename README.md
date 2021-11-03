# Bug Tracker - Redux, Node.js

A bug tracker... xyz. This project is based on [Mosh's Redux Tutorial](https://www.youtube.com/watch?v=poQXNp9ItL4) on YouTube.

Redux is a state management library for JavaScript applications. It can be used with vanilla JavaScript and many frameworks, including React. It is typically useful for applications with complex UI and the need to keep data between the many components in sync.

All application state is stored in a central repository, a JavaScript object called the Store. The store is a single source of truth.

Redux's architecture makes it easy to diagnose where and how data changes in the application changes. It makes data flow transparent and predictable.

There is a tool called Log Rocket that allows for always on dev tools in production so you can load the state of a bug a user sees.

Redux introduces complexity to a project. It is relatively verbose and can add a lot of code to the project. It is based on functional programming and thus an understanding of it is needed.

Functional Programming

-   The idea behind functional programming is to write a lot of small and reusable functions and compose/ combine them to solve larger problems. Doing this correctly is functional composition. Here is a simple example:
    ```
        const trim = str => str.trim();
        const wrapInDiv = str => "<div>" + str + "</div>";
        const toLowerCase = str => str.toLowerCase();
        const result = wrapInDiv(toLowerCase(trim(input)));
    ```
    -   It is however hard to read. The composing and piping can be improved with a package called lodash (`npm i lodash`).
        ```
            import { compose, pipe } from "lodash/fp";
            let input = "   JavaScript   ";
            const trim = (str) => str.trim();
            const wrapInDiv = (str) => "<div>" + str + "</div>";
            const toLowerCase = (str) => str.toLowerCase();
            //pipe gives order of operations basted on entry order
            const transform = pipe(trim, toLowerCase, trim);
            //now nesting function calls isn't necessary
            const result = transform(input);
        ```
-   Higher order functions are functions that take a function as an argument or returns one, or both. This is because it goes above working on a string or object etc, it works on functions.
-   Currying
