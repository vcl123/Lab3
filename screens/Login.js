import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

const Login = ({ navigation }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic xử lý đăng nhập
    Alert.alert(t('login_success'), t('welcome_back'));
    navigation.navigate('User'); // Điều hướng về màn hình User sau khi đăng nhập thành công
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('username')}:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder={t('enter_username')}
      />
      <Text style={styles.label}>{t('password')}:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder={t('enter_password')}
        secureTextEntry
      />
      <Button title={t('log_in')} onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default Login;
