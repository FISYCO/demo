import * as React from "react";
import type { SVGProps } from "react";

const Dumbbell = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="#25314c" d="M3 16.5v-9Q3 6 4.5 6h2Q8 6 8 7.5v9Q8 18 6.5 18h-2Q3 18 3 16.5M17.5 18h2q1.5 0 1.5-1.5v-9Q21 6 19.5 6h-2Q16 6 16 7.5v9q0 1.5 1.5 1.5" opacity=".4" /><path fill="#25314c" d="M3 9.5v5h-.5c-.56 0-1-.47-1-1.07v-2.86c0-.6.44-1.07 1-1.07zm18.5 0H21v5h.5c.56 0 1-.47 1-1.07v-2.86c0-.6-.44-1.07-1-1.07M8 14h8v-4H8z" /></svg>;

export { Dumbbell };