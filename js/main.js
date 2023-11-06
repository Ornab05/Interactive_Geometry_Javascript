// all function

function getColor(bodyId) {
   const randomNumber= Math.floor(Math.random()*16777215);
   const RandomCode= '#'+randomNumber.toString(16);

   const bhai= document.getElementById(bodyId);
   bhai.style.backgroundColor= RandomCode;
   bhai.style.transition= '1s';
   
}


function getelementByidname(idname){
    let inputField= document.getElementById(idname);
    let inputFieldString= inputField.value;
    let new_input_field= parseInt(inputFieldString);
    inputField.value='';
    return new_input_field;
}

function getappendchild(idinput,idinput2,elementName,parentid){
    const parent= document.getElementById(parentid);
    let calculation;

    if(idinput=== 'input-tri-1'){
        calculation= getelementByidname(idinput)*getelementByidname(idinput2)*0.5;
    } 
    // for rectangle
      else if(idinput=== 'input-rec-1') {
        calculation= getelementByidname(idinput)*getelementByidname(idinput2);
    } 
    // for paralleogram
     else if(idinput=== 'input-par-1') {
        calculation= getelementByidname(idinput)*getelementByidname(idinput2);
    } 
    // for rhombus
     else if(idinput=== 'input-rho-1') {
        calculation= getelementByidname(idinput)*getelementByidname(idinput2)*0.5;
    } 
    // pentagon
    else if(idinput=== 'input-pen-1') {
        calculation= getelementByidname(idinput)*getelementByidname(idinput2)*0.5;
    } 
    // for ellipse
    else if(idinput=== 'input-ell-1') {
        calculation= getelementByidname(idinput)*getelementByidname(idinput2)*3.14;
        let main_calculation= calculation.toFixed(2);
        let calculate2= parseInt(main_calculation);
        return calculate2;
    }
    
    
    

    const li= document.createElement('li');
    li.innerText= elementName + '   ' +calculation +'cm²';
    

    let button= document.createElement('button');
    button.innerHTML= '<button class="hover:bg-red-600 text-sm bg-cyan-400 font-semibold rounded ml-3 mb-3 p-1">Convert to m²</button>'

    li.appendChild(button);
    parent.appendChild(li);

    
    button.style.marginLeft = '1px';
    



}

//function adding complete

// triangle

document.getElementById('btn-calculate-tri').addEventListener('click', function(){

    const call = getappendchild('input-tri-1','input-tri-2', 'triangle','text-adding-div')

    


})


    // rectangle 

document.getElementById('btn-calculate-rec').addEventListener('click',function(){

    const call = getappendchild('input-rec-1','input-rec-2', 'Rectangle','text-adding-div')

})


// paralleogram

document.getElementById('btn-calculate-par').addEventListener('click',function(){
    
    const call = getappendchild('input-par-1','input-par-2', 'paralleogram','text-adding-div')

})

// Rhombus

document.getElementById('btn-calculate-rho').addEventListener('click',function(){
    
    const call = getappendchild('input-rho-1','input-rho-2', 'Rhombus','text-adding-div')

})

// Pentagon

document.getElementById('btn-calculate-pen').addEventListener('click',function(){
    
    const call = getappendchild('input-pen-1','input-pen-2', 'Pentagon','text-adding-div')

})

// Ellipse

document.getElementById('btn-calculate-ell').addEventListener('click',function(){
    
    const call = getappendchild('input-ell-1','input-ell-2', 'Ellipse','text-adding-div')

})


// FOr changing the color =>

// 1
document.getElementById('triangle-body').addEventListener('mouseenter', function(){
    const make_color= getColor('triangle-body');
})

// 2
document.getElementById('rectangle-body').addEventListener('mouseenter', function(){
    const janina= getColor('rectangle-body');
})

// 3
document.getElementById('para-body').addEventListener('mouseenter', function(){
    const janina= getColor('para-body');
})

// 4
document.getElementById('rhombus-body').addEventListener('mouseenter', function(){
    const janina= getColor('rhombus-body');
})

// 5
document.getElementById('penta-body').addEventListener('mouseenter', function(){
    const janina= getColor('penta-body');
})

// 6
document.getElementById('ell-body').addEventListener('mouseenter', function(){
    const janina= getColor('ell-body');
})



// for going back to the previous color


// 1
document.getElementById('triangle-body').addEventListener('mouseleave', function(){
    const previous_color= document.getElementById('triangle-body');
    previous_color.style.backgroundColor='white' 
    previous_color.style.transition='0.3s'
})

// 2
document.getElementById('rectangle-body').addEventListener('mouseleave', function(){
    const previous_color= document.getElementById('rectangle-body');
    previous_color.style.backgroundColor='white' 
})

// 3
document.getElementById('para-body').addEventListener('mouseleave', function(){
    const previous_color= document.getElementById('para-body');
    previous_color.style.backgroundColor='white' 
})

// 4
document.getElementById('rhombus-body').addEventListener('mouseleave', function(){
    const previous_color= document.getElementById('rhombus-body');
    previous_color.style.backgroundColor='white' 
})

// 5
document.getElementById('penta-body').addEventListener('mouseleave', function(){
    const previous_color= document.getElementById('penta-body');
    previous_color.style.backgroundColor='white' 
})

// 6
document.getElementById('ell-body').addEventListener('mouseleave', function(){
    const previous_color= document.getElementById('ell-body');
    previous_color.style.backgroundColor='white' 
})

