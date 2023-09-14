import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

function Controle({ rodando, botaoEsquerdoP, botaoDireitoP }){
    return (
        <>
            <TouchableOpacity
            style={[
                styles.controleBotao,
                {backgroundColor: rodando ? '#333333' : '#1c1c1e'},
            ]}
            onPress={botaoDireitoP}
            >
                <View style={styles.bordaBotao}>
                    <Text style={{color: rodando ? '#fff' : '#9d9ca2'}}>
                        {rodando ? "Historico" : "Resetar"}
                    </Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity
            style={[
                styles.controleBotao,
                {backgroundColor: rodando ? '#340e0d' : '#0a2a12'},
            ]}
            onPress={botaoEsquerdoP}
            >
                <View style={styles.bordaBotao}>
                    <Text style={{color: rodando ? '#ea4c48' : '#37d05c'}}>
                        {rodando ? 'Parar' : 'Iniciar'}
                    </Text>
                </View>

            </TouchableOpacity>

        </>
    )
}

const CENTER = {
    justifyContent : 'center',
    alignItems : 'center',
};

const styles = StyleSheet.create({
    controleBotao: {
        ...CENTER,
        width: 70,
        height: 70,
        borderRadius: 70,
    },
    bordaBotao: {
        ...CENTER,
        width: 65,
        height: 65,
        borderRadius: 65,
        borderColor: '#000',
        borderWidth: 1,
    }
})

export default React.memo(Controle)