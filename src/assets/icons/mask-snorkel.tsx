import * as React from "react";
import type { SVGProps } from "react";

const MaskSnorkel = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="#25314c" d="M17 14h-3.17c-.52 0-1-.27-1.27-.71l-1.21-1.94a1 1 0 0 0-1.7 0l-1.21 1.94c-.27.44-.75.71-1.27.71H4c-.55 0-1-.45-1-1V9q0-3 3-3h9q3 0 3 3v4c0 .55-.45 1-1 1" opacity=".4" /><path fill="#25314c" d="M21.75 3v15c0 2.42-1.33 3.75-3.75 3.75h-4.5c-2.42 0-3.75-1.33-3.75-3.75v-.25H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25V18c0 1.58.67 2.25 2.25 2.25H18c1.58 0 2.25-.67 2.25-2.25V3c0-.41.34-.75.75-.75s.75.34.75.75" /></svg>;

export { MaskSnorkel };