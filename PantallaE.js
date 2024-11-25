// PantallaB.js
import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

const PantallaE = ({ route, navigation }) => {
  // Obtener el nombre pasado desde PantallaA
  const { nombre,apellido,carrera,edad } = route.params;

  const [uni,setUni] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Introduce tu Universidad:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginVertical: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Escribe tu u"
        value={uni}
        onChangeText={(text) => setUni(text)}
      />
      
      <Button
        title="Ir a Pantalla F"
        onPress={() => navigation.navigate('PantallaF', {nombre, apellido,carrera,edad ,uni})}
      />
    </View>
  );
};

export default PantallaE;

