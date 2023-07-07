import '../chunk-5SUNLSPD.mjs';
import s from 'next/image';
import { useState, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

var i=()=>{let[e,o]=useState(!1);useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>1800?o(!0):o(!1);});},[]);return jsx("div",{className:"relative",children:e&&jsx("button",{children:jsx(s,{alt:"chat u",src:"/assets/icons/whatsapp.png",height:50,width:150,className:"fixed bottom-0 right-0 chatIcon-style z-20",loading:"lazy"})})})},p=i;

export { p as default };
