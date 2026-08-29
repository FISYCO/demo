import * as React from "react";
import type { SVGProps } from "react";

const BowlingBall = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="#25314c" d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10" opacity=".4" /><path fill="#25314c" d="M13.02 8.25c-.69 0-1.25-.56-1.25-1.25s.55-1.25 1.24-1.25h.01a1.25 1.25 0 0 1 0 2.5M17.27 10c0-.69-.56-1.25-1.25-1.25h-.01c-.69 0-1.24.56-1.24 1.25a1.25 1.25 0 0 0 2.5 0m-4 1c0-.69-.56-1.25-1.25-1.25h-.01c-.69 0-1.24.56-1.24 1.25a1.25 1.25 0 0 0 2.5 0" /></svg>;

export { BowlingBall };