import { NativeModules } from 'react-native';

type CustomKeyboardType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CustomKeyboard } = NativeModules;

export default CustomKeyboard as CustomKeyboardType;
