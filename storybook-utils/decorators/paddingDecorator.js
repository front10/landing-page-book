import React from 'react';

const styles = {
  padding: '20px'
};

export default function(storyFn) {
  return <div style={styles}>{storyFn()}</div>;
}
