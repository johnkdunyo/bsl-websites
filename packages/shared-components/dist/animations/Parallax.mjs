import '../chunk-5SUNLSPD.mjs';
import { useState, useRef, useLayoutEffect } from 'react';
import { useReducedMotion, useViewportScroll, useTransform, useSpring, motion } from 'framer-motion';
import { jsx, Fragment } from 'react/jsx-runtime';

var M=({children:o,offset:e=50,clampInitial:a,clampFinal:c})=>{let d=useReducedMotion(),[i,u]=useState(0),[m,p]=useState(0),n=useRef(null),{scrollY:f}=useViewportScroll(),w=i-m,g=i+e,R=useTransform(f,[w,g],[a?0:e,c?0:-e]),v=useSpring(R,{stiffness:400,damping:90});return useLayoutEffect(()=>{let r=n.current;if(!r)return;let t=()=>{u(r.getBoundingClientRect().top+window.scrollY||window.pageYOffset),p(window.innerHeight);};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[n]),d?jsx(Fragment,{children:o}):jsx(motion.div,{ref:n,style:{y:v},initial:{y:0},children:o})};

export { M as Parallax };
