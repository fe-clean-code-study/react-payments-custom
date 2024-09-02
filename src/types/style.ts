type Length =
  | "0"
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`;

type BorderRadius =
  | Length
  | `${Length} ${Length}`
  | `${Length} ${Length} ${Length} ${Length}`;

type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";

type LengthHex<L extends number> = L extends 3 | 4 | 6 | 8 ? string : never;
type HexColor = `#${LengthHex<3 | 6>}` | `#${LengthHex<4 | 8>}`;

type RgbColor = `rgb(${number}, ${number}, ${number})`;
type RgbaColor =
  `rgba(${number}, ${number}, ${number}, ${number | `${number}.${number}`})`;

type Color = RgbColor | RgbaColor | HexColor;

export type { Length, Position, Color, BorderRadius };
