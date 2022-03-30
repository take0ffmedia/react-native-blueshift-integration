/* eslint-disable prettier/prettier */
import { NativeModules } from 'react-native';

type ReactNativeBlueshiftIntegrationType = {
  multiply(a: number, b: number): Promise<number>;
  configurate(): Promise<string>;
  init(): Promise<string>;
  test(): Promise<string>;
  clickonbuy(): Promise<string>;
  setUserInfoEmailId(a: string): any;
  UserItsCool(a: string, b: any, c: boolean): any;
  setUserInfoCustomerId(a: string): any;
};

const { ReactNativeBlueshiftIntegration } = NativeModules;

export default ReactNativeBlueshiftIntegration as ReactNativeBlueshiftIntegrationType;
