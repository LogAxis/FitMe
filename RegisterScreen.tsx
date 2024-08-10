import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from './RootNavigator';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    dateOfBirth: Yup.date().required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const handleRegister = async (values: {
    name: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
        console.log('Registering user with values:', values);
      const res = await axios.post('http://10.0.0.6:5000/api/auth/register', values);
      console.log('Registration response:', res.data);
      // Store token and navigate to Home
      navigation.navigate('Home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          dateOfBirth: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <Text style={styles.error}>{errors.name}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Surname"
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
            />
            {errors.surname && touched.surname ? (
              <Text style={styles.error}>{errors.surname}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && touched.email ? (
              <Text style={styles.error}>{errors.email}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Date of Birth (YYYY-MM-DD)"
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              value={values.dateOfBirth}
              autoCapitalize="none"
            />
            {errors.dateOfBirth && touched.dateOfBirth ? (
              <Text style={styles.error}>{errors.dateOfBirth}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              autoCapitalize="none"
            />
            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              autoCapitalize="none"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            ) : null}
            <Button onPress={handleSubmit as any} title="Register" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default RegisterScreen;
