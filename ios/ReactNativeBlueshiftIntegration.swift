import BlueShift_iOS_SDK
@objc(ReactNativeBlueshiftIntegration)
class ReactNativeBlueshiftIntegration: NSObject {
    var config = BlueShiftConfig();

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }

    @objc func configurate() {
        config.apiKey = "4d7164138105a1115efc9c4358f968f3";
        BlueShift.initWithConfiguration(config);
    }
}
