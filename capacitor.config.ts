import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jeep.app.ionic.angular',
  appName: 'angular-sqlite-app-starter',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorSQLite: {
      iosKeychainPrefix: 'angular-sqlite-app-starter',
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      electronDatabaseLocation: './CapacitorDatabase',
      iosBiometric: {
        biometricAuth: true,
        biometricTitle : "Biometric login for capacitor sqlite"
        },
      androidBiometric: {
        biometricAuth : true,
        biometricTitle : "Biometric login for capacitor sqlite",
        biometricSubTitle : "Log in using your biometric"
      }
    }
  }
};

export default config;
/*

*/