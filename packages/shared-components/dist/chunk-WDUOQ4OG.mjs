import { a } from './chunk-YIXXTI3R.mjs';
import { useState, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

function h(c){return a({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"}}]})(c)}var e=()=>{let[c,t]=useState(!1);return useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>400?t(!0):t(!1);});},[]),jsx("div",{className:"top-to-btm",children:c&&jsx(h,{className:"icon-position icon-style",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"});}})})},d=e;

export { d as a };
