import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/Android_Large.png')}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button1}
        color={'#FF0000'}
        onPress={() => Alert.alert('페이지 이동!')}>
        <Text style={styles.button1Text}>라이더 정보 입력</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => Alert.alert('페이지 이동!')}>
        <Text style={styles.button2Text}>기기 설정</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button3}
        onPress={() => Alert.alert('페이지 이동!')}>
        <Text style={styles.button2Text}>기기 연결</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    marginTop: 10,
    marginBottom: 10,
    width: 231,
    height: 58,
    borderRadius: 10,
    backgroundColor: '#FF0000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,

    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#000000',
    elevation: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    marginTop: 10,
    marginBottom: 10,
    width: 231,
    height: 58,
    borderRadius: 10,
    backgroundColor: '#F4DDDC',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,

    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#000000',
    elevation: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  button3: {
    marginTop: 10,
    marginBottom: 10,
    width: 231,
    height: 58,
    borderRadius: 10,
    backgroundColor: '#8AD6AA',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,

    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#000000',
    elevation: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  button1Text: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
  button2Text: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#000000',
  },
  image: {
    height: 100,
    marginBottom: 200,
  },
});

export default Main;
