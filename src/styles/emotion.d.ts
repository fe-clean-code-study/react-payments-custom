import '@emotion/react';
import color from './color';
import cardColor from './cardColor';
import { CardCompany } from '../types';

export type Color = typeof color;
export type CardColor = typeof cardColor;

declare module '@emotion/react' {
  export interface Theme extends color, cardColor {
    color: {
      [key in keyof Color]: string;
    };
    cardColor: {
      [key in CardCompany]: string;
    };
  }
}
