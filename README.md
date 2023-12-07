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
   - **Stateless** Functional Component - is just a JavaScript function which accepts input of ``properties (props)`` and returns ``html (jsx)``:
   ~~~
   function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
   }
   ~~~
   - **Statefull** Class Component:
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
