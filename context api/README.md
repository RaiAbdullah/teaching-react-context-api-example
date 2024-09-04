
# React Context API Example
This is a simple React app designed to teach the basics of the Context API. The application allows the user to type text into an input field, and the entered text is displayed in another component. This is achieved without passing the value through props, but rather by utilizing the Context API for state management.

## Purpose

The purpose of this project is to demonstrate how to share state between components using the Context API, avoiding the need for prop drilling. This example is particularly helpful for beginners who want to understand how Context can simplify state management across components.

## Features

- Allows the user to input a name or any text.
- Displays the input dynamically in a separate component.
- Demonstrates the use of Context API to share state across components without using props.

## Project Structure

```
src/
|-- App.js
|-- NameContext.js
|-- NameInput.js
|-- NameDisplay.js
```

- **App.js**: The main component that wraps the app with the `NameProvider`.
- **NameContext.js**: Contains the context and the context provider for managing the state.
- **NameInput.js**: A component that takes user input and updates the context state.
- **NameDisplay.js**: A component that subscribes to the context and displays the current value of the input.

## How It Works

- **NameContext**: This file exports the context and the provider that wraps around the app. The provider holds the state (`name`) and the function to update the state (`setName`).
- **NameInput**: The input field component that uses `useContext` to access the `setName` function from `NameContext` and update the `name` value as the user types.
- **NameDisplay**: This component reads the `name` value from `NameContext` and displays it on the screen dynamically as it changes.


## License

This project is open source and available under the MIT License.
