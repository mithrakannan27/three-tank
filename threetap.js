var contain=document.getElementById('bottom')
var water=document.getElementById('water')

var liq=0
var topMargin=150
        
var h2o=document.getElementById("red")
var pipe=document.getElementById("redtank")
var flowing=document.getElementById("flowred")

var tapStatus="OFF"
var flow="ON"

var level=350
var space=0

flowing.style.display="none"

function tapopenone(){
    if(tapStatus=="OFF"){
        pipe.style.background="green"
        tapStatus="ON"

        if(level>0){
            flowing.style.display="block"
            var interval=setInterval(function(){
            level=level-1
            space=space+1
            h2o.style.height=level+"px"
            h2o.style.marginTop=space+"px"
        
            if(level==0 || space==350 || flow=="OFF"){
            clearInterval(interval);
            flowing.style.display="none"
            flow="ON"
        }
        },50)     
    }

    if(flow=="ON"|| tapStatus=="ON"){
        water.style.display="block"
        water.style.borderBottomLeftRadius="5px"
        water.style.borderBottomRightRadius="5px"

            var intervalWater=setInterval(function(){
                liq=liq+1
                topMargin=topMargin-1
                water.style.background="skyblue"
                water.style.height=liq+"px"
                water.style.marginTop=topMargin+"px"

                if(flow=="OFF" ||tapStatus=="OFF" ||level==0 || space==350 ){
                    clearInterval(intervalWater);
                    flow="ON"
                }
            },500)  
    }  
}
 
else if(tapStatus="ON"){
    pipe.style.background="red"
    tapStatus="OFF"
    flow="OFF"
    flowing.style.display="none"
}
}

var firstH2o=document.getElementById("green")
var firstPipe=document.getElementById("greentank")
var firstFlowing=document.getElementById("flowgreen")

var firstLevel= 350
var firstSpace=0

firstFlowing.style.display="none"

var click="OFF"
var dec="ON"

function tapopentwo(){
if(click=="OFF"){
    firstPipe.style.backgroundColor="green"
    click="ON"

    if(firstLevel>0){
        firstFlowing.style.display="block"
        var intervalId=setInterval(function(){
            firstLevel=firstLevel-1
            firstSpace=firstSpace+1
            firstH2o.style.height=firstLevel+"px"
            firstH2o.style.marginTop=firstSpace+"px"   
            
            if(firstLevel==0 || firstSpace==350 ||dec=="OFF"){
                clearInterval(intervalId);
                dec="ON"
                firstFlowing.style.display="none"
            }
        },50)
    }

    if(dec=="ON"|| click=="ON"){
        water.style.display="block"
        water.style.borderBottomLeftRadius="5px"
        water.style.borderBottomRightRadius="5px"

            var intervalWater=setInterval(function(){
                liq=liq+1
                topMargin=topMargin-1
                water.style.background="skyblue"
                water.style.height=liq+"px"
                water.style.marginTop=topMargin+"px"

                if(dec=="OFF" ||click=="OFF" ||firstLevel==0 || firstSpace==350){
                    clearInterval(intervalWater);
                    flow="ON"
                }
            },500)  
    }
}
else if(click=="ON"){
    firstPipe.style.backgroundColor="red"
    click="OFF"
    dec="OFF"
    firstFlowing.style.display="none"
}
}

var bluewater=document.getElementById("blue")
var tap=document.getElementById("bluetank")
var liquid=document.getElementById("flowblue")

var touchStatus="OFF"
var moving="ON"

var limit=350
var empty=0

liquid.style.display="none"

function tapopenthree(){
if(touchStatus=="OFF"){
    tap.style.background="green"
    touchStatus="ON"

    if(limit>0){
        liquid.style.display="block"
        var int=setInterval(function(){
            limit=limit-1
            empty=empty+1
            bluewater.style.height=limit+"px"
            bluewater.style.marginTop=empty+"px"

            if(limit==0 || empty==350 || moving=="OFF"){
                clearInterval(int)
                moving="ON"
                liquid.style.display="none"
            }
        },50)
    }

    if(moving=="ON"|| touchStatus=="ON"){
        water.style.display="block"
        water.style.borderBottomLeftRadius="5px"
        water.style.borderBottomRightRadius="5px"

            var intervalWater=setInterval(function(){
                liq=liq+1
                topMargin=topMargin-1
                water.style.background="skyblue"
                water.style.height=liq+"px"
                water.style.marginTop=topMargin+"px"

                if(moving=="OFF" ||touchStatus=="OFF" || limit==0 || empty==350){
                    clearInterval(intervalWater);
                    flow="ON"
                }
            },500)  
    }
}
else if(touchStatus=="ON"){
    tap.style.background="red"
    moving="OFF"
    liquid.style.display="none"
    touchStatus="OFF"
}
}