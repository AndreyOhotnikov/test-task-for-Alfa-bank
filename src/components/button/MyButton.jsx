import React from "react";
import { Button } from "react-bootstrap";


export default function MyButton ({children , ...props}) {

  return <Button {...props}  variant="warning">{children}</Button>
}
// export default MyButton;
