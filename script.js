let number;
const generate_number = () => {
    let n1 = Math.random();
    let n2 = n1 * 10;
    n2 = Math.floor(n2);
    n2 = (n2 % 6) + 1;
    number = n2;
    console.log(number);
};

// generate_number();

const generate_number_btn_click = () => {

    document.querySelector('#section1').style.display = 'none'
    document.querySelector('#section2').style.display = 'block'
    document.querySelector('#section3').style.display = 'none'

    setTimeout(() => {
        generate_number();

        document.querySelector('#section1').style.display = 'none'
        document.querySelector('#section2').style.display = 'none'
        document.querySelector('#section3').style.display = 'block'

    }, 3000);

};

//check no function

const checknum = () => {
    let value = document.querySelector('#field').value
    if (value == number) {
        alert("congrates, You won the math ")
    }
    else {
        alert("oops !! your guess is wrong ...")

    }
    generate_number();
};

//code written by kidnapshadow love ❤💕💕❤
