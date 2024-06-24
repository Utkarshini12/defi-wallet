// src/components/BottomDrawer.js
import React, { useRef, useEffect, useState } from 'react';
import { Animated, PanResponder, StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import {styles} from '../BottomDrawer/styles'
const { height } = Dimensions.get('window');

const FilterDrawer = ({ filterOption }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const toggleDrawer = () => {
    setIsDrawerVisible(true);
  
  };
  const translateY = useRef(new Animated.Value(height)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dy: translateY }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > height / 4) {
          closeDrawer();
        } else {
          openDrawer();
        }
      }
    })
  ).current;

  const openDrawer = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.spring(translateY, {
      toValue: height,
      useNativeDriver: true,
    }).start(() => toggleDrawer(false));
  };

  useEffect(() => {
    if (isDrawerVisible) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [isDrawerVisible]);


  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateY }] }]}
      {...panResponder.panHandlers}
    >
      <View style={styles.drawerContent}>
        <View style={styles.bar}></View>
        <Text style={styles.drawerTitle}>Sort By</Text>
        <View>
        <TouchableOpacity
          style={styles.filterContainers}
          onPress={() => handleFilterSelect('value')}
        >
          <View style={styles.coinContainer}>
            <Image source={require('../../../assets/value.png')} />
            <Text style={styles.filterValueText}>Value</Text>
          </View>
          {filterOption === 'value' ? (
            <Image source={require('../../../assets/Checkbox.png')} />
          ) : (
            <Image source={require('../../../assets/uncheck.png')} />
          )}
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.filterContainers}
          onPress={() => handleFilterSelect('asc')}
        >
          <View style={styles.coinContainer}>
            <Image source={require('../../../assets/asc.png')} />
            <Text style={styles.filterValueText}>A-Z</Text>
          </View>
          {filterOption === 'asc' ? (
            <Image source={require('../../../assets/Checkbox.png')} />
          ) : (
            <Image source={require('../../../assets/uncheck.png')} />
          )}
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.filterContainers}
          onPress={() => handleFilterSelect('dsc')}
        >
          <View style={styles.coinContainer}>
            <Image source={require('../../../assets/asc.png')} />
            <Text style={styles.filterValueText}>Z-A</Text>
          </View>
          {filterOption === 'dsc' ? (
            <Image source={require('../../../assets/Checkbox.png')} />
          ) : (
            <Image source={require('../../../assets/uncheck.png')} />
          )}
        </TouchableOpacity>
      </View>
      </View>
    </Animated.View>
  );
};


export default FilterDrawer;
