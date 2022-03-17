import React from "react"
import { Text, View, Button } from "react-native"

const Home = ({navigation}: any) => {
    return <View>
        <Text>home</Text>
        <Button title="进入列表" onPress={() => navigation.navigate('list', {
            name: 'jianjian'
        })} />
    </View>
}

export default Home