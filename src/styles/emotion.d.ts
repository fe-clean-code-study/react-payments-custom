import '@emotion/react';
import color from './color';

export type Color = typeof color;

declare module '@emotion/react' {
  export interface Theme extends color {
    color: {
      [key in keyof Color]: string;
    };
  }
}
