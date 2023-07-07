import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { jsx } from 'react/jsx-runtime';

var i=()=>{let[e,o]=useState(!1);return useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>400?o(!0):o(!1);});},[]),jsx("div",{className:"top-to-btm",children:e&&jsx(FaAngleUp,{className:"icon-position icon-style",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"});}})})},T=i;

export { T as a };
