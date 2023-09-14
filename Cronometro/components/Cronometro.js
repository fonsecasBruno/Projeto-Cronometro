import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Resultado from "./Historico";
import Controle from "./Controle";
import { displayTempo } from "./Tempo";
import Cabecalho from "./Cabecalho";
import Historico from "./Historico";

export default function Cronometro() {
    const [tempo, setTempo] = useState(0);
    const [rodando, setRodando] = useState(false)
    const [result, setResult] = useState([]);
    const timer = useRef(null);

    const botaoDireitoP = useCallback(() => {
        if (rodando) {
            setResult((previousResult) => [tempo, ...previousResult ]);
        } else {
            setResult([]);
            setTempo(0);
        }
    }, [rodando, tempo]);

    const botaoEsquerdoP = useCallback(() => {
        if (!rodando) {
            const interval = setInterval(() => {
                setTempo((previousTempo) => previousTempo + 1);   
            }, 10);
            timer.current = interval;
        } else {
            clearInterval(timer.current);
        }
        setRodando((previousState) => !previousState);
    }, [rodando]);

    return (
        <SafeAreaView style={styles.container}>
            <Cabecalho/>
            <StatusBar style="light"/>

            <View style={styles.display}>
                <Text style={styles.displayText}>{displayTempo(tempo)}</Text>
            </View>

            <View style={styles.control}>
                <Controle
                    rodando={rodando}
                    botaoEsquerdoP={botaoEsquerdoP}
                    botaoDireitoP={botaoDireitoP}
                />
            </View>

            <View style={styles.result}>
                <Historico result={result}/>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Constants.statusBarHeight,
      },
      display: {
        flex: 3 / 5,
        justifyContent: "center",
        alignItems: "center",
      },
      displayText: {
        color: "#fff",
        fontSize: 70,
        fontWeight: "200",
        fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
      },
      control: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
      },
      result: { flex: 2 / 5 },
});