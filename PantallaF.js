import React from 'react'
import { Button, Text, View } from 'react-native'

const PantallaF = ({route,navigation}) => {

    const{nombre, apellido,carrera,edad,uni} = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hola Tus datos Son:</Text>
        <Text>Nombre: {nombre}</Text>
        <Text>Apellido: {apellido}</Text>
        <Text>Edad: {edad}</Text>
        <Text>Carrera: {carrera}</Text>
        <Text>Universidad: {uni}</Text>

        <Button
        title="Volver "
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default PantallaF
