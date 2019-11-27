import React from 'react';

export default function HelloWorld(props) {
  return (
<div>
<div>{props.name}</div>
<button onClick={()=> props.myButtonClickHandler(props.name)}>Click me</button>
</div>

  )
};