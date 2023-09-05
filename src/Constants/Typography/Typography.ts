import { CSSProperties } from 'react';
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
export const HEADLINERS_STYLES: Record<string, TypographyStyles> = {
    HEADLINE_HERO: {
        fontFamily: "DM Sans",
        fontSize: "96px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "96px",
        letterSpacing: "-1.92px",
    },
    HEADLINE_FIRST: {
        fontFamily: "DM Sans",
        fontSize: "64px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "64px",
        letterSpacing: "-1.28px",
    },
    HEADLINE_SECOND: {
        fontFamily: "DM Sans",
        fontSize: "48px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "56px",
        letterSpacing: "-0.96px",
    },
    HEADLINE_THIRD: {
        fontFamily: "DM Sans",
        fontSize: "40px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "48px",
        letterSpacing: "-0.4px",
    },
    HEADLINE_FOURTH: {
        fontFamily: "DM Sans",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "40px",
        letterSpacing: "-0.32px",
    }
};

//текстовые стили
export const TEXT_STYLES: Record<string, any> = {
    TEXT_BIG: {
        fontFamily: "Poppins",
        fontSize: "21px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px",
        letterSpacing: "-0.24px",
    },
    TEXT_BOLD: {
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "32px",
    },
    TEXT_NORMAL: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
    },
    TEXT_LINKS: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "24px",
    },
    TEXT_CAPTION: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
    },
    TEXT_CAPTION_BOLD: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "24px",
    },
    TEXT_CAPTION_SMALL: {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "20px",
    },
    TEXT_CAPTION_SMALL_BOLD: {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "20px",
    },
    TEXT_HAIRLINE_LARGE: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "16px",
        textTransform: "uppercase",
    },
    TEXT_HAIRLINE_SMALL: {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "12px",
        textTransform: "uppercase",
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

