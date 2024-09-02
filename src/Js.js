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
                      Object.keys(): - Returns an array of all the object's own property names.
                  </li>
                  <li>
                      Object.values(): - Returns an array of all the object's own property values.
                  </li>
                </ol>
              </h4>
            </li>
          </h2>
        </ol>
      </div>
    </div>
  );
};

export default Js;
