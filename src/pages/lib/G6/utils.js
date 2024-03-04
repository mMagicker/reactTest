import fonts from '../../../assets/fonts/iconfont.json'

const icons = fonts.glyphs.map((icon) => {
  return {
    name: icon.name,
    unicode: String.fromCodePoint(icon.unicode_decimal), // `\\u${icon.unicode}`,
  };
});
export const getIcon = (type) => {
  const matchIcon = icons.find((icon) => {
    return icon.name === type;
  }) || { unicode: '', name: 'default' };
  return matchIcon.unicode;
};