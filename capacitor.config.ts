import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.animalisland.notepad',
  appName: '动森记事本',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#fdf8f0',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    }
  }
};

export default config;
