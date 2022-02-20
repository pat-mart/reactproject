import React from 'react';
import { SafeAreaView , Text, StyleSheet} from 'react-native';

const Header = ({title, subtitle}) => {
    return(
        <SafeAreaView style={styles.header}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </SafeAreaView>
    );
};
Header.defaultProps = {
    title: "Hello, World!", subtitle: "(Long press button to reset count)"
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#ff695e'
    },
    text: {
        paddingTop: 8,
        textAlign: 'center',
        fontSize: 32,
        color: '#fff'
    },
    subtitle: {
        paddingTop: 24,
        textAlign: 'center',
        fontSize: 12,
        color: 'gray'
    }
});

export default Header; 