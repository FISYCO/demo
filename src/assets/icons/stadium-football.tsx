import * as React from "react";
import type { SVGProps } from "react";

const StadiumFootball = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="#25314c" d="M3 16V8q0-3 3-3h12q3 0 3 3v8q0 3-3 3H6q-3 0-3-3" opacity=".4" /><path fill="#25314c" d="M12.75 8.85V5h-1.5v3.85c-1.43.34-2.5 1.62-2.5 3.15s1.07 2.81 2.5 3.15V19h1.5v-3.85c1.43-.34 2.5-1.62 2.5-3.15s-1.07-2.81-2.5-3.15m-.75 4.9c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75M18.75 10v4c0 .14.11.25.25.25h2v1.5h-2c-.96 0-1.75-.79-1.75-1.75v-4c0-.96.79-1.75 1.75-1.75h2v1.5h-2c-.14 0-.25.11-.25.25M3 15.75h2c.96 0 1.75-.79 1.75-1.75v-4c0-.96-.79-1.75-1.75-1.75H3v1.5h2c.14 0 .25.11.25.25v4c0 .14-.11.25-.25.25H3z" /></svg>;

export { StadiumFootball };