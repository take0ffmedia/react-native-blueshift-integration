package com.takeoffmediareactnativeblueshiftintegration

import android.R
import com.blueshift.Blueshift
import com.blueshift.model.Configuration
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class ReactNativeBlueshiftIntegrationModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var configuration : Configuration? = null

    override fun getName(): String {
        return "ReactNativeBlueshiftIntegration"
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    fun multiply(a: Int, b: Int, promise: Promise) {
//      val configuration = Configuration()

      promise.resolve(a * b - a * 2)

    }

    @ReactMethod
    fun divide(a: Int, b: Int, promise: Promise) {

      promise.resolve(a / b)

    }

    @ReactMethod
    fun init(promise: Promise){
      configuration = Configuration()
// == Mandatory Settings ==
      configuration?.setAppIcon(R.mipmap.sym_def_app_icon)
      configuration?.setApiKey("4d7164138105a1115efc9c4358f968f3")
      Blueshift.getInstance(reactContext).initialize(configuration!!)
      promise.resolve("Configuracion Exitosa")
    }

    @ReactMethod
    fun test(promise: Promise){
      val params: HashMap<String, Any> = HashMap()
      params["name"] = "Ross Geller"
      params["profession"] = "paleontologist"
//..add more values if required..//

//..add more values if required..//
      Blueshift.getInstance(reactContext).trackEvent("your_custom_event_name", params, true)
      promise.resolve("Test Realizado")
    }

}
