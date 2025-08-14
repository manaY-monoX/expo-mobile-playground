# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native + Expo mobile app testing playground designed to verify real device testing capabilities. The app displays a "Hello World" interface with cosmic-themed styling and serves as a foundation for mobile development.

**Core Technology Stack:**
- React Native 0.79.5 with Expo SDK ~53.0.20
- TypeScript ~5.8.3 (strict mode, no `any` types allowed)
- Hermes JavaScript engine (explicitly enabled)
- New Architecture enabled
- expo-dev-client included for development builds

## Essential Development Commands

### Daily Development
```bash
# Start development server (most common)
npm start

# For Expo Go specifically (when expo-dev-client interferes)
npx expo start --go

# For development builds
npm run dev

# TypeScript type checking (run before commits)
npm run type-check

# Reset when things break
npm run reset
```

### Device Testing
```bash
# Critical: Use --go flag to avoid expo-dev-client interference
npx expo start --go

# For network issues or VPN interference
npx expo start --go --tunnel

# Platform-specific testing
npm run android  # or ios, web
```

### Build & Export
```bash
# Production build for all platforms
npm run build

# Platform-specific builds
npm run build:android  # or :ios, :web
```

## Architecture & Key Files

### Core Structure
- **`App.tsx`**: Main application component with cosmic-themed "Hello World" display
- **`app.json`**: Expo configuration with Hermes engine and New Architecture enabled
- **`index.ts`**: Entry point using Expo's registerRootComponent
- **`.cursor/rules/general.mdc`**: Comprehensive project development rules and conventions

### Critical Configuration
- **Hermes Engine**: Explicitly enabled in `app.json` for performance optimization
- **Bundle Identifiers**: Unified as "expo-mobile-playground" across all platforms
- **TypeScript**: Strict mode enforced, `any` types prohibited
- **Styling**: Cosmic dark theme (#1a0040 background) with glow effects using StyleSheet

### Real Device Testing Focus
The app includes extensive device testing documentation and troubleshooting:
- Expo Go integration (primary testing method)
- Development build support via expo-dev-client
- Network configuration for various environments (WiFi, tunnel mode)
- Platform-specific setup instructions for iOS/Android

## Development Rules & Conventions

### Code Quality Requirements
- **TypeScript**: 100% coverage, no `any` types allowed
- **Components**: Function components + Hooks pattern only
- **Styling**: StyleSheet-based, React Native compatible styles only
- **Performance**: Hermes engine must remain enabled

### Prohibited Actions
- Disabling Hermes engine
- Using `any` types
- Skipping TypeScript type checks
- Using Expo Go in production
- Modifying security settings

### Testing Requirements
- Real device testing mandatory for all changes
- Both iOS (13.0+) and Android (6.0+) verification
- Network connectivity testing across different environments
- Performance validation with Hermes engine

## Special Considerations

### Device Testing Workflow
1. Always run `npm run type-check` before testing
2. Use `npx expo start --go` if expo-dev-client interferes with Expo Go
3. Use `expo start --tunnel` for network issues or VPN environments
4. Follow the detailed testing procedures in `README.md` or `DEVICE_TESTING_MANUAL.md`

### Project Naming Consistency
All references should use "expo-mobile-playground" (not "mobile-expo-playground"):
- package.json name
- app.json name/slug
- bundle identifiers
- documentation references

### Common Troubleshooting
- **Metro bundler errors**: Run `npm run reset`
- **Device connection issues**: Try `npx expo start --go --tunnel`
- **TypeScript errors**: Run `npm run type-check` and fix before proceeding
- **iOS "No usable data found" QR error**: Use `npx expo start --go --tunnel` (expo-dev-client creates incompatible URLs)
- **Wrong URL format**: Ensure URLs start with `exp://` not `exp+devclient://`

This project serves as a testing ground for React Native mobile development workflows and real device testing capabilities using modern Expo tooling.