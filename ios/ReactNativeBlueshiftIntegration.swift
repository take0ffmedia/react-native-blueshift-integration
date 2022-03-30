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


    @objc func setUserInfoEmailId(_ emailId: String) {
    BlueShiftUserInfo.sharedInstance()?.email = emailId
    BlueShiftUserInfo.sharedInstance()?.save()
  }

    @objc func UserItsCool(_ eventName: String, details: Dictionary<AnyHashable, Any> ,canBatchThisEvent: Bool) {
      BlueShift.sharedInstance()?.trackEvent(forEventName: eventName, andParameters: details, canBatchThisEvent: canBatchThisEvent)
  }

    @objc func setUserInfoCustomerId(_ customerId: String) {
    BlueShiftUserInfo.sharedInstance()?.retailerCustomerID = customerId
    BlueShiftUserInfo.sharedInstance()?.save()
  }
}
