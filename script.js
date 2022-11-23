let divi = document.getElementById('divi');
console.log('aoids');
let res = ()=> {
    setTimeout(() => {
        console.log("10");
        divi.innerText='10';
        setTimeout(() => {
            console.log("9");
            divi.innerText='9';
            setTimeout(() => {
                console.log("8");
                divi.innerText='8';
                setTimeout(() => {
                    console.log("7");
                    divi.innerText='7';
                    setTimeout(() => {
                        console.log("6");
                        divi.innerText='6';
                        setTimeout(() => {
                            console.log("5");
                            divi.innerText='5';
                            setTimeout(() => {
                                console.log("4");
                                divi.innerText='4';
                                setTimeout(() => {
                                    console.log("3");
                                    divi.innerText='3';
                                    setTimeout(() => {
                                        console.log("2");
                                        divi.innerText='2';
                                        setTimeout(() => {
                                            console.log("1");
                                            divi.innerText='1';
                                            setTimeout(() => {
                                                console.log("Happy Independence Day");
                                                divi.innerText='Happy Independence Day';
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
};
// document.body.append(divi);
res();
