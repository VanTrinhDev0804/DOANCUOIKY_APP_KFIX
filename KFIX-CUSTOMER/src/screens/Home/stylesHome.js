import { StyleSheet } from 'react-native'

import { colors } from '../../contains'


const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    hello: {
        color: colors.textColor,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    wOpt: {
        flex: 1,
        marginTop: 10,
    },
    titleProblem: {
        color: colors.textColor,
        fontSize: 20,
        fontWeight: 'bold'
    },
    opts: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
    }
})

export default stylesHome