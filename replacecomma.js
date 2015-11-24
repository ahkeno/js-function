// replace comma any of input 

function replacecomma(t){
    t = t.toString();

    var i,temp='';
        for(i=t.length; i>=0;i-=3){
            
            if(i==t.length) {
                temp=t.substring(i-3,i);
            }
            else 
            {
                if(t.substring(i-3,i)!="")
                temp = t.substring(i-3,i)+','+temp;
            }
            if(i<0) {temp=t.substring(0,i+3)+','+temp; break;}
        }
    return temp;
}

replacecomma(123213123123211); // output >> 123,213,123,123,211