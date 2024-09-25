import '@emotion/react';
import { color, cardColor } from './color';

export type Color = typeof color;
export type CardColor = typeof cardColor;

declare module '@emotion/react' {
  export interface Theme extends color, cardColor {
    color: {
      [key in keyof Color]: string;
    };
    cardColor: {
      [key in cardColor]: string;
    };
  }
}
