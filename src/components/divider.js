import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(4, 4, 5, 0.1)', // Color y opacidad del divisor
    marginVertical: 10, // Espacio vertical alrededor del divisor
  },
});

export default Divider;
