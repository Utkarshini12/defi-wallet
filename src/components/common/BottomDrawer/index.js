// src/components/BottomDrawer.js
import React, { useRef, useEffect } from 'react';
import { Animated, PanResponder, StyleSheet, View, Dimensions, Text } from 'react-native';
import {styles} from './styles'
const { height } = Dimensions.get('window');

const BottomDrawer = ({ visible, toggleDrawer, title, content }) => {
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
    if (visible) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [visible]);


  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateY }] }]}
      {...panResponder.panHandlers}
    >
      <View style={styles.drawerContent}>
        <View style={styles.bar}></View>
        <Text style={styles.drawerTitle}>{title}</Text>
        <View style={styles.content}>
            {content}
          </View>

          
      </View>
    </Animated.View>
  );
};


export default BottomDrawer;
