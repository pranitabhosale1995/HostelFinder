import React from "react";
import { Link } from "react-router-dom";


//->>>>>>>>>>.. MatBtn
export function MatBtn({ xclass = "", to = "#", children, ...props }) {
  if (to === '#') {
    return (
      <button className={`w3-button  w3-ripple  ${xclass}`}  {...props} >
        {children}
      </button>
    )
  }
  return (
    <Link className={`w3-button  w3-ripple  ${xclass}`} to={to}  {...props} >
      {children}
    </Link>
  )
}


//->>>>>>>>>>.. MatIcon
export function MatIcon({ icon = "star", size = 24, xclass = "" }) {
  return (
    <i
      className={`material-icons ${xclass}`}
      style={{ fontSize: `${size}px`, lineHeight: `${size}px`, verticalAlign: `middle` }}>
      {icon}
    </i>
  )
}




