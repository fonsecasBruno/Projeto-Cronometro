import { StyleSheet, Text, View, ScroolView } from 'react-native'
import React from 'react'
import { displayTempo } from './Tempo'

function Resultado({ resultados }) {
    return (
        <ScroolView>
            <View style={styles.resultadoItem}/>
            {resultados.map((item, index) => (
                <View key={index} style={styles.resultadoItem}>
                    <Text style={styles.resultadoItemTexto}>
                        Historico { resultados.length - index }
                    </Text>

                    <Text style={styles.resultadoItemTexto}>
                        {displayTempo(item)}
                    </Text>
                </View>
            ))}
        </ScroolView>
    )
}

const styles = StyleSheet.create({
    resultadoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#313131',
        height: 50,
        paddingHorizontal: 15,
    },
    resultadoItemTexto: {
        color: '#fff'
    }
});

export default React.memo(Resultado)