# learn-reactnative

## コマンド一覧

### ReactNative + TypeScript プロジェクトの作成

```bash
npx create-expo-app -t expo-template-blank-typescript
```

### Prettier + ESLint の導入

```bash
yarn add -D eslint-config-universe

yarn add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### React Navigation

```bash
yarn add @react-navigation/native

# expo installをすると、プロジェクトにあったバージョンのパッケージがインストールされる
expo install react-native-screens react-native-safe-area-context

yarn add @react-navigation/native-stack @react-navigation/stack

expo install react-native-svg
```
