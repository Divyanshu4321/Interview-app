import React from "react";

const ReactJS = () => {
  return (
    <div className="container-fluid  bg-dark text-light">
      <h1 className="text-center py-5">
        <b>React.Js </b>
      </h1>
      <div className="container ">
        <ol>
          <h2>
            <li>
              What is react ?
              <br />
              <h4 className="mt-3">
                React is an open-source javascript-library used to create
                interactive user interfaces and it used to create a single page
                web applications .facebook are created react library in 2011 and
                is developer name are
                <span style={{ color: "darkred" }}>. Jordan walke .</span>
              </h4>
            </li>
            <li className="my-5">
              What is Jsx ?
              <br />
              <h4 className="mt-3">
                JSX (JavaScript XML) is a syntax extension that allows you to
                write HTML-like code within JavaScript. Functional components
                return JSX to render the UI.
              </h4>
            </li>
            <li className="my-5">
              What is the Routing ?
              <br />
              <h4 className="mt-3">
                React Router is a standard library for routing in React. It
                enables the navigation among views of various components in a
                React Application, allows changing the browser URL, and keeps
                the UI in sync with the URL.
                <br />
                <br />
                Features of React Router
                <br />
                <ol>
                  <li>
                    {" "}
                    Declarative Routing: React Router v6 uses the Routes and
                    Route components to define routes declaratively, making the
                    routing configuration simple and easy to read.
                  </li>
                  <br />
                  <li>
                    {" "}
                    Nested Routes: It supports nested routes, allowing for
                    complex and hierarchical routing structures, which helps in
                    organizing the application better.
                  </li>
                  <br />
                  <li>
                    {" "}
                    Programmatic Navigation: The useNavigate hook enables
                    programmatic navigation, allowing developers to navigate
                    between routes based on certain conditions or user actions.
                  </li>
                  <br />
                  <li>
                    {" "}
                    Route Parameters: It provides dynamic routing with route
                    parameters
                    {/* , enabling the creation of routes that can match multiple URL patterns.*/}
                  </li>
                  <br />
                </ol>
              </h4>
            </li>
            <li className="my-5">
              what is the state ?
              <br />
              <h4 className="mt-3">
                In React, state refers to an object that holds some information
                that may change over the lifetime of a component. Think of it as
                the component’s memory. Here are the key points:
                <ol>
                  <br />
                  <li>
                    Dynamic Data: State is used to manage data that can change
                    over time, like user input or API responses.
                  </li>
                  <br />
                  <li>
                    Local to Component: Each component can have its own state,
                    which is independent of other components.
                  </li>
                  <br />
                  <li>
                    Initialization: In class components, state is usually
                    initialized in the constructor. In functional components,
                    it’s done using the useState hook.
                  </li>
                  <br />
                </ol>
                <br />
              </h4>
            </li>
            <li className="my-5">
              what is the props ?
              <br />
              <h4 className="mt-3">
                Props in React are like instructions or data that parent
                components can pass down to their child components. They're used
                to customize how child components look or behave. It's a way for
                components to communicate with each other, allowing for flexible
                and reusable code. Think of it as passing messages or
                information from one part of your app to another.
              </h4>
            </li>
            <li className="my-5">
              What is the props drilling ?
              <br />
              <h4 className="mt-3">
                Props drilling, also known as prop tunneling, is a situation in
                React where you pass props through multiple levels of components
                to reach a deeply nested component that needs the data, even
                though the intermediate components do not use the data
                themselves.
                <ol>
                  <li>
                    {" "}
                    It can make the code harder to read and maintain, as you
                    have to follow the flow of props through multiple levels of
                    components.
                  </li>
                  <li>
                    {" "}
                    It can make components less reusable, as they become tightly
                    coupled to the structure of the application.
                  </li>
                  <li>
                    {" "}
                    It can cause performance issues, especially if the props are
                    being passed down through many levels of components.
                  </li>
                </ol>
              </h4>
            </li>
            <li className="my-5">
              what is the functions base components ?
              <br />
              <h4 className="mt-3">
                A functional component is a plain JavaScript function that takes
                props as input and returns a React element (JSX). These
                components are often used for presentational purposes, but with
                the introduction of React Hooks, they can also manage state and
                side effects.
              </h4>
            </li>
            <li className="my-5">
              What is the virtual DOM ?
              <br />
              <h4 className="mt-3">
                Sure! The virtual DOM is a lightweight copy of the real DOM.
                React uses it to figure out what changes need to be made to the
                real DOM without updating everything, which makes things faster
                and more efficient.
              </h4>
            </li>
            <li className="my-5">
              what is the life cycle method in functioin base components ?
              <br />
              <h4 className="mt-3">
                In React, functional components don’t have traditional lifecycle
                methods like class components. Instead, they use React Hooks to
                manage lifecycle events.
                <br />
                <br />
                <ol>
                  1. useEffect {">"} The useEffect hook is the most versatile
                  and commonly used hook for managing side effects in functional
                  components. It can be used to mimic the behavior of several
                  lifecycle methods:
                  <br />
                  <br />
                  <ul>
                    {" "}
                    componentDidMount: Runs once after the initial render.
                  </ul>{" "}
                  <ul> componentDidUpdate: Runs after every update.</ul>
                  <ul>
                    {" "}
                    componentWillUnmount: Runs before the component is removed
                    from the DOM.
                  </ul>
                </ol>
              </h4>
            </li>
            <li className=" my-5">
              what is the life cycle method in class base components ?
              <br />
              <h4 className="mt-3">
                In React class-based components, lifecycle methods are special
                methods that run at different stages of a component’s life. Here
                are the key ones:
                <ol>
                  <ul>
                    componentDidMount(): Runs after the component is added to
                    the DOM.
                  </ul>
                  <ul>
                    componentDidUpdate(): Runs after the component updates
                    (e.g., state or props change).
                  </ul>
                  <ul>
                    componentWillUnmount(): Runs just before the component is
                    removed from the DOM.
                  </ul>
                  <ul>
                    These methods help you manage side effects like fetching
                    data, updating the DOM, or cleaning up resources.
                  </ul>
                </ol>
              </h4>
            </li>
            <li className="my-5">
            what is the Hook ?
              <br />
              <h4 className="mt-3">
                In React, a Hook is a special function that lets you “hook into”
                React features such as state and lifecycle methods from function
                components. Introduced in React 16.8, Hooks allow you to use
                state and other React features without writing a class
                component
                
                12. Here are some key points about Hooks: State
                Management: Hooks like useState allow you to add state to
                functional components. Side Effects: Hooks like useEffect let
                you perform side effects in function components. Rules: Hooks
                can only be called at the top level of a function component or
                from other custom Hooks. 
              </h4>
            </li>
          </h2>
        </ol>
      </div>
    </div>
  );
};

export default ReactJS;
