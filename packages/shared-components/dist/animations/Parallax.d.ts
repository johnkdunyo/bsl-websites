import { ReactNode } from 'react';

type ParallaxProps = {
    children: ReactNode;
    offset?: number;
    clampInitial?: boolean;
    clampFinal?: boolean;
};
declare const Parallax: ({ children, offset, clampInitial, clampFinal, }: ParallaxProps) => JSX.Element;

export { Parallax };
