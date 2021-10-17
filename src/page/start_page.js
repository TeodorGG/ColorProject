import  React, { Component } from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions, TextInput, Picker } from 'react-native';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_start_button : true,
            show_start_input_container : false,
            user_name_surname : '',
            user_age : '',
            user_sex : 'M'
        }

    }

    goToDataInput(){
        this.setState({
            show_start_button : false,
            show_start_input_container : true,
        })

        
    }

    goNextAnonim(){
        var userData = {
            type : 0
        };

        this.props.navigation.navigate("TestPage", userData)

    }

    goNextUser(){
        var userData = {
            type : 1,
            user_name_surname : this.state.user_name_surname,
            user_age : this.state.user_age,
            user_sex : this.state.user_sex,
        };

        this.props.navigation.navigate("TestPage", userData)


    }

    render() {

    
        return (
            <View style = {start_page_style.main}>
                { this.state.show_start_button && 
                    <TouchableOpacity style = {start_page_style.button_start}
                        onPress = {()=>{this.goToDataInput()}}>
                        <Text style = {start_page_style.button_text}>Start</Text>
                    </TouchableOpacity>
                }

                { this.state.show_start_input_container && 
                    <View style = {start_page_style.container_input_data}>
                        <Text style = {start_page_style.title_input_data}>Input Data for Statistic</Text>
                        <Text style = {start_page_style.description_input_data}>
                            The information is collected for the most accurate and precise statistics, 
                            results are not interconnected with your personal data. 
                        </Text>

                        <TextInput
                            style = {start_page_style.input_user_data}
                            onChangeText = {(t)=>{this.setState({user_name_surname : t})}}
                            value = {this.state.user_name_surname}
                            placeholder = "Name Surname"
                        />

                        <Picker
                                selectedValue={this.state.user_sex}
                                style={start_page_style.input_user_data}
                                onValueChange={(itemValue, itemIndex) => this.setState({user_sex : itemValue})}
                            >
                                <Picker.Item label="M" value="M" />
                                <Picker.Item label="F" value="F" />
                                <Picker.Item label="Personal" value="none" />

                        </Picker>

                        <TextInput
                            style = {start_page_style.input_user_data}
                            onChangeText = {(t)=>{this.setState({user_age : t.replace(/[^0-9]/g, '')})}}
                            value = {this.state.user_age}
                            placeholder = "Age"
                            keyboardType = 'numeric'
                        />

                        <View style = {start_page_style.container_button2test}>
                            <TouchableOpacity 
                                style = {start_page_style.button2test}
                                onPress = {()=>{this.goNextAnonim()}}
                            >
                                <Text style = {start_page_style.text_button2test}>
                                    Anonim test
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style = {start_page_style.button2test}
                                onPress = {()=>{this.goNextUser()}}
                                >
                                <Text style = {start_page_style.text_button2test}>
                                    Log with personal data
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                    }
            </View>
        )
    }

}

const start_page_style = StyleSheet.create({
    main : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        height : "100%",
        width : '100%'
    },

    button_start : {
        height : 40,
        width : 150,
        borderRadius : 5,
        backgroundColor : 'blue',
        justifyContent : 'center',
        alignItems : 'center'
    },

    button_text : {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
    },

    container_input_data : {
        height : "60%",
        width : '50%',
        alignItems : 'center'
    },

    title_input_data : {
        fontSize : 23,
        fontWeight : 'bold',
    },

    description_input_data : {
        textAlign : 'center',
        marginTop : 20
    },

    input_user_data : {
        width : "25%",
        height : 40,
        borderRadius : 5,
        borderColor : 'black',
        borderWidth : 1,
        marginTop : 20, 
        padding  : 5,
        backgroundColor : 'white'
    },

    container_button2test : {
        flexDirection : 'row',
      

    },

    button2test : {
        height : 40,
        width : 120,
        margin : 20,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "blue",
        borderRadius : 6,
        padding : 10
    },

    text_button2test : {
        textAlign : 'center',
        color : 'white',
        fontWeight : 'bold'
    }

})