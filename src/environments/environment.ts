// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false
};


export const firebaseConfig = {
  apiKey: "AIzaSyDp2IuNXfSuf1ws-2i_VgiAROLq-FT_CUE",
  authDomain: "simulator-19564.firebaseapp.com",
  databaseURL: "https://simulator-19564-default-rtdb.firebaseio.com",
  projectId: "simulator-19564",
  storageBucket: "simulator-19564.appspot.com",
  messagingSenderId: "778604917656",
  appId: "1:778604917656:web:3afd9c866d10ca1e98f1ed",
  measurementId: "G-NE22NN9S0H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
