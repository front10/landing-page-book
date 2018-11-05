import withStyles from '../WithStyles';

const isAvailable = prop => {
  const stylesProps = withStyles().propTypes;
  return (
    Object.keys(stylesProps).filter(item => {
      const patt = new RegExp(`[a-z]+[a-z|A-Z]${item.charAt(0).toUpperCase()}${item.slice(1)}`);
      return patt.test(prop);
    }).length > 0
  );
};

const extractProps = (prefix, props) => {
  const newProps = {};
  if (prefix) {
    const patt = new RegExp(`${prefix}[A-Z]`);
    Object.keys(props).map(prop => {
      if (patt.test(prop) && isAvailable(prop)) {
        let newProp = prop.substring(prefix.length);
        newProp = newProp.charAt(0).toLowerCase() + newProp.slice(1);
        newProps[newProp] = props[prop];
      }
      return prop;
    });
  }
  return newProps;
};

export default extractProps;
