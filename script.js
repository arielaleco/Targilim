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




    var myArr = dropElements([0, 1, 0, 1], function (n) { return n === 1; })
    console.log(myArr);

}

function FindTheDifference1() {
    var resArray = [];

    function checkwithArray(addThisArray) {
        var workArray = [];   // create array with only one occurance 
        for (var i = 0; i < addThisArray.length; i++) {
            if (workArray.indexOf(addThisArray[i]) == -1) { workArray.push(addThisArray[i]) }

        }

        for (var i = 0; i < workArray.length; i++) {
            var x = resArray.indexOf(workArray[i]);
            if (x == -1) { resArray.push(workArray[i]) }
            else // it exist
            {
                resArray.splice(x, 1);
            }

        }

        // now ompare with res array

    }

    function sym(args) {

        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }


        for (var j = 0; j < arguments.length; j++) {
            var anArray = arguments[j];

            checkwithArray(anArray);
            console.log(anArray);
        }

        resArray.sort();
        return resArray;
    }
    console.log("result is:" + sym([1, 2, 3, 3], [5, 2, 1, 4]));

}

function FindTheDifference() {
    function sym(args) {
        var args = Array.prototype.slice.call(arguments);
        // now I have one array that contains all the numbers

        function symDiff(arrayOne, arrayTwo) {
            var result = [];

            arrayOne.forEach(function (item) {
                if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                    result.push(item);
                }
            });

            arrayTwo.forEach(function (item) {
                if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                    result.push(item);
                }
            });

            return result;
        }

        return args.reduce(symDiff);
    }

    console.log("result is:" + sym([1, 2, 3], [5, 2, 1, 4]));


}

function InventoryUpdateClick() {

    function updateInventory(arr1, arr2) {
        // All inventory must be accounted for or you're fired!
        arr2.forEach(function (item) {
            // look for them in orld array - if exist update - in not add
            var bFound = false;
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i][1] == item[1]) {
                    arr1[i][0] = arr1[i][0] + item[0];
                    bFound = true;
                }
            }
            if (!bFound) {
                arr1.push(item);
            }


            //if (arr1.indexOf(item[0]))
        });

        // now sort the result !
        arr1.sort(sortfunction);
        function sortfunction(a, b) {
            if (a[1] == b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }

        console.log(arr1);



        return arr1;
    }


    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];

    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];

    updateInventory(curInv, newInv);

}

function NoRepeatsPlease() {

    function permAlone(str) {

        // create all the words I can
        var resArr = [];
        for (var i = 0; i < str.length; i++) {
            console.log("working in " + str[i]);
            resArr = introduceElement(str[i], resArr)
        }

        function introduceElement(element, resArr) {
            console.log("in introduceElement : " + element + " " + resArr);
            var i = 0;
            var bNeedToWork = true;
            while (bNeedToWork) {

                resArr.splice(i, 0, element);
                console.log(resArr);
                i++;
                if (i >= resArr.length) { bNeedToWork = false; }

            }
            // for(var i=0;i<resArr.length;i++)
            // {

            //   //  resArr = introduceElement(str[i], resArr)
            // }
            // resArr.push(element);
            console.log(resArr);
            return resArr;
        }



        return str;
    }

    permAlone('abc');

}

function TypedArrays() {

    var buffer;
    var i32View;

    var buffersize = 8;
    var buffer = new ArrayBuffer(64);

    // buffer = new Float64Array(64);
    //buffer = new ArrayBuffer(buffersize);
    console.log(buffer.byteLength);
    var i32View = new Float32Array(16);

}

function StackWorks() {
    var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];

    homeworkStack.pop();
    homeworkStack.push("CS50");


    // Only change code below this line

}

function CreateStackClass() {
    function Stack() {
        collection = [];
        this.print = function () {
            console.log(collection);
        };
        // Only change code below this line

        this.push = function (element) {
            collection.push(element);
        };
        this.pop = function () {
            collection.pop();
        };

        this.peek = function () {
            result(collection[0]);
        };
        // Only change code above this line
    }
}