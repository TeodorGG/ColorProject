import  React, { Component } from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';

export default class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page : 0,

        }

        this.swipe = React.createRef();

        this.questionListData = [];
        this.questionListPage = [];

        this.settingQuestionData();
        this.settingQuestionPages();

    }

    settingQuestionData(){

       

        this.questionListData.push({
            id : 0,
            image_url : 'https://www.researchgate.net/profile/Stephen-Henley-2/publication/327830049/figure/fig2/AS:870030086516736@1584442745599/Official-logo-of-IAMG.png',
            image_data : {
                height : 180,
                width : 405
            },
            question : 'Test question 1 ?',
            answer_correct : 'Correct Answer',
            answers : ['Incorrect Answer 1', 'Incorrect Answer 2', 'Correct Answer'],
        })

        this.questionListData.push({
            id : 1,
            image_url : 'https://www.researchgate.net/profile/Stephen-Henley-2/publication/327830049/figure/fig2/AS:870030086516736@1584442745599/Official-logo-of-IAMG.png',
            image_data : {
                height : 180,
                width : 405
            },
            question : 'Test question 2 ?',
            answer_correct : 'Correct Answer',
            answers : ['Incorrect Answer 1', 'Incorrect Answer 2', 'Correct Answer', 'Incorrect Answer 3'],
        })
        

        this.questionListData.push({
            id : 2,
            image_url : 'https://www.researchgate.net/profile/Stephen-Henley-2/publication/327830049/figure/fig2/AS:870030086516736@1584442745599/Official-logo-of-IAMG.png',
            image_data : {
                height : 180,
                width : 405
            },
            question : 'Test question 3 ?',
            answer_correct : 'Correct Answer',
            answers : ['Correct Answer', 'Incorrect Answer 1', 'Incorrect Answer 2'],
        })

        this.questionListData.push({
            id : 3,
            image_url : 'https://www.researchgate.net/profile/Stephen-Henley-2/publication/327830049/figure/fig2/AS:870030086516736@1584442745599/Official-logo-of-IAMG.png',
            image_data : {
                height : 180,
                width : 405
            },
            question : 'Test question 4 ?',
            answer_correct : 'Correct Answer',
            answers : ['Incorrect Answer 1','Correct Answer'],
        })
    }

    settingQuestionPages(){
        for(var i = 0 ; i < this.questionListData.length ; i+=1){
            this.questionListPage.push(this.getPageByData(this.questionListData[i]));
        }
    }

    getPageByData(question){
            return(
                <View style = {test_page_style.slide}>
                    <Image source = {{uri : question.image_url}} style = {{height : question.image_data.height, width : question.image_data.width}}/>
                    <Text style = {test_page_style.slide_title}>{question.question}</Text>
                    {question.answers.map((answer_text) => {
                        return(
                            <TouchableOpacity style = {test_page_style.slide_answer_container}>
                                <Text style = {test_page_style.slide_answer_text}>{answer_text}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            )
       
    }

    backSlider(){
        if(this.state.page !== 0){
            this.setState({
                page : this.state.page-1,
            });
            this.swipe.goToPrev(); 
        } else {
            alert("First Page")
        }
    }
    
    nextSlide(){
        if(this.state.page !== this.questionListPage.length){
            this.setState({
                page : this.state.page+1,
            });
            this.swipe.goToNext();

        } else {
            alert("Last Page")
        }
    }
    

    

    render() {

    
        return (
            <View style = {test_page_style.main}>
                <View style = {test_page_style.body}> 
                    <TouchableOpacity
                        onPress= {()=>{this.backSlider()}}
                        >
                        <Text>BACK</Text>
                    </TouchableOpacity>

                    
                    <View style = {{height : 400, width : '100%', }}>
                        <Swiper
                            ref = {(r)=>{this.swipe = r;}}
                            controlsEnabled = {false}
                            style = {test_page_style.pager_view}
                            gesturesEnabled = {()=>false}
                            from = {this.state.page}
                            >
                            {this.questionListPage.map((page)=>{
                                return page;
                            })}
                            
                        </Swiper>
                    </View>
                    
                    <TouchableOpacity
                        onPress= {()=>{this.nextSlide()}}
                        >
                        <Text>NEXT</Text>
                    </TouchableOpacity>
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

    pager_view : {
        
        flex : 1
    },

    slide : {
       
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
    },

    slide_title : {
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 25,
        marginTop : 20
        
    },

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