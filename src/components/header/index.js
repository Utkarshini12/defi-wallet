import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import BottomDrawer from '../common/BottomDrawer';
import {DrawerContext} from '../../context';

const Header = () => {
  const {toggleDrawer, amount} = useContext(DrawerContext);
  const formatDate = () => {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    return `${dayName}, ${monthName} ${day}, ${hours}:${minutes}`;
  };
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.walletBalance}>Wallet Balance</Text>
          <TouchableOpacity
            style={styles.notificationsContainer}
            onPress={() =>
              toggleDrawer(true, {
                title: 'Notifications',
                content: <Text style={styles.buttonText}>Notifications Drawer Content</Text>,
              })
            }>
            <Image
              source={require('../../assets/Bell.png')}
              alt="bell"
              style={styles.icon}
            />
            <Text style={styles.notifications}>Notifications</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.balanceAmount}><Text style={styles.sup}>${' '}</Text>{amount.toFixed(2)}</Text>
        <Text style={styles.balanceChange}>+12%{' '} <Text style={styles.date}>{formatDate(Date.now())}</Text></Text>
      </View>
    </View>
  );
};

export default Header;
