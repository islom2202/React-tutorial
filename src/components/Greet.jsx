// export const Greet = (props) => {
//   let {name, heroName, children} = props;
//   return (
//     <div>
//       <h1>
//         Hello {name} - {heroName}
//       </h1>
//       {children}
//     </div>
//   )
// }

import React, {Component} from "react";

class Greet extends Component {
  render() {
    let { name, heroName, children } = this.props
    return (
      <div>
        <h1>Hello {name} - {heroName}</h1>
      </div>
    )
  }
}
export default Greet;