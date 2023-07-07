import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface ISiteLayoutProps {
    children: ReactNode;
    pageName: "BSL Home" | "Spectrum Fibre" | "Infra Services" | "Digital Payment" | "Business" | "About" | "Career" | "Enquiry" | "Galley";
}
declare function SiteLayout({ children, pageName }: ISiteLayoutProps): react_jsx_runtime.JSX.Element;

export { SiteLayout };
