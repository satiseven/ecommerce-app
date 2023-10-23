import { Box, Button, Heading, Image, Input, Text, VStack, View } from 'native-base'
import React from 'react'
import colors from '../colors'
import {MaterialIcons} from "@expo/vector-icons"


function LoginScreen() {
  return (
  <Box flex={1}  bgColor={colors.main}>
 <Image 
 flex={1}
 alt="backgourd image"
 resizeMode='cover'
 size={'lg'}
 w={'full'}
source={require("../../assets/images/login.png")}
 />
 <Box w={"full"} h="full" position={"absolute"} top={"0"} px={6} justifyContent={"center"}  >
    <Heading>Giriş</Heading>
    <VStack space={5} pt={6} > 
        
        <Input pl={1} variant={"underlined"} placeholder='riza@gokcekmarket.com' w="70%" color={colors.main}
        InputLeftElement={<MaterialIcons name='email' size={24} color={colors.main} />} />

        <Input pl={1} type='password' variant={"underlined"} w="70%" placeholder='********' color={colors.main}
        InputLeftElement={<MaterialIcons name='lock' size={24} color={colors.main} />} />
<Button m={30} w="40%" rounded={50} bg={colors.main} >
    Giriş
</Button>

    </VStack>
 </Box>
  </Box>
    )
}

export default LoginScreen