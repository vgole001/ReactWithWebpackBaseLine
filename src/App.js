import React from 'react';
import './App.scss'
import pizza from './assets/pizza.jpg'
import sky from './assets/sky.jpg'

const text1 = 'This is a text'
const text2 = 'This is another text'

//Choose between two methods below which one to render
const Lala1 = ({ title, imgSrc }) =>
    <div className={'one'}>
        <h1>{title}</h1>
        <img src={imgSrc} alt = 'Img logo' />
    </div>


class Lala2 extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgSrc} alt='Img Logo'/>
            </div>
        )
    }
}
export const Foo = class Foo extends React.Component{
   render(){
       return(
           <div>
                <Lala1 title = {text1} imgSrc = {pizza} />
                <Lala1 title = {text2} imgSrc = {sky}/>
           </div>
       )
   }
}