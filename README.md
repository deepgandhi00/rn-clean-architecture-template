<!-- Title -->
<h1 align="center">
  React Native Clean Architecture Template
</h1>

<p>
    The template is built using clean architecture with dependency injection and most common libraries used
</p>

<!-- Body -->

```sh
npx react-native init testTemplate --template https://github.com/deepgandhi00/rn-clean-architecture-template
```

## Library Used

- react-navigation
- axios
- inversifyjs
- reduxjs/toolkit
- inversify-react

## Folder Structure

- application (contains application level configurations)
  - di (contains dependency injection related files)
  - navigation (contains navigation related files and stack navigator configuration)
  - redux (contains redux slices and store)
  - utils (contains common styles and utility functions)
- domain (contain entities and enums for application)
- infrastructure (contain infrastructure level configuration files)
  - http (contains client and service initialization)
  - repository (contains all repositories definitions and their respective multiple implementations)
- presentation (contains screens and components)
  - hooks (contains business logics for particular screen or component similar to segmentation of view model)

## Tests

- application
  - di (contains mock dependency injection)
- repository
  - http (contains http client and services mock)
  - repository (contains test cases for sample repository)
