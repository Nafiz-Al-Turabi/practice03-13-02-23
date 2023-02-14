document.getElementById('buttonItalic').addEventListener('click',function(){
    const textarea=document.getElementById('myTextarea');
    textarea.style.fontStyle='italic';
});

document.getElementById('buttonBold').addEventListener('click',function(){
    const textareaBold=document.getElementById('myTextarea');
    textareaBold.style.fontWeight='bold';
});

document.getElementById('buttonUnderline').addEventListener('click',function(){
    const textareaUnderline=document.getElementById('myTextarea');
    textareaUnderline.style.textDecoration ='underline';
});
// text align 

document.getElementById('text-left').addEventListener('click',function(){
    const textLeft=document.getElementById('myTextarea');
    textLeft.style.textAlign='left';
});

document.getElementById('text-center').addEventListener('click',function(){
    const textCenter=document.getElementById('myTextarea');
    textCenter.style.textAlign='center';
});

document.getElementById('text-right').addEventListener('click',function(){
    const textRight=document.getElementById('myTextarea');
    textRight.style.textAlign='right';
});
document.getElementById('text-justify').addEventListener('click',function(){
    const textJustify=document.getElementById('myTextarea');
    textJustify.style.textAlign='justify';
});
// color add
document.getElementById('text-color').addEventListener('change',function(){
    const textColor=document.getElementById('myTextarea');
    textColor.style.color=this.value;
});

// font size add

document.getElementById('font-size').addEventListener('input', function() {
    const newfontSize = document.getElementById('font-size').value;
    const textArea=document.getElementById('myTextarea')
    textArea.style.fontSize=newfontSize;
    // console.loh(newfontSize);
    // fontSize.style.fontSize='14px';
  
    // fontSize.addEventListener('input', function() {
    //   fontSize.style.fontSize = `${this.value}px`;
    // });
    
  });
  