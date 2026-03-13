export type Tokens = typeof import("./tokens").tokens;
export type TokenPath = "styles.12-regular" | "styles.12-semibold" | "styles.14-regular" | "styles.14-semibold" | "styles.18-regular" | "styles.18-semibold" | "styles.24-regular" | "styles.24-semibold" | "styles.48-regular" | "styles.48-semibold" | "styles.64-regular" | "styles.64-semibold" | "styles.bg-blur-100" | "styles.bg-blur-40" | "styles.black.5" | "styles.black.10" | "styles.black.20" | "styles.black.40" | "styles.black.80" | "styles.black.100" | "styles.border-lighting" | "styles.design-notes" | "styles.drop-shadow" | "styles.focus" | "styles.glow" | "styles.inner-shadow" | "styles.logo-hover" | "styles.white.5" | "styles.white.10" | "styles.white.20" | "styles.white.40" | "styles.white.80" | "styles.white.100";
export type VariableTokenPath = Extract<TokenPath, `variables.${string}`>;
export type StyleTokenPath = Extract<TokenPath, `styles.${string}`>;
export type TokenValueByPath<P extends TokenPath> = (typeof import("./tokens").tokenValuesByPath)[P];
export type VariableTokenValueByPath<P extends VariableTokenPath> = TokenValueByPath<P>;
export type StyleTokenValueByPath<P extends StyleTokenPath> = TokenValueByPath<P>;
