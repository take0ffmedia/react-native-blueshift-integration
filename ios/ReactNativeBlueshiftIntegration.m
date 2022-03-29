#import <React/RCTBridgeModule.h>
#import <BlueShift-iOS-SDK/BlueShift.h>

@interface RCT_EXTERN_MODULE(ReactNativeBlueshiftIntegration, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(configurate)

@end
