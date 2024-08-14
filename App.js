import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.headContainer}>

      <View style={styles.loginRightSide}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginDetail}>Get Started with IMS Portal</Text>
          <Text style={styles.loginQuote}>Your Tools for Better Health</Text>
          <View style={styles.loginForm}>
            <View style={styles.loginInputGroup}>
              <Text>Email address:</Text>
              <TextInput
                style={styles.loginInput}
                value={email}
                placeholder='Enter email address'
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                required
              />
            </View>

            <View style={styles.loginInputGroup}>
              <Text>Password:</Text>
              <View style={styles.loginPasswordInputWrapper}>
                <TextInput
                  style={styles.loginInput}
                  value={password}
                  placeholder='Enter password'
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                  required
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.loginButton} >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  loginLeftSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginRightSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  loginImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  loginLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  loginDetail: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  loginQuote: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
  },
  loginForm: {
    width: '100%',
    marginTop: 20,
  },
  loginInputGroup: {
    marginBottom: 20,
  },
  loginInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  loginPasswordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginPasswordToggleIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginPage;
