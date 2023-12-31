/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import RootComponent from './root-component';
import {ThemeProvider} from '@rneui/themed';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const App = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <ApolloProvider client={client}>
          <RootComponent />
        </ApolloProvider>
      </NavigationContainer>
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
