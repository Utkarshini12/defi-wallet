import React, {useContext} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {DrawerContext} from '../../context';
const Actions = () => {
  const {toggleDrawer} = useContext(DrawerContext);

  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          toggleDrawer(true, {
            title: 'Buy ',
            content: (
              <Text style={styles.buttonText}>
                Buy any cryptocurrency and earn yield!
              </Text>
            ),
          })
        }>
        <Image source={require('../../assets/cc.png')} />
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          toggleDrawer(true, {
            title: 'Deposit',
            content: (
              <Text style={styles.buttonText}>
                Deposit any cryptocurrency and earn yield!
              </Text>
            ),
          })
        }>
        <Image source={require('../../assets/deposit.png')} />
        <Text style={styles.buttonText}>Deposit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() =>
          toggleDrawer(true, {
            title: 'Swap',
            content: (
              <Text style={styles.buttonText}>
                Swap your assets wherever you want!
              </Text>
            ),
          })
        }>
        <Image source={require('../../assets/swap.png')} />
        <Text style={styles.buttonText}>Swap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() =>
          toggleDrawer(true, {
            title: 'Withdraw',
            content: (
              <Text style={styles.buttonText}>
                instant withdrawals now available!
              </Text>
            ),
          })
        }>
        <Image source={require('../../assets/withdraw.png')} />
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Actions;
