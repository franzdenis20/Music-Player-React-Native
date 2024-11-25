// PantallaA.js
import React, { useState } from 'react';
import { View, Button, TextInput, Text } from 'react-native';

const PantallaA = ({ navigation }) => {
  const [nombre, setNombre] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Introduce tu nombre:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginVertical: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Button
        title="Ir a Pantalla B"
        onPress={() => navigation.navigate('PantallaB', { nombre })}
      />
    </View>
  );
};

export default PantallaA;

