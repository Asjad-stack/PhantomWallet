# CoreWallet Project Structure

## 📁 Project Overview

```
coreWallet/
├── src/
│   ├── navigation/
│   │   ├── AppNavigator.tsx      # Main stack navigator
│   │   └── BottomTabNavigator.tsx # Bottom tab navigator
│   └── screens/
│       ├── SplashScreen.tsx      # 3-second splash with auto navigation
│       ├── OnboardingScreen.tsx  # Create/Import wallet options
│       ├── PinScreen.tsx         # 6-digit PIN creation
│       ├── ConfirmPinScreen.tsx  # PIN confirmation
│       ├── BiometricPopup.tsx    # Fingerprint/Face ID setup
│       ├── HomeScreen.tsx        # Main dashboard
│       ├── DappBrowserScreen.tsx # Web3 browser
│       ├── HistoryScreen.tsx     # Transaction history
│       └── AccountsScreen.tsx    # Account management
├── App.tsx                       # Main app entry point
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🔄 Navigation Flow

1. **Splash Screen** (3 seconds) → **Onboarding Screen**
2. **Onboarding Screen** → **PIN Screen** (Create/Import Wallet)
3. **PIN Screen** → **Confirm PIN Screen**
4. **Confirm PIN Screen** → **Biometric Popup**
5. **Biometric Popup** → **Main App** (Bottom Tab Navigation)

## 📱 Main App Screens

- **Home Screen**: Main wallet dashboard
- **DApp Browser**: Web3 browser for decentralized applications
- **History Screen**: Transaction history
- **Accounts Screen**: Account management

## 🛠️ Technologies Used

- **React Native 0.81.4**
- **React Navigation 6.x**
  - Stack Navigator
  - Bottom Tab Navigator
- **TypeScript**
- **Expo Vector Icons** (Ionicons)
- **React Native Gesture Handler**
- **React Native Safe Area Context**
- **React Native Screens**

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install iOS dependencies:
   ```bash
   cd ios && pod install
   ```

3. Run the app:
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

## 📋 Features Implemented

✅ Splash Screen with 3-second timer  
✅ Onboarding Screen with Create/Import wallet buttons  
✅ PIN creation and confirmation screens  
✅ Biometric authentication popup  
✅ Bottom tab navigation with 4 screens  
✅ Complete stack navigation flow  
✅ TypeScript support  
✅ Proper project structure  

## 🎯 Next Steps

The basic wallet structure is complete. Future enhancements could include:
- Actual wallet functionality
- Crypto currency integration
- Transaction management
- DApp browser implementation
- Security enhancements
- Biometric authentication integration

