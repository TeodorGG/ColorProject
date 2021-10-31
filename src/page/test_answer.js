import  React, { Component } from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';


export default class Answer extends Component {
    constructor(props){
        super(props);
        this.state = {
            bk : '#fff'
        }

        if(this.props.question.selected !== -1) {
            if(this.props.question.selected === this.props.index){
                if(this.props.question.answer_correct === this.props.answer_text){
                    this.state.bk = "#83f297"
                } else {
                    this.state.bk = "#f27a72"
                }
            }
        }
        if(this.props.question.ckecked){
            if(this.props.question.answer_correct === this.props.answer_text){
                this.state.bk = "#83f297"
            }
        }

    }

    setSS(){
        this.setState({
            bk : "#83f297"
        })
    }

    render(){
        return (
            <TouchableOpacity style = {[test_page_style.slide_answer_container, {backgroundColor : this.state.bk}]}
                onPress = {()=>{
                    if(!this.props.question.ckecked){
                        if(this.props.question.answer_correct === this.props.answer_text){
                            this.setState({
                                bk : "#83f297"
                            })
                        } else {
                            this.setState({
                                bk : "#f27a72"
                            })
                        }
                        this.props.question.ckecked = true;
                        this.props.that.setRespons(this.props.answer_text, this.props.question.id)
                        this.props.question.selected = this.props.index;
                    }
                }}
            >
                <Text style = {test_page_style.slide_answer_text}>{this.props.answer_text}</Text>
            </TouchableOpacity>
        )
    }

}


const test_page_style = StyleSheet.create({
    


    slide_answer_container : {
        borderRadius : 5, 
        borderColor : 'black',
        borderWidth : 1,
        width : 250,
        padding : 10,
        marginBottom : 15
    },

    slide_answer_text : {

    },

    
    
    
})