import * as React from "react";
import type { SVGProps } from "react";

const PingPong = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="#25314c" d="m18.12 13.36-.98.96c-1.88 1.88-2.7 1.75-4.23 1.75-.53 0-1.08-.07-1.61-.22-1-.28-2.09-.06-2.83.68l-3.33 3.33c-.19.19-.49.18-.67 0l-1.34-1.34a.474.474 0 0 1 0-.67l3.33-3.33c.74-.74.96-1.83.68-2.83a6 6 0 0 1-.22-1.61c0-1.54-.13-2.35 1.75-4.23l.96-.98c2.68-2.68 6.15-2.33 8.48 0s2.68 5.8 0 8.48z" opacity=".4" /><path fill="#25314c" d="M21.5 19a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0M7.14 7.98c-.24.62-.22 1.18-.22 1.9l6.2 6.2c.72 0 1.28.02 1.9-.22z" /></svg>;

export { PingPong };