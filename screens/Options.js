import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import DetailListItem from '../components/DetailListItem'; 
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import i18n from '../i18n';

const Options = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Thay đổi ngôn ngữ */}
      <DetailListItem 
        title={t('change_language') || 'Default Title'} 
        onPress={() => {
          Alert.alert(
            t('select_language'), 
            t('choose_language'),
            [
              {
                text: 'English',
                onPress: () => i18n.changeLanguage('en'),
              },
              {
                text: 'Tiếng Việt',
                onPress: () => i18n.changeLanguage('vi'),
              },
            ]
          );
        }}
        icon={<MaterialIcons name="Add" size={24} color="black" />}  // Icon cho phần đổi ngôn ngữ
      />

      {/* Đăng ký */}
      <DetailListItem 
        title={t('sign_up') || 'Sign Up'}
        onPress={() => navigation.navigate('SignUp')}  // Điều hướng đến màn hình đăng ký
        icon={<MaterialIcons name="person-add" size={24} color="black" />}  // Icon cho phần đăng ký
      />

      {/* Đăng nhập */}
      <DetailListItem 
        title={t('log_in') || 'Log In'} 
        onPress={() => navigation.navigate('Login')}  // Điều hướng đến màn hình đăng nhập
        icon={<MaterialIcons name="login" size={24} color="black" />}  // Icon cho phần đăng nhập
      />

      {/* Đăng xuất */}
      <DetailListItem 
        title={t('sign_out') || 'Sign Out'} 
        onPress={() => Alert.alert(t('logged_out'), t('you_have_signed_out'))}  // Đăng xuất
        icon={<MaterialIcons name="logout" size={24} color="black" />}  // Icon cho phần đăng xuất
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Options;
