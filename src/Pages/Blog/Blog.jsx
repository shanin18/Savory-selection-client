import React, { createRef } from "react";
import img1 from "/q_Images/q1.png";
import img2 from "/q_Images/q2.png";
import img3 from "/q_Images/q3.png";
import { FaDownload } from "react-icons/fa";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = createRef();
  return (
    <div className="container mx-auto mb-10 pt-10">
      <div className="text-center">
      <Pdf targetRef={ref} className="w-full mx-auto" filename="Blog-Question.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="font-montserrat font-semibold border pl-2 pr-6 shadow-xl btn capitalize mb rounded py-3"
          >
            <FaDownload className="inline w-10 pl-2"></FaDownload> Download as
            PDF
          </button>
        )}
      </Pdf>
      </div>

      <div ref={ref} className="my-20">
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-10 border-0 border-b-4 border-b-yellow-300 rounded-xl shadow-xl px-5 md:px-10 text-center mx-2 border-t py-4 w-fit">
            Questions & Answers
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-3">
              Differences between uncontrolled and controlledcomponents.
            </h3>
            <p className="font-montserrat">
              In the context of software development, the terms "controlled
              components" and "uncontrolled components" refer to the level of
              control that a developer has over a particular software component.
              Here are the key differences between these two types of
              components: <br />
              Controlled components are often more customizable than
              uncontrolled components, because developers can modify them to
              suit their needs. Uncontrolled components can be more challenging
              to work with, because their behavior may be unpredictable or hard
              to control. Controlled components can be easier to test and debug
              than uncontrolled components, because the developer has more
              control over their behavior. Uncontrolled components are often
              simpler to use, because the developer doesn't need to worry about
              configuring them or managing their state.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-3">
              How to validate React props using PropTypes
            </h3>
            <p className="font-montserrat">
              React PropTypes is a way to validate the types of props passed to
              a component in React. Here are the steps to validate React props
              using PropTypes:
              <br />
              <br />
              1. Import PropTypes from the 'prop-types' package:
              <br />
              <br />
              <img className="mb-3" src={img1} alt="image" />
              2. Add a propTypes object to your component. This object should
              contain a key for each prop that you want to validate, with the
              value being the type you want to validate for. For example, if you
              have a prop called "name" that should be a string, you can define
              your propTypes object like this:
              <br />
              <br />
              <img className="mb-3" src={img2} alt="image" />
              3. You can also add additional validation rules for each prop. For
              example, you can require a prop to be present by using
              .isRequired, or provide an array of possible values using .oneOf()
              method. Here are some examples:
              <br />
              <br />
              <img className="mb-3" src={img3} alt="image" />
              4. Once you've defined your propTypes object, React will
              automatically check the types of the props passed to your
              component and log a warning if any of the types do not match. You
              can see this warning in your browser's developer console.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-3">
              Difference between nodejs and express js.
            </h3>
            <p className="font-montserrat">
              Node.js and Express.js are both technologies used for web
              development, but they serve different purposes. Node.js is a
              runtime environment for executing JavaScript code outside of a web
              browser, while Express.js is a web framework built on top of
              Node.js.
              <br />
              <br />
              Here are some key differences between Node.js and Express.js:
              <br />
              <br />
              1. Functionality: Node.js provides a runtime environment for
              JavaScript code to run on a server, allowing developers to build
              server-side applications with JavaScript. Express.js, on the other
              hand, is a web framework that provides a set of tools and
              utilities for building web applications using Node.js.
              <br /> <br />
              2. Routing: Node.js does not have a built-in routing system for
              handling HTTP requests. Express.js, on the other hand, provides a
              robust routing system that allows developers to easily define the
              routes and handlers for HTTP requests.
              <br />
              <br />
              3. Middleware: Express.js has a middleware architecture, which
              allows developers to easily add additional functionality to their
              web applications. Middleware functions are functions that are
              executed in between the HTTP request and response, and can perform
              tasks such as authentication, logging, and error handling. Node.js
              does not have a built-in middleware architecture.
              <br />
              <br />
              4. Community: Both Node.js and Express.js have large and active
              communities of developers, but Express.js has a more specialized
              focus on web development. This means that there are many more
              resources available for building web applications using
              Express.js, such as middleware libraries, templates, and examples.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-3">
              What is a custom hook, and why will you create a custom hook?
            </h3>
            <p className="font-montserrat">
              In React, a custom hook is a JavaScript function that starts with
              the word "use" and allows you to encapsulate and reuse logic
              across different components. Custom hooks are a way to share logic
              that can be reused across different components without having to
              repeat code.
              <br />
              <br />
              Custom hooks allow developers to create reusable code that
              encapsulates logic and can be used across different components.
              Here are some reasons why you might want to create a custom hook:
              <br />
              <br />
              1. Code reuse: Custom hooks allow you to reuse code across
              different components. By creating a custom hook, you can
              encapsulate complex logic into a single function and reuse that
              function in different parts of your application. <br />
              <br />
              2. Abstraction: Custom hooks allow you to abstract away complex
              logic and provide a simpler interface for your components. By
              hiding complex logic behind a simple function call, you can make
              your code easier to understand and more maintainable. <br />
              <br />
              3. Separation of concerns: Custom hooks allow you to separate
              concerns between different parts of your application. By moving
              logic into a custom hook, you can keep your components focused on
              their core functionality and prevent them from becoming too
              complex. <br />
              <br />
              4. Testing: Custom hooks make it easier to test your code. By
              creating a custom hook, you can write tests for that function once
              and reuse those tests across different components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
