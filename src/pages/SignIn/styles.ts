import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 30%;
  resize-mode: cover;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 24px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #f4ede8;
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f4ede8;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

export const CreateAccountText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #ff9000;
  margin-left: 16px;
`;
