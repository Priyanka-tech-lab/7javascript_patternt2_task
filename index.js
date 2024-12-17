/*1.patternt*/ 

function btn1Click() {
    lbl1.innerHTML = " ";


        for (let row = 1; row <= 4; row++)
            {

                for (let col = 1; col <= row; col++)
                {
                    lbl1.innerHTML += (" *  ");
                }
                lbl1.innerHTML += " <br> ";

            }

            for (let row = 4; row >= 1; row--)
            {

                for (let col = 2; col <= row; col++)
                {
                    lbl1.innerHTML += (" *  ");
                }
                lbl1.innerHTML += " <br> ";
                         
            }
  }

  /*2.patternt*/

 function btn2Click() {
    lbl2.innerHTML = " ";

    let n=4;
            for (let i = 1; i <=n; i++)
            {
                for (let j = 1; j <=n; j++)
                {

                    if (i == 1 || i == n || j == 1 || j == n)
                        
                        lbl2.innerHTML += "*";

                    else

                        lbl2.innerHTML += "&nbsp;&nbsp;";
                    
                }
                
                lbl2.innerHTML += "<br>";
                
            }
  }

   /*3.patternt*/

 function btn3Click() {
    lbl3.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {
            for (let spc = row; spc >= 1; spc--)
            {
                lbl3.innerHTML += "&nbsp;" + spc;
            }
           
            for (let col = 1; col <= 4-row; col++)
            {
                lbl3.innerHTML += "&nbsp;" + "1";  
            }
            lbl3.innerHTML += "<br>";
        }
  }

   /*4.patternt*/

 function btn4Click() {
    lbl4.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {
            for (let spc = 1 ; spc <= 4-row; spc++)
            {
                lbl4.innerHTML += "1" + "&nbsp;";
            }
           
            for (let col = 1; col <= row; col++)
            {
                lbl4.innerHTML += col + "&nbsp;";  
            }
            lbl4.innerHTML += "<br>";
        }

   
  }

    /*5.patternt*/

    function btn5Click() {
        lbl5.innerHTML = " ";
    
        let n = 4;
            for (let i = 1; i <= n; i++)
            {
                for (let j = 1; j <= n; j++)
                {

                    if (i == 1 || i == n || j == 1 || j == n)
                        
                        lbl5.innerHTML +=  "&nbsp;" + "1"; 


                    else
                        lbl7.innetHTML(" {0}",i*j);
                        lbl5.innerHTML +=  "&nbsp;?" + i*j; 

                }
                lbl5.innerHTML += "<br>";

            }
      }

       /*6.patternt*/

  function btn6Click() {
    lbl6.innerHTML = " ";

    for (let row = 4; row >= 1; row--)
        {
            for (let spc = 1; spc <= 5 - row; spc++)
            {
                
                lbl6.innerHTML +=  "&nbsp;"; 


            }
            for (let col = 1; col <= row; col++)
            {
                
                  lbl6.innerHTML +=  "*" + "&nbsp;"; 

            }
            
            lbl6.innerHTML +=  "<br>"; 


        }


        for (let row = 2; row <= 4; row++)
        {
            for (let spc = 1; spc <= 5 - row; spc++)
            {
                
                lbl6.innerHTML +=  "&nbsp;" ; 

            }
            for (let col = 1; col <= row; col++)
            {
                
                lbl6.innerHTML +=  "*" + "&nbsp;"; 

            }
          
            lbl6.innerHTML +=  "<br>"; 


        }
  }

   /*7.patternt*/

   function btn7Click() {
    lbl7.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {
            for (let spc = 1; spc <= 4 - row; spc++)
            {
                lbl7.innetHTML += "&nbsp";
            }
            for (let col = 4; col >= 5 - row; col--)
            {
                lbl7.innetHTML +=  col +"&nbsp";
            }
            lbl7.innetHTMLLine += "<br>";

        }



        for (let row = 2; row <= 4; row++)
        {
            for (let spc = 2; spc <= row; spc++)
            {
                lbl7.innetHTML += ("&nbsp");
            }
            for (let col = 4; col >= row; col--)
            {
                lbl7.innetHTML += col + "&nbsp";
            }
            lbl7.innetHTMLLine += "<br>";
        }
  }