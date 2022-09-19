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

## Reseting Cache

`.env` files are cached and when changing the `.env` file variables it wouldn't update. We have to run the script to reset the chache.

```bash
npm start -- --reset-cache
```

## Contributions

If you would like to contribute to this project, please create a pull request and send it.
