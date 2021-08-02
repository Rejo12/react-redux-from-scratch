import React from 'react';
//  import img from './games.png';
import '../../game.css'
export default class TakeABreak extends React.Component{
   state={
       position:`0px`,
       dummyTime:''
    }

   componentDidMount(){
     {/* place the icon in screen center */}
       this.initialPosition();
       this.createSlabs();
       var _this = this;
       let count = 0;
      var timerId = setInterval(function(){
        _this.startTimer(count++);
       },500)
   }

   initialPosition(){
    let maxHeight = window.innerHeight;
    let centrePosition = maxHeight/2;
    this.setState({
        position : `${centrePosition}px`
    })
    }
    createSlabs(){
       var slab1 =  document.createElement("div")
       var slab2 =  document.createElement("div");
       var slab3 =  document.createElement("div");
       slab1.className = "slab";
       slab2.className = "slab";
       slab3.className = "slab";
       slab1.id = "slab1";
       slab2.id = "slab2";
       slab3.id = "slab3";
       var root =  document.getElementById('rootDiv');
       root.appendChild(slab1);
       root.appendChild(slab2);
       root.appendChild(slab3);
    }
    startTimer(count){
        console.log("called", document.getElementById('slab'))
        let slab1 = document.getElementById('slab1');
        if(slab1 !== null){
         slab1.style.marginRight = `${count*20}px`
         slab1.style.visibility = 'hidden'
        }
        let slab2 = document.getElementById('slab2');
        if(slab2 !== null){
         slab2.style.marginRight = `${count*40}px`
        }
        let slab3 = document.getElementById('slab3');
        if(slab3 !== null){
         slab3.style.marginRight = `${count*40}px`
        }
        
    }
    render(){
       var icon =  document.getElementById('icon');
       if(icon !== null){
        icon.style.marginTop = this.state.position
        console.log(this.state.position)
       }
      
        return(
            <div className="flexCss" id="rootDiv">
                {/* setting the animal at starting position */}
                {/* <img src={img} width="50px" height="50px"/> */}
                {/* place the icon in screen center */}
                <h3 id="icon">Hero</h3>
                {/* <div className="slab" id="slab"></div>
                <div className="slab" id="slab"></div> */}
            </div>
        )
    }
}