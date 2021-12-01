import  React, { Component } from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';


export default class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response : "",
        }

        console.log(this.props)

    }

    
    

    render() {
        return (
            <View style = {test_page_style.main}>
                <View style = {test_page_style.body}> 
                    <Text>
                        asdaad{this.state.response}
                    </Text>
                </View>
            </View>
        )
    }
}



const test_page_style = StyleSheet.create({
    main : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        height : "100%",
        width : '100%'
    },

    body : {
        flexDirection : 'row',
        width : '60%',
        alignItems : 'center',
        justifyContent : 'space-between'
    },

   

    
    
    
})