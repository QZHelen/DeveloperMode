import React from 'react';

class Test extends React.Component {
   render() {
      return (
         <div>
            {this.props.children}
         </div>
      );
   }
}

export default Test;
