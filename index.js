
        var a=' ';
        var b=' ';
        var num=[];
        var ans;

        function sendNum(digital){
            num.push(digital);
            if (num.length != 1){
                a=' ';
                document.getElementById('screen').innerHTML=a;
            }
            for(i=0; i<num.length; i++){
                a=a+num[i];
            }
            document.getElementById('screen').innerHTML=a;
        }

        /* equalTo function*/
        function equalTo(){
            document.getElementById('screen').innerHTML='';
            for(i=0; i<num.length; i++){
                b+=num[i];
            }
            ans=eval(b);
            document.getElementById('screen').innerHTML=ans;

            while(num.length>0){
                num.pop();
            }
            num.push(ans.toString());
        }

        /* +/- function */
        function pm(){
            if(document.getElementById('screen').innerText===""){
                document.getElementById('screen').innerHTML="-";
            }
            else if(document.getElementById('screen').innerText==="-"){
                document.getElementById('screen').innerHTML="";
            }
            else{
                ans=parseInt(document.getElementById('screen').innerText);
                if(ans.toString().includes('-')){
                    ans=ans*(-1);
                }
                else{
                    ans="-"+ans;
                }
            }
            // document.getElementById('screen').innerHTML=ans;
        }

        /* Dot function*/
        function dot() {
            if (document.getElementById('screen').innerText.includes('.')) {
                return;
            }
            else {
                if (document.getElementById('screen').innerHTML === "") {
                    ans="0.";
                }
                else {
                    ans=".";
                }
                document.getElementById('screen').innerHTML += ans;
            }
        }

        /* Back function */
        function back(){
            document.getElementById('screen').innerHTML='';
            ans=document.getElementById('screen').innerHTML.toString();
            document.getElementById('screen').innerHTML=num.slice(0, -1);
        }

        /* Clear All function */
        function clrScr(){
            document.getElementById('screen').innerHTML='';
            while(num.length>0){
                num.pop();
            }
            a=' ';
            b=' ';
        }