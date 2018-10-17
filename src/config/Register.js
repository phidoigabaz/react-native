import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import Login from '../screen/Login/Login';

export function registerScreens() {
  const screensArray = [
    {
      key: 'Login',
      value: Login
    },
  ];
//   screensArray.forEach(function(item, index) {
//     console.log(item, index);
//     Navigation.registerComponent(item.key, () => item.value);
//   });
  Navigation.registerComponent('Login', () => Login);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        "screenVisibility",
        `Screen ${screen} displayed in ${endTime -
          startTime} millis [${commandType}]`
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
