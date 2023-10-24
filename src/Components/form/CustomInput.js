import {Box, Input, Text, View} from 'native-base'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons"
function CustomInput() {
    return (
    <Box flex={1} w={"full"}>
        <Input type={"text"} leftElement={<MaterialIcons name="alternate-email" size={24} color="black" /> }
              width={"60%"}
               />
    </Box>
    )
}
export default CustomInput
