// PantallaB.js
import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

const PantallaC = ({ route, navigation }) => {
  // Obtener el nombre pasado desde PantallaA
  const { nombre,apellido } = route.params;

  const [carrera,setCarrera] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Introduce su Carrera:</Text>
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
        value={carrera}
        onChangeText={(text) => setCarrera(text)}
      />
      
      <Button
        title="Ir a Pantalla D"
        onPress={() => navigation.navigate('PantallaD', {nombre, apellido,carrera })}
      />
    </View>
  );
};

export default PantallaC;

