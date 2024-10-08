// @ts-nocheck
import React from "react";
import { style, Theme, ITheme, compose } from "@xstyled/styled-components";

/**
 * Tag props
 * color = add list of colors OR manual color (also check about lightness to determine font color)
 * icon = use react icons
 * closable
 * visible(?) -> related to closable
 * onClose -> related to closable
 */

interface ColorProps {
  color?: string;
}

const tagColor = style<ColorProps>({
  prop: "color",
  css: () => ({}),
});

interface IconProps {
  icon?: React.ReactNode;
}

interface SizeProps {
  size?: "small" | "medium" | "large";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface TagProps<T extends ITheme = Theme>
  extends ColorProps,
    IconProps,
    SizeProps {}

export const tagProps = compose<TagProps>(tagColor);
