import { CurrencyConverted } from './currency-converted';
import { CurrencyWillConvert } from './currency-will-convert';

export interface StoredData extends CurrencyConverted, CurrencyWillConvert {
  totalConverted: number;
}
