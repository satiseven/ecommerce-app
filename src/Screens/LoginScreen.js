import {Box, Button, Heading, Image, Input, Text, VStack, View, Center} from 'native-base'
import React from 'react'
import colors from '../colors'
import {MaterialIcons} from "@expo/vector-icons"
import CustomInput from "../Components/form/CustomInput";


function LoginScreen() {
    return (

            <VStack space={4}
                    bgColor={colors.primary} w={"full"} height={"full"} >
                <Box flex={3}  justifyItems={"center"} alignItems={"center"}
                >
                    <Image height={"150px"} source={require("../../assets/images/logo.png")}
                           w={"200px"} marginTop={"10%"}
                           shadow={30}
                    />
                </Box>
                <Box flex={1} alignItems={"center"}>
                    <Text color={colors.white}>Giriş Yap</Text>
                </Box>
                <Box alignItems={"center"} flex={7}>
                    <CustomInput/>

                </Box>
                {/* <Box w={"full"} h="full" position={"absolute"} top={"0"} px={6} justifyContent={"center"}>*/}
                {/*     <Heading>Giriş</Heading>*/}
                {/*     <VStack space={5} pt={6}>*/}

                {/*         <Input pl={1} variant={"underlined"} placeholder='riza@gokcekmarket.com' w="70%" color={colors.main}*/}
                {/*                InputLeftElement={<MaterialIcons name='email' size={24} color={colors.main}/>}/>*/}

                {/*         <Input pl={1} type='password' variant={"underlined"} w="70%" placeholder='********'*/}
                {/*                color={colors.main}*/}
                {/*                InputLeftElement={<MaterialIcons name='lock' size={24} color={colors.main}/>}/>*/}
                {/*         <Button m={30} w="40%" rounded={50} bg={colors.main}>*/}
                {/*             Giriş*/}
                {/*         </Button>*/}

                {/*     </VStack>*/}
                {/*</Box>*/}
            </VStack>


    )
}

export default LoginScreen