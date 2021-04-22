import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}>
        <Text style={styles.text}>Đăng nhập</Text>
        <View style={styles.divider} />
        <Text style={styles.enterPassSuggest}>Nhập số điện thoại</Text>
        <Text style={styles.enterPassDescription}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="number-pad"
        />
        <View style={styles.fakeView} />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Đăng nhập</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    margin: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  enterPassSuggest: {
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
    margin: 16,
    marginTop: 48,
  },
  enterPassDescription: {
    color: 'gray',
    fontSize: 14,
    marginHorizontal: 16,
  },
  textInput: {
    height: 40,
    marginHorizontal: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  fakeView: {
    flex: 1,
  },
  buttonContainer: {
    height: 48,
    margin: 16,
    backgroundColor: '#EEF0F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    color: 'gray',
  },
});

export default LoginScreen;
