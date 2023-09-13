import * as React from 'react';
import { Appbar } from 'react-native-paper';
import AppbarContent from 'react-native-paper/lib/typescript/components/Appbar/AppbarContent';

const Cabecalho = () => {

    return (
        <Appbar.Header style={{backgroundColor:'Black'}}>
            <AppbarContent title='Cronometro' style ={{ alignItems:'center'}}/>
        </Appbar.Header>
    )

}

export default Cabecalho;