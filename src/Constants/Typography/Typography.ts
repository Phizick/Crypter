import { CSSProperties } from 'react';
import "../Typography/Fonts.css"

export interface TypographyStyles {
    fontFamily: string;
    fontSize: string;
    fontStyle: "normal";
    fontWeight: string;
    lineHeight: string;
    letterSpacing?: string;
    textTransform?: string;
    color?: string;
}

//стили заголовков
export const HEADLINERS_STYLES: Record<string, any> = {
    HEADLINE_HERO: {
        "font-family": "DM Sans",
        "font-size": "96px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "96px",
        "letter-spacing": "-1.92px",
    },
    HEADLINE_FIRST: {
        "font-family": "DM Sans",
        "font-size": "64px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "64px",
        "letter-spacing": "-1.28px",
    },
    HEADLINE_SECOND: {
        "font-family": "DM Sans",
        "font-size": "48px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "56px",
        "letter-spacing": "-0.96px",
    },
    HEADLINE_THIRD: {
        "font-family": "DM Sans",
        "font-size": "40px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "48px",
        "letter-spacing": "-0.4px",
    },
    HEADLINE_FOURTH: {
        "font-family": "DM Sans",
        "font-size": "32px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "40px",
        "letter-spacing": "-0.32px",
    }
};

//текстовые стили
export const TEXT_STYLES: Record<string, any> = {
    TEXT_BIG: {
        "font-family": "Poppins",
        "font-size": "21px",
        "font-style": "normal",
        "font-weight": "400",
        "line-height": "32px",
        "letter-spacing": "-0.24px",
    },
    TEXT_BOLD: {
        "font-family": "Poppins",
        "font-size": "24px",
        "font-style": "normal",
        "font-weight": "600",
        "line-height": "32px",
    },
    TEXT_NORMAL: {
        "font-family": "Poppins",
        "font-size": "16px",
        "font-style": "normal",
        "font-weight": "400",
        "line-height": "24px",
    },
    TEXT_LINKS: {
        "font-family": "Poppins",
        "font-size": "16px",
        "font-style": "normal",
        "font-weight": "500",
        "line-height": "24px",
    },
    TEXT_CAPTION: {
        "font-family": "Poppins",
        "font-size": "14px",
        "font-style": "normal",
        "font-weight": "400",
        "line-height": "24px",
    },
    TEXT_CAPTION_BOLD: {
        "font-family": "Poppins",
        "font-size": "14px",
        "font-style": "normal",
        "font-weight": "500",
        "line-height": "24px",
    },
    TEXT_CAPTION_SMALL: {
        "font-family": "Poppins",
        "font-size": "12px",
        "font-style": "normal",
        "font-weight": "400",
        "line-height": "20px",
    },
    TEXT_CAPTION_SMALL_BOLD: {
        "font-family": "Poppins",
        "font-size": "12px",
        "font-style": "normal",
        "font-weight": "600",
        "line-height": "20px",
    },
    TEXT_HAIRLINE_LARGE: {
        "font-family": "Poppins",
        "font-size": "16px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "16px",
        "text-transform": "uppercase",
    },
    TEXT_HAIRLINE_SMALL: {
        "font-family": "Poppins",
        "font-size": "12px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "12px",
        "text-transform": "uppercase",
    },
    TEXT_BUTTON_DEFAULT: {
        "font-family": "DM Sans",
        "font-size": "16px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "16px",
    },
    TEXT_BUTTON_SMALL: {
        "font-family": "DM Sans",
        "font-size": "14px",
        "font-style": "normal",
        "font-weight": "700",
        "line-height": "16px",
    },
}

