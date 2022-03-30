#import <React/RCTBridgeModule.h>
#import <BlueShift-iOS-SDK/BlueShift.h>

@interface RCT_EXTERN_MODULE(ReactNativeBlueshiftIntegration, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(configurate)
RCT_EXTERN_METHOD(setUserInfoEmailId:(NSString *)emailId)
RCT_EXTERN_METHOD(UserItsCool:(NSString *)eventName details:(NSDictionary *) details canBatchThisEvent:(BOOL)canBatchThisEvent)
RCT_EXTERN_METHOD(setUserInfoCustomerId:(NSString *)customerId)


@end
