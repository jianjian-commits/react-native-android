import React from "react"
import { Text, View, Button } from "react-native"

const Detail = ({navigation}: any) => {
    return <View>
        <Text>Detail</Text>
        <Button title="进入我的" onPress={() => navigation.navigate('mine', {
            name: 'jianjian'
        })} />
    </View>
}

export default Detail