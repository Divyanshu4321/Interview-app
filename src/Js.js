import React from "react";

const Js = () => {
  return (
    <div className="bg-dark text-light">
      <h1 className="text-center py-5">
        <b>JavaScript </b>
      </h1>

      <div className="container ">
        <ol>
          <h2>
            <li className="my-5">
              what is the variables ?
              <br />
              <h4 className="mt-3">
                a variable is a named storage location that can hold a value.
                Variables are used to store data values that can be accessed and
                manipulated throughout a program.
              </h4>
            </li>
            <li className="my-5">
              what is the datatypes ?
              <br />
              <h4 className="mt-3">
                In JavaScript, data types are the different kinds of values that
                variables can hold. Here are the two main data types: in present
                in js
                <ol>
                  <li>
                    Primitive data-type {" > "}
                    <ol>
                      <li>Number</li>
                      <li>string</li>
                      <li>boolean</li>
                      <li>null</li>
                      <li>undefined</li>
                    </ol>
                  </li>
                  <li>
                    Non Primitive data-type
                    <ol>
                      <li>array</li>
                      <li>object</li>
                    </ol>
                  </li>
                </ol>
              </h4>
            </li>
            <li className="my-5">
              what is the DOM ?
              <br />
              <h4 className="mt-3">
                The DOM (Document Object Model) is a programming interface that
                represents an HTML or XML document as a hierarchical tree
                structure, allowing programs to dynamically access and
                manipulate the document's content, structure, and style.
              </h4>
            </li>
            <li className="my-5">
              what is callback function
              <br />
              <h4 className="mt-3">
                A callback is a function that is passed as an argument to
                another function and is executed after the completion of that
                main function. This allows you to run a function after another
                function has finished its execution.
              </h4>
            </li>
            <li className="my-5">
              what is the hoisting in js ?
              <br />
              <h4 className="mt-3">
                Hoisting in JavaScript is a behavior where variable and function
                declarations are moved to the top of their containing scope
                during the compilation phase. This means you can use variables
                and functions before you declare them in your code.
              </h4>
            </li>
            <li className="my-5">
              what is the Array ? Give me some example of Array methods ?
              <br />
              <h4 className="mt-3">
                An array is a sequential colletion of a data type use to store
                multiple data in a single variable there are containe many
                method like
                <ol>
                  <li>concat(): these method are use to merge two arrays</li>
                  <li>
                    push(): these method are use to add one or more element in
                    array
                  </li>
                  <li>
                    pop(): pop method are use to remove last element of array
                  </li>
                  <li>
                    shift(): shift method are use to remove first element from
                    array
                  </li>
                </ol>
              </h4>
            </li>

            <li className="my-5">
              what is the object and tell some importance method of object ?
              <br />
              <h4 className="mt-3">
                an object is a complex data type that allows you to store and
                organize data in a structured way. An object can be thought of
                as a collection of key-value pairs, where each key is a unique
                identifier and each value can be any valid JavaScript data type,
                including other objects <br />
                Here are some important methods of objects in JavaScript:
                <ol>
                  <li>
                    Object.keys(): - Returns an array of all the object's own
                    property names.
                  </li>
                  <li>
                    Object.values(): - Returns an array of all the object's own
                    property values.
                  </li>
                </ol>
              </h4>
            </li>

            <li className="my-5">
              what is json
              <br />
              <h4 className="mt-3">
                JSON (JavaScript Object Notation) is a lightweight
                data-interchange format that is easy for humans to read and
                write and easy for machines to parse and generate. In
                JavaScript, JSON is commonly used to transmit data between a
                server and a web application or between different parts of an
                application. Key Points about JSON in JavaScript: Format: JSON
                format is text-based and consists of key-value pairs. Keys are
                strings. Values can be strings, numbers, objects, arrays,
                booleans, or null.
              </h4>
            </li>
            <li className="my-5">
              difference between fetch and Axios method for API calls ?
              <br />
              <h4 className="mt-3">
                Built-in: The fetch API is built into modern browsers, so no
                additional installation is required.
                <br />
                Syntax: It uses a more verbose syntax, especially for handling
                JSON data.
                <br />
                Error Handling: Only rejects the promise on network errors, not
                on HTTP errors (like 404 or 500).
                <br />
                No Interceptors: Does not support request and response
                interceptors.
                <br />
                No Automatic JSON Transformation: You need to manually transform
                the response to JSON using response.json().
                <br />
                <br />
                <strong>Axios</strong>
                Library: Axios is a third-party library that needs to be
                installed via npm or yarn.
                <br />
                Syntax: Provides a cleaner and more concise syntax.
                <br />
                Error Handling: Automatically handles HTTP errors and provides
                more informative error messages.
                <br />
                Interceptors: Supports request and response interceptors,
                allowing you to modify requests or responses before they are
                handled.
                <br />
                Automatic JSON Transformation: Automatically transforms JSON
                data, so you don’t need to call response.json().
                <br />
                <br />
                Fetch is great for simple requests and is built into the
                browser, making it easy to use without additional dependencies.
                <br />
                Axios offers more features, such as interceptors, automatic JSON
                transformation, and better error handling, which can be very
                useful for more complex applications12.
              </h4>
            </li>

            <li className="my-5">
              what is the single threaded langauges ?
              <h4 className="mt-3">
                A single-threaded language is one that executes one task at a
                time using a single call stack. Here are some examples:
                <br />
                <br />
                JavaScript <br />
                <br />
                Nature: JavaScript is inherently single-threaded, meaning it has
                only one call stack to execute code.
              </h4>
            </li>
            <li className="my-5">
              what is the local , session in js ?
              <h4 className="mt-3">
                Scope: localStorage is scoped to the entire origin (domain and
                protocol). This means the data stored is accessible from any
                page within the same domain.
                <br />
                <br />
                Persistence: Data in localStorage persists even after the
                browser is closed and reopened. It does not expire unless
                explicitly deleted. Storage Limit: Typically around 5-10 MB per
                domain, but this can vary depending on the browser.
                <br />
                <br />
                API: <br />
                localStorage.setItem('key', 'value'): Stores a key-value pair.
                <br />
                localStorage.getItem('key'): Retrieves the value for a given
                key. <br />
                localStorage.removeItem('key'): Removes the key-value pair.
                <br />
                localStorage.clear(): Clears all key-value pairs. <br />
                <br />
                sessionStorage <br />
                <br />
                Scope: sessionStorage is scoped to the window or tab. Data is
                accessible only within the same tab or window. <br />
                <br />
                Persistence: Data in sessionStorage persists only for the
                duration of the page session. It is cleared when the tab or
                window is closed. <br />
                Storage Limit: Typically around 5-10 MB per domain, similar to
                localStorage. <br />
                <br />
                API: <br />
                sessionStorage.setItem('key', 'value'): Stores a key-value pair.
                <br />
                sessionStorage.getItem('key'): Retrieves the value for a given
                key. <br />
                sessionStorage.removeItem('key'): Removes the key-value pair.
                <br />
                sessionStorage.clear(): Clears all key-value pairs. <br />
              </h4>
            </li>

            <li className="my-5">
              what are the arrow functions ?
              <h4 className="mt-3">
                Arrow functions in JavaScript are a simpler way to write
                functions. They were introduced in ES6 (ECMAScript 2015) and
                have a more concise syntax compared to traditional functions.
                <br />
                Key features <br />
                <br />
                1. **Shorter Syntax**: <br />- Arrow functions use {`=>`} (fat
                arrow) and often require fewer characters. <br />
                - No need to use the `function` keyword. <br />
                - For a single-line function, you can omit the `return` keyword
                and curly braces. <br />
                <br />
                <br />
                javascript <br />
                const square = x {"=>"} x * x; // One parameter, no need for
                parentheses <br />
                const greet = () {"=>"} 'Hello'; // No parameters, need
                parentheses <br />
                <br />
                <br />
                2. **Implicit Return**: <br />
                - If the function body is a single expression, the value is
                returned automatically. <br />
                javascript <br />
                const multiply = (a, b) {"=>"} a * b; // Implicit return <br />
              </h4>
              <li className="my-5">
                difference between == and === operator ?
                <h4 className="mt-3">
                  The main difference between the two operators is how they
                  compare values. The == operator compares the values of two
                  variables after performing type conversion if necessary. On
                  the other hand, the === operator compares the values of two
                  variables without performing type conversion.
                </h4>
              </li>
              <li className="my-5">
                what is the mean by self invoking function ?
                <br />
                <h4 className="mt-3">
                  A self-invoking function, also known as an immediately invoked
                  function expression (IIFE), is a JavaScript function that runs
                  as soon as it is defined. The primary reason to use a
                  self-invoking function is to obtain data privacy because any
                  variables declared within the IIFE cannot be accessed by the
                  outside world.
                </h4>
              </li>
            </li>
            <li className="my-5">
              what is the client-side JavaScript
              <br />
              <h4 className="mt-3">
                Client-side JavaScript refers to JavaScript code that runs in
                the user’s web browser, rather than on a server. This allows web
                pages to be interactive and dynamic, providing a better user
                experience.
              </h4>
            </li>
            <li className="my-5">
              what is the server side js ?
              <br />
              <h4 className="mt-3">
                Server-side JavaScript refers to JavaScript code that runs on a
                server, rather than in the user’s web browser. This allows
                JavaScript to handle backend tasks such as database operations,
                file handling, and server logic. One of the most popular
                environments for server-side JavaScript is Node.js.
              </h4>
            </li>
            <li>
              what is the differnce between null and undefined ?
              <br />
              <h4 className="mt-3">
                Sent by Copilot: In JavaScript, null and undefined are both used
                to represent the absence of a value, but they have different
                meanings and uses:
                <br />
                Indicates that a variable has been declared but not yet assigned a value.
                <br /><br />
                Represents the intentional absence of any object value.
              </h4>
            </li>
          </h2>
        </ol>
      </div>
    </div>
  );
};

export default Js;
