import { NativeModules } from 'react-native';

type ReactNativeBlueshiftIntegrationType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ReactNativeBlueshiftIntegration } = NativeModules;

export default ReactNativeBlueshiftIntegration as ReactNativeBlueshiftIntegrationType;
