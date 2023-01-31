import React from "react";
import "./searchbox.css";

export const Searchbox=({placeholder,handleChange})=>
{
    return(
    <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />)
}