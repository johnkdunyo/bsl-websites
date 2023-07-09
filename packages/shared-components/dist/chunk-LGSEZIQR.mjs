import { a } from './chunk-5SUNLSPD.mjs';
import { useRef, useState, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

function f(e,t="0px"){let[i,o]=useState(!0);return useEffect(()=>{let n=new IntersectionObserver(([a])=>{o(a.isIntersecting);},{rootMargin:t});return e.current&&n.observe(e.current),()=>{e.current&&n.unobserve(e.current);}},[]),i}var c=({from:e,to:t,className:i,children:o})=>{let n=useRef(null),a$1=f(n),l={transition:"600ms ease-in-out"};return jsx("div",{className:i,ref:n,style:a$1?a(a({},l),t):a(a({},l),e),children:o})},C=({className:e,children:t})=>jsx(c,{className:e,from:{opacity:0},to:{opacity:1},children:t}),I=({className:e,children:t})=>jsx(c,{className:e,from:{opacity:0,translate:"0 2rem"},to:{opacity:1,translate:"none"},children:t}),S=({className:e,children:t})=>jsx(c,{className:e,from:{scale:"0"},to:{scale:"1"},children:t}),v={FadeIn:C,FadeUp:I,ScaleIn:S};

export { v as a };
