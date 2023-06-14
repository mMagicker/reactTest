import Crypto from './crypto-js/Crypto'
import HtmlToWord from './Html2/HtmlToWord'
import Html2PDF from './Html2/Html2Pdf'
import SortHocPage from './react-sort-hoc/SortHocPage'
import Html2Canvas from "./Html2/Html2Canvas";
import G6 from "@/pages/lib/G6";
import RichText from './RichText';
import RecordRTC from './RecordRTC';

export default {
  ...RichText,
  Crypto,
  HtmlToWord,
  SortHocPage,
  Html2Canvas,
  Html2PDF,
  G6,
  RecordRTC
}