/* eslint-disable prettier/prettier */
import { NativeModules } from 'react-native';

type ReactNativeBlueshiftIntegrationType = {
  multiply(a: number, b: number): Promise<number>;
  init():Promise<string>;
  test():Promise<string>;
};

const { ReactNativeBlueshiftIntegration } = NativeModules;

export default ReactNativeBlueshiftIntegration as ReactNativeBlueshiftIntegrationType;
