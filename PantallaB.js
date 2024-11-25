// PantallaB.js
import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

const PantallaB = ({ route, navigation }) => {
  // Obtener el nombre pasado desde PantallaA
  const { nombre } = route.params;

  const [apellido,setApellido] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Introduce tu apellido:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginVertical: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Escribe tu apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />
      
      <Button
        title="Ir a Pantalla C"
        onPress={() => navigation.navigate('PantallaC', {nombre, apellido })}
      />
    </View>
  );
};

export default PantallaB;

