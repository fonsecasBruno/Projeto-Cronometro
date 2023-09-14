import * as React from 'react';
import { Appbar } from 'react-native-paper';
import AppbarContent from 'react-native-paper';

const Cabecalho = () => {

    return (
        <Appbar.Header style={{backgroundColor:'Black'}}>
            <AppbarContent title='Stopwatch' style ={{ alignItems:'center'}}/>
        </Appbar.Header>
    )

}

export default Cabecalho;