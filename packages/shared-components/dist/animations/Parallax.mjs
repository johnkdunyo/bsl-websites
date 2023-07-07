import { e, d, b, c, a } from '../chunk-6YMAE25D.mjs';
import '../chunk-W27PVTBX.mjs';
import { useState, useRef, useLayoutEffect } from 'react';
import { jsx, Fragment } from 'react/jsx-runtime';

var M=({children:o,offset:e$1=50,clampInitial:p,clampFinal:f})=>{let w=e(),[i,g]=useState(0),[R,v]=useState(0),n=useRef(null),{scrollY:y}=d(),E=i-R,P=i+e$1,H=b(y,[E,P],[p?0:e$1,f?0:-e$1]),L=c(H,{stiffness:400,damping:90});return useLayoutEffect(()=>{let r=n.current;if(!r)return;let t=()=>{g(r.getBoundingClientRect().top+window.scrollY||window.pageYOffset),v(window.innerHeight);};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[n]),w?jsx(Fragment,{children:o}):jsx(a.div,{ref:n,style:{y:L},initial:{y:0},children:o})};

export { M as Parallax };
