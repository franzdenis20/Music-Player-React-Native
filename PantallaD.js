// PantallaB.js
import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

const PantallaD = ({ route, navigation }) => {
  // Obtener el nombre pasado desde PantallaA
  const { nombre,apellido,carrera } = route.params;

  const [edad,setEdad] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Introduce su Edad:</Text>
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
        value={edad}
        onChangeText={(text) => setEdad(text)}
      />
      
      <Button
        title="Ir a Pantalla D"
        onPress={() => navigation.navigate('PantallaE', {nombre, apellido,carrera,edad })}
      />
    </View>
  );
};

export default PantallaD;

