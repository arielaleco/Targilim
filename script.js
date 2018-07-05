function smallest_common_multiple() {

    //smallest-common-multiple
    function smallestCommons(arr) {

        function getPrimeFactors(originalNum, totalArr) {
            var num = originalNum;
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
            console.log("before : one " + oneNumber);
            console.log("before : total " + totalArr);

            for (var i = 0; i < oneNumber.length; i++) {
                for (var j = 0; j < totalArr.length; j++) {
                    if (oneNumber[i] == totalArr[j]) {
                        totalArr.splice(j, 1);  // remover from total
                        break;
                    }

                }
            }


            // now add all that is in one to total
            for (var i = 0; i < oneNumber.length; i++) {
                totalArr.push(oneNumber[i]);
            }
            console.log("after : total " + totalArr);
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

            var eachNumArr = getPrimeFactors(i);

            concatArr(eachNumArr, totalArr);
        }

        var res = 1;
        for (var i = 0; i < totalArr.length; i++) {
            res = res * totalArr[i];
        }
        console.log("RES=" + res);
        return res;
    }


    alert(smallestCommons([23, 18]));
}

//================================================================================
function Steamroller() {

    function steamrollArray(arr) {
        // I'm a steamroller, baby
        var resArr = [];
        //---------------------------------------
        function Recursion(arr) {
            for (var i = 0; i < arr.length; i++) {
                console.log("checking " + arr[i]);
                console.log(typeof arr[i]);

                if (Array.isArray(arr[i])) {
                    Recursion(arr[i])
                }
                else {
                    resArr.push(arr[i]);
                }

            }
        }
        //---------------------------------------

        Recursion(arr);
        console.log('resArr==' + resArr);

        return resArr;
    }

    steamrollArray([1, {}, [3, [[4]]]]);
    //steamrollArray([[["a"]], [["b"]]]);
    //steamrollArray([1, {}, [3, [[4]]]]);
    //steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
    //  steamrollArray([1, [2], [3, [[4]]]]);
    //steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
    //steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

}

function binary_agents() {
    function binaryAgent(str) {
        // 01110010 == r
        // 01100101 ==e
        // 01101110 == n
        var arrRes = [];
        var res = str.split(" ");
        for (var i = 0; i < res.length; i++) {
            //console.log(res[i]);
            var digit = parseInt(res[i], 2);
            //console.log(String.fromCharCode(digit));
            arrRes.push(String.fromCharCode(digit));
        }


        //console.log(String.fromCharCode(65));
        console.log(arrRes);
        var asStr = arrRes.join("");
        console.log(asStr);
        return asStr;
    }

    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

}

function Make_a_Person() {

    var Person = function (firstAndLast) {
        // Complete the method below and implement the others similarly
        var tmpArr = firstAndLast.split(" ");
        this.firstName = tmpArr[0];
        this.lastName = tmpArr[1];
        //setFullName(firstAndLast);


        this.getFirstName = function () {
            return this.firstName;
        }
        this.getLastName = function () {
            return this.lastName;
        }
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        };
        // this.setFirstName = function (first) {
        //     this.firstName = first;
        // }
        // this.setLastName = function (last) {
        //     this.lastName = last;
        // }
        this.setFullName = function (firstAndLast) {
            console.log("aaaa");
            var tmpArr = firstAndLast.split(" ");
            this.setLastName = tmpArr[1];
            this.setFirstName = tmpArr[0];
            // this.firstName = tmpArr[0];
            // this.lastName = tmpArr[1];
        }

        //return firstAndLast;
    };
    // Person.prototype.getFirstName = function () {
    //     return this.firstName;
    // };
    // Person.prototype.getLastName = function () {
    //     return this.lastName;
    // }
    // Person.prototype.getFullName = function () {
    //     return this.firstName + " " + this.lastName;
    // }
    // Person.prototype.setLastName = function (last) {
    //     this.lastName = last;
    // }
    // Person.prototype.setFirstName = function (first) {
    //     this.firstName = first;
    // }

    // Person.prototype.setFullName = function (firstAndLast) {
    //     var tmpArr = firstAndLast.split(" ");
    //     this.setLastName = tmpArr[1];
    //     this.setFirstName = tmpArr[0];
    // }



    var bob = new Person('Bob Ross');
    console.log(Object.keys(bob).length);
    console.log(bob.firstName);
    // console.log(bob.getFirstName());

    //console.log(bob.getFullName());

};

function Arguments_Optional() {


    function addTogether(arg1, arg2) {


        if ((typeof arg1 == 'number') && (typeof arg2 == 'number')) {
            return arg1 + arg2;
        }

        // if ((arg1 !== undefined) && (arg2 !== undefined)) {

        else if ((typeof arg1 == 'number') && (arg2 == undefined)) {

            var newfunction = function (b) {
                if (typeof b == 'number') {
                    return arg1 + b;
                }
                else {
                    return undefined;
                }

            };


            return newfunction;
        }
        else {
            return undefined;
        }

    }
    var res;
    //res = addTogether(2, 3);
    res = addTogether(2)([3]);
    console.log(res);


};


function Dropit() {
    // function dropElements(arr, func) {
    //     // Drop them elements.

    //     var i = 0;
        
    //     var deleteUntil=0;
    //     var x;
    //     x = func(i+1);
    //     while ((!func(i+1) && (i < arr.length))) {
    //         x = func(i+1);
    //         deleteUntil=i+1;
    //         //arr.splice(0, 1);
    //         i++;
    //     }
    //     for(var i=deleteUntil-1; i>=0;i--)
    //     {
    //        arr.splice(i, 1); 
    //     }
       

    //     return arr;
    // }
    function dropElements(arr, func) {
        var newArr = [];
         for (var i in arr) {
           if (func(arr[i])) {
             newArr = arr.slice(i);
             break;
           } 
         }
         if (newArr.length === arr.length) {
           newArr.filter(func);
         }
         return newArr;
       }

    var myArr = dropElements([0, 1, 0, 1], function(n) {return n === 1;}) 
    console.log(myArr);

}