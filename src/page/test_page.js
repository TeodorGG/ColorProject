import  React, { Component } from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';
import Answer from './test_answer'

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
            image_url : 'https://sharpbrains.com/wp-content/uploads/2010/10/ColorIllusion.jpg ',
            image_data : {
                height : 946 ,
                width : 939 
            },
            question : 'Are the squares inside the blue and yellow squares all the same color?',
            answer_correct : 'Yes',
            answers : ['Yes', 'No'],
            ckecked : false,
            selected : -1
        })

        this.questionListData.push({
            id : 1,
            image_url : 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XMBW2GEGUY7DNNH5UWSY2UJP5E.jpg&w=916 ',
            image_data : {
                height : 540 ,
                width : 420 
            },
            question : 'Which square (A or B) is darker?',
            answer_correct : 'The squares are identical',
            answers : ['A', 'B', 'The squares are identical'],
            ckecked : false,
            selected : -1
        })
        

        this.questionListData.push({
            id : 2,
            image_url : 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NHF5OJZDHI2QPLVZ6ND4DTLZM4.jpg&w=916',
            image_data : {
                height : 394 ,
                width : 271
            },
            question : 'Which surface color is darker?',
            answer_correct : 'The surface colors of A and B are the same',
            answers : ['A', 'B', 'The surface colors of A and B are the same'],
            ckecked : false,
            selected : -1
        })

        this.questionListData.push({
            id : 3,
            image_url : 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3GMHRYU6HY74PG57FE3ZYYOA3I.png&w=916',
            image_data : {
                height : 581 ,
                width : 800  
            },
            question : 'Which part of the bar is darker?',
            answer_correct : 'The color of the bar is constant',
            answers : ['The color of the bar is constant','The left part', 'The right part'],
            ckecked : false,
            selected : -1
        })
    }

    settingQuestionPages(){
        for(var i = 0 ; i < this.questionListData.length ; i+=1){
            this.questionListPage.push(this.getPageByData(this.questionListData[i]));
        }
    }

    getPageByData(question){
        var h, w;
        h = question.image_data.height;
        w = question.image_data.width;

        // while(h > 400){
        //     w = w/2;
        //     h = h/2;
        // }

        var c = w/h;
        w = 400*c;
        h = 400;

        return(
            <View style = {test_page_style.slide}>
                <Image source = {{uri : question.image_url}} style = {{height : h, width : w}}/>
                <Text style = {test_page_style.slide_title}>{question.question}</Text>
                {question.answers.map((answer_text, index) =>
                    (
                        <Answer answer_text = {answer_text} index = {index} question = {question} that = {this} ref = {(r)=>this.setState({["bk_"+question.id+"_"+index] : r})}/>)
                    )
                }
            </View>
        )
       
    }

    setRespons(answer, id, that){
        if(this.questionListData[id].answer_correct !== answer){
            this.questionListData[id].answers.map((aa, index) => {
                if(aa === this.questionListData[id].answer_correct){
                    this.state["bk_"+id+"_"+index].setSS();
                }
            })
        }
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
                    
                    <View style = {{height : Dimensions.get('window').height, width : '100%', }}>
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