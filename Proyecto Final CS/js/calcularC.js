function calcularC() {
    var a = [0,0,0];
    var res = [];
    var suma =[];
    var checkBox1 = document.getElementById("Check1");
    var checkBox2 = document.getElementById("Check2");
    var checkBox3 = document.getElementById("Check3");
    var checkBox4 = document.getElementById("Check4");
    var checkBox5 = document.getElementById("Check5");
    var checkBox6 = document.getElementById("Check6");
    var checkBox7 = document.getElementById("Check7");
    var checkBox8 = document.getElementById("Check8");
    var checkBox9 = document.getElementById("Check9");
    var checkBox10 = document.getElementById("Check10");
    var checkBox11 = document.getElementById("Check11");
    var checkBox12 = document.getElementById("Check12");

    /* Pregunta 1 */
    if (checkBox1.checked == true){
        a[1] = 1;
    } 
    else{
        a[1] = 0;
    }

    if (checkBox2.checked == true){
        a[2] = 1;
    } 
    else{
        a[2] = 0;
    }

    if (checkBox3.checked == true){
        a[3] = 1;
    } 
    else{
        a[3] = 0;
    }
    /* Pregunta 2 */
    if (checkBox4.checked == true){
        a[4] = 1;
    } 
    else{
        a[4] = 0;
    }

    if (checkBox5.checked == true){
        a[5] = 1;
    } 
    else{
        a[5] = 0;
    }

    if (checkBox6.checked == true){
        a[6] = 1;
    } 
    else{
        a[6] = 0;
    }
    /* Pregunta 3 */
    if (checkBox7.checked == true){
        a[7] = 1;
    } 
    else{
        a[7] = 0;
    }

    if (checkBox8.checked == true){
        a[8] = 1;
    } 
    else{
        a[8] = 0;
    }

    if (checkBox9.checked == true){
        a[9] = 1;
    } 
    else{
        a[9] = 0;
    }
    /* Pregunta 4 */
    if (checkBox10.checked == true){
        a[10] = 1;
    } 
    else{
        a[10] = 0;
    }

    if (checkBox11.checked == true){
        a[11] = 1;
    } 
    else{
        a[11] = 0;
    }

    if (checkBox12.checked == true){
        a[12] = 1;
    } 
    else{
        a[12] = 0;
    }
    
    suma[1] = a[1]+a[2]+a[3];
    suma[2] = a[4]+a[5]+a[6];
    suma[3] = a[7]+a[8]+a[9];
    suma[4] = a[10]+a[11]+a[12];
    /*Respuesta 1*/ 
    switch(suma[1]){
        case 0: res[1]="Muy Mala: 0%";
        break;
        case 1: res[1]="Mala: 10%";
        break;
        case 2: res[1]="Regular: 75%";
        break;
        case 3: res[1]="Buena: 100%";
        break;
    }

    /*Respuesta 2*/ 
    switch(suma[2]){
        case 0: res[2]="Muy Mala: 0%";
        break;
        case 1: res[2]="Mala: 10%";
        break;
        case 2: res[2]="Regular: 75%";
        break;
        case 3: res[2]="Buena: 100%";
        break;
    }

    /*Respuesta 3*/ 
    switch(suma[3]){
        case 0: res[3]="Muy Mala: 0%";
        break;
        case 1: res[3]="Mala: 10%";
        break;
        case 2: res[3]="Regular: 75%";
        break;
        case 3: res[3]="Buena: 100%";
        break;
    }

    /*Respuesta 4*/ 
    switch(suma[4]){
        case 0: res[4]="Muy Mala: 0%";
        break;
        case 1: res[4]="Mala: 10%";
        break;
        case 2: res[4]="Regular: 75%";
        break;
        case 3: res[4]="Buena: 100%";
        break;
    }

    document.getElementById("e").innerHTML = res[1];
    document.getElementById("p").innerHTML = res[2];
    document.getElementById("s").innerHTML = res[3];
    document.getElementById("sa").innerHTML = res[4];
}