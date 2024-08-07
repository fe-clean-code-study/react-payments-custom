import { CardCompany } from '~/entities/Card';

export const color = {
  white: '#ffffff',
  gray100: '#eeeeee',
  gray200: '#e0e0e0',
  gray300: '#e5e5e5',
  gray400: '#bdbdbd',
  gray500: '#575757',
  green500: '#04C09E',
  blackAlpha: '#00000030',
  yellow500: '#cbba64',
  red500: '#E24141',
};

export const cardColor: Record<CardCompany, string> & { NONE: string } = {
  NONE: '#94dacd',
  SUYEON: '#E24141',
  SEJIN: '#547CE4',
  CHANWOOK: '#73BC6D',
  JONGGIL: '#DE59B9',
  HYORI: '#04C09E4F',
  HYESONG: '#E76E9A',
  JINGYEONG: '#F37D3B',
  GEONWOO: '#FBCD58',
};
