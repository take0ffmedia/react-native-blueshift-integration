import { NativeModules } from 'react-native';

type BlueshiftIntegrationType = {
  multiply(a: number, b: number): Promise<number>;
};

const { BlueshiftIntegration } = NativeModules;

export default BlueshiftIntegration as BlueshiftIntegrationType;
// cmbio de prueba
