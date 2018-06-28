//smallest-common-multiple
function smallestCommons(arr) {

    function getPrimeFactors(originalNum, totalArr) {
        var num= originalNum;
        var resArr = [];       
        for (var i = 2; i <= num / i; i++) {         
            while (num % i == 0) {
                resArr.push(i);
                num = num / i;           
            }

        }
        if (num > 1) {
            resArr.push(num);           
        }
        console.log(originalNum + "====>: " + resArr);
        return resArr;
    }



    function concatArr(oneNumber, totalArr) {

        //go over result arr and check if exist in to total arr - if yes delete from total
        console.log("----------------------");
        console.log("before : one " + oneNumber );
        console.log("before : total " + totalArr );

        for (var i = 0; i < oneNumber.length; i++) {
            for (var j= 0; j < totalArr.length; j++) {
               if (oneNumber[i] == totalArr[j] )
               {                
                totalArr.splice(j, 1);  // remover from total
                break;
               }

            }
        }
                
       
        // now add all that is in one to total
        for (var i = 0; i < oneNumber.length; i++) {
            totalArr.push(oneNumber[i]); 
        }
        console.log("after : total " + totalArr );
        console.log("----------------------");

        // need to check what was added then insert it to my array
        // if (totalArr.length == 0) {
        //     for (var i = 0; i < resArr; i++) {
        //         totalArr.push(resArr[i]);

        //     }
        //     return totalArr;
        // }

        // var found = false;
        // for (var i = 0; i < resArr.length ; i++) {
        //     found = false;
        //     for (var j = 0; j < totalArr.length ; j++) {
        //         if (totalArr[j] == resArr[i])
        //             found = true;
        //     }
        //     if (!found) {
        //         totalArr.push(resArr[i]);
        //     }
        // }

    }


    //-----------------------------------------------------------------------
    var fromNum = arr[0];
    var toNum = arr[1];
    if (fromNum > toNum) {
        fromNum = arr[1];
        toNum = arr[0];
    }

    // start looping on the numbers one by one and add 
    // var checkNum = 24;
    // getPrimeFactors(checkNum);

    var totalArr = [];
    //var eachNumArr =[];
    for (var i = toNum; i >= fromNum; i--) {

        var eachNumArr= getPrimeFactors(i);
           
        concatArr(eachNumArr,totalArr);
    }

    var res=1;
    for (var i = 0; i < totalArr.length; i++) {
        res = res*totalArr[i]; 
    }
    console.log("RES=" +res );
    return res;
}


smallestCommons([23, 18]);
