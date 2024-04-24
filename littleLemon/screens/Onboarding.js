// screens/Onboarding.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const Onboarding = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleNextPress = () => {
    // Logic to navigate to the next screen
    // This will be implemented later when you set up navigation
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Little Lemon</Text>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <Button
        title="Next"
        disabled={!firstName || !email || !validateEmail(email)}
        onPress={handleNextPress}
      />
    </View>
  );
};

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Onboarding;
