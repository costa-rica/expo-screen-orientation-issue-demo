# expo-screen-orientation-issue-demo

ScreenOrientation.addOrientationChangeListener() Freezes iOS Devices in Expo SDK 52

![gif demo](./docs/orientationIssue.gif)

## Summary of issue

The ScreenOrientation.addOrientationChangeListener() method in the SDK 52 expo-screen-orientation module does not work on iOS devices. While the implementation functions as expected on Android, it fails to respond on iOS. Additionally, switching the orientation to landscape causes the iOS emulator or physical device (e.g., iPhone 13 mini) to freeze.

I have implemented this with a screen containing two buttons:

1. One button unlocks the device orientation using ScreenOrientation.unlockAsync().
2. The second button activates ScreenOrientation.addOrientationChangeListener().

As demonstrated in the video linked in my GitHub repo’s README, this setup works on Android. However, on iOS, the second button fails to activate the listener, and switching orientation results in freezing.

I tested this with various configurations in app.json (e.g., "orientation": "portrait", "default", "ALL", "DEFAULT") but encountered the same issue consistently.

## app.js

### expo > orientation

`"orientation": "portrait",`

### expo > ios

```json
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "UISupportedInterfaceOrientations": [
          "UIInterfaceOrientationPortrait",
          "UIInterfaceOrientationLandscapeLeft",
          "UIInterfaceOrientationLandscapeRight"
        ]
      }
    },
```

## Similar issue

1. Similar issue with workaround suggestion using `ScreenOrientation.unlockAsync();` and `"orientation": "portrait",` that doesn't work for me

   - [https://github.com/expo/expo/issues/23368](https://github.com/expo/expo/issues/23368)

2. Exact same issue in older sdk
   - [https://github.com/expo/expo/issues/233730](https://github.com/expo/expo/issues/233730)
