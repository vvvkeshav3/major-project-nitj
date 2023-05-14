import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

renderThirdLayer = (percent) => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View
        style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]}
      ></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({ percent }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      <Icon name="silverware-fork-knife" size={30} style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderWidth: 5,
    borderRadius: 35,
    borderColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 70,
    height: 70,
    borderWidth: 5,
    borderRadius: 35,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#222831',
    borderTopColor: '#222831',
    transform: [{ rotateZ: '-135deg' }],
  },
  secondProgressLayer: {
    width: 70,
    height: 70,
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 35,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#222831',
    borderTopColor: '#222831',
    transform: [{ rotateZ: '45deg' }],
  },
  offsetLayer: {
    width: 70,
    height: 70,
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 35,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#EEEEEE',
    borderTopColor: '#EEEEEE',
    transform: [{ rotateZ: '-135deg' }],
  },
  icon: {
    color: '#222831',
  },
});

export default CircularProgress;
