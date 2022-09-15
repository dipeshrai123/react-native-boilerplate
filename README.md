# RN App Development

> Setup guide + Documentation

## Development Environment

- Node Version: 16.16.0
- NPM Version: 8.15.0
- JDK Version: 11.0.15

Make sure you have following dependencies installed in Android Studio:

- `Android SDK Platform 31` _[ Android 12 (s) ]_
- `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`

## Installation

After all the setup you can install the dependencies

```bash
npm install
```

## Run
After the installation you can run the project by:

```bash
npm run android

#or

npm run ios
```

## Components

### VStack

It can be imported from `@src/commons`. It is used to stack the childrens vertically with default gap in between the childrens.

Usage:

```tsx
<VStack>
  <View>
    <Text>Child One</Text>
  </View>

  <View>
    <Text>Child Two</Text>
  </View>
</VStack>
```

You can specify the gap size by passing `gap={number}` prop in `VStack` component.

### HStack

It can be imported from `@src/commons`. It is used to stack the childrens horizontally with default gap in between the childrens.

Usage:

```tsx
<HStack>
  <View>
    <Text>Child One</Text>
  </View>

  <View>
    <Text>Child Two</Text>
  </View>
</HStack>
```

You can specify the gap size by passing `gap={number}` prop in `HStack` component.

And if we want one child to occupy the available space then we can style the child with `flex: 1`.

```tsx
<HStack>
  <View style={{flex: 1}}>
    <Text>Child One</Text>
  </View>

  <View>
    <Text>Child Two</Text>
  </View>
</HStack>
```

## Contributions

If you would like to contribute to this project, please create a pull request and send it.
