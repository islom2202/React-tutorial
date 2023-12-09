# What should I learn from this tutorial:
## 1. Installation :
 **1. Without Vite:** 
~~~
1. npx create-react-app project-name
2. cd project-name
3. npm start
~~~
 **2. With Vite:**

~~~
1. npm create vite@latest
2. Ok to proceed? (y) // type y
3. Project name: // type project-name
4. Select a framework: // chose React
5. Select a variant : // chose JavaScript
6. cd project-name
7. npm install
8. npm run dev
~~~

## 2. Folder Structure: 
  - **Public** - mainly for html, which has div tag with root id
  - **Src** - which contains App.jsx and main.jsx

## 3. Components:
1. Component - is a piece of reusable and self-contained code.
2. Components are of 2 types:
   - **Stateless** Functional Component - is just a JavaScript function which accepts input of ``properties (props)`` and returns ``html (jsx)`` - are called stateless / dumb / presentational components:
   ~~~
   function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
   }
   ~~~
   - **Statefull** Class Component like Functional Component alse can accept input of props and return html, but it also provides additional features like maintaining its won private data ``(state)``, ``complex UI logic`` and provide ``lifecycle hooks`` - are callled statefull / smart / container components:
   ~~~
   class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
   }
   ~~~

## 4. Exprorts and Imports
  - There are two ways to export :
  1. **default** export - which makes it possible to give any name we want when we import it:
  ~~~
  const Greet = () => <h1>Hello Islom</h1>
  export default Greet;
  ...
  import Hello from './components/Greet'
~~~ 
 2. **direct** export - should be imported with ``exact name`` and ``destructured`` way:
 ~~~
export const Greet = () => <h1>Hello Islom</h1>
...
import {Greet} from './components/Greet'
~~~

## 5. Hooks Update (from React v16.7.0 alpha)
Hooks let us use state and other React features without writing a class (is indeed contradicts last versions)

## 6. JSX (JavaScript XML)
- Extension to JavaScript syntax.
- Write XML-like (html-like) code for elements and components

It would look like this **with** JSX extension (first example) - it is said to import React here on tutorial, becuase jsx will compile it into createElement under the hook just like in React, without extenstion (**BUT IT WORKS WITHOUT IT** , I don't know why).:
~~~
export const Greet = () => <h1>Hello Islom</h1>
~~~
It would look like this **with** JSX extension (second example):
~~~
export const Greet = () => <h1 id="hello">Hello Islom</h1> 
~~~

It would look like this **without** JSX extension  (first example) - null stands for additional properties (like id, className, style):
~~~
import React from 'react';
export const Greet = () =>
  React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Islom")
  )
~~~

It would look like this **without** JSX extension  (second example):
~~~
import React from 'react';
export const Greet = () =>
  React.createElement(
    "div",
    {id: "hello},
    React.createElement("h1", null, "Hello Islom")
  )
~~~

#### 6.1. The differencex between HTML and JSX:
- class --> className
- for --> htmlFor
- onclick --> onClick
- tabindex --> tabIndex

## 7. Props (properties) - props, children 
is an optional input, that our component can accept, that makes our component reusable and dynamic. <br>
**Props cannot be changed <mark>(rule)</mark>** ⨉: <br>
~~~
export const Greet = (props) => {
  props.name = "new_Name" 
  return (...) 
  }
~~~

#### 7.1 props - we usually give an input for it.
1. We give the values in app as attributes (name, with values Bobojon, Dilnoza, Islom):
~~~
import React from 'react'
import {Greet} from './components/Greet'
export const App = () => {
  return (
    <div>
      <Greet name="Bobojon" heroName="Harry Potter" />
      <Greet name="Dilnoza" heroName="Seeker's heart"/>
      <Greet name="Islom" heroName="Seeker"/>
    </div>
  )
}

~~~
2. We access that attribute here as a **props** (which is an object, which contains attributes as properties):
~~~
export const Greet = (props) => <h1>Hello {props.name} - {props.heroName}</h1>
~~~

#### 7.1 children - it is usefull when the input could be optional (if we want we give children,if we don't want, we dont't give any children):
1. App.jsx:
~~~
<Greet name="Bobojon" heroName="Harry Potter" > My friend</Greet>
~~~
2. Component:
~~~
export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} - {props.heroName}
      </h1>
      {props.children}
    </div>
  )
}
~~~

#### 7.2 Props in a Class Component ( we use 'this'):
1. App.jsx:
~~~
import React from 'react'
import Welcome from './components/Class'
export const App = () => {
  return (
    <div>
      <Welcome name="Islom"/>
    </div>
  )
}
~~~
2. Comonent:
~~~
import React, {Component} from "react";
class Welcome extends Component {
  render(){
    return (
      <h1>{this.props.name}</h1>
    )
  }
}
export default Welcome;
~~~