import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, 
        SafeAreaView, Button,
        Pressable} from 'react-native';

const Counter = ({title}) => {
    const[num, setNum] = useState(0);

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.count}>{num}</Text>

            <Pressable 
            onPress={()=>setNum(num+1)}
            onLongPress={()=>setNum(0)}>
                <Text style={styles.incrementButton}>
                    Plus one!
                </Text>
            </Pressable>

            <Pressable
            onPress={()=>setNum(num-1)}
            onLongPress={()=>setNum(0)}>
                <Text style={styles.decrementButton}>
                    Minus one!
                </Text>
            </Pressable>

        </SafeAreaView>
    );
}; Counter.defaultProps = {title: "Current count:"}

const styles = StyleSheet.create({
    container: {
        top: 60,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        bottom: 24,
    },
    count: {
        fontSize: 96,
        color: '#000',
        textAlign: 'center',
        bottom: 12,
    },
    incrementButton: {
        paddingTop: 8,
        paddingBottom: 16,
        fontSize: 24,
        color: 'green',
        textAlign: 'center'
    },
    decrementButton: {
        paddingBottom: 8,
        fontSize: 24,
        color: '#f00',
        textAlign: 'center'
    }
});

export default Counter;