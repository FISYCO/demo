import type { JsxStyleProps } from "@chakra-ui/react";

/**
 * Style props that consumers ARE allowed to use on UI components.
 * Everything else from JsxStyleProps (p, m, bg, color, etc.) is stripped.
 *
 * colorPalette is a variant selector (not an arbitrary style override),
 * so it stays available on all UI components.
 */
type AllowedStyleProps = "colorPalette";

/**
 * Keys forbidden on public component APIs:
 * - All Chakra style props except the whitelist above
 * - className, style, css, as (polymorphic)
 *
 * Layout primitives (Box, Stack, Container, etc.) are NOT wrapped in UIProps
 * and retain full Chakra style props.
 */
type ForbiddenKeys = Exclude<keyof JsxStyleProps, AllowedStyleProps> | "style" | "className" | "as";

/**
 * Base props shared across all UI components.
 * Add attributes here to propagate them to every component automatically.
 */
export interface UIBaseProps {
  "data-testid"?: string;
}

/**
 * Standard wrapper for Chakra component props:
 * - removes all style props (p, m, bg, color, css, style, textStyle, layerStyle, etc.)
 * - keeps colorPalette (variant selector, not arbitrary style)
 * - removes className and polymorphic `as`
 * - adds UIBaseProps (data-testid, future shared attrs)
 *
 * Use this for all public component interfaces in packages/ui.
 * Layout primitives (Box, Stack, etc.) should NOT use this type.
 */
export type UIProps<TChakraProps> = Omit<TChakraProps, ForbiddenKeys> & UIBaseProps;
