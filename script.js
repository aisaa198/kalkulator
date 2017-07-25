let a, b, c, index = 0;

$(function () {
    $("button").click(function () {

        //click animation
      
        // nadajemy klasę toAnim
        // w tiemoucie
            // zdejmujemy klasę toAnim
      $(this).addClass('toAnim');
      const _self = this;
      setTimeout(function () {
       $(_self).removeClass('toAnim');
     }, 200);
 
        a = $(this).html();

        //turning on/off
        if (this.id === "onOff") {
            if ($(".lcd").html()) {
                $(".lcd").html('Bye, bye!');
                b = '';
                window.setTimeout(function () {
                    $(".lcd").html('');
                    return 0;
                }, 1000);
                return 0;
            } else {
                $(".lcd").html("Welcome!");
                b = '';
                window.setTimeout(function () {
                    $(".lcd").html('0');
                    return 0;
                }, 500);
                return 0;
            }
        }

        switch (a) {
            case 'CE':
                {
                    b = 0;
                }
                break;
            case 'C':
                {
                    if (b.length === 1) {
                        b = 0;
                    } else {
                        b = b.slice(0, b.length - 1);
                    }
                }
                break;
            case '=':
                {
                    if (!(b.charAt(b.length - 1) === '+' || b.charAt(b.length - 1) === '-' || b.charAt(b.length - 1) === '*' || b.charAt(b.length - 1) === '/')) {
                        b = eval(b).toFixed(9).toString();
                        if (b.indexOf('.') !== -1) {
                            for (let i = b.length; b.charAt(b.length - 1) === '0'; i--) {
                                b = b.slice(0, i);
                            }
                          if (b.indexOf('.') === b.length - 1) {
                            b = b.slice(0, b.length - 1);
                          }
                        }
                        c = b;
                        index = 0;
                        longest = b;
                    }
                }
                break;
            default:
                {
                    if (c && $(this).hasClass('num')) {
                        b = '';
                        c = '';
                    }
                    //prevent from more than one math symbol
                    if ((a === '+' || a === '-' || a === '*' || a === '/')) {
                        if (b.charAt(b.length - 1) === '+' || b.charAt(b.length - 1) === '-' || b.charAt(b.length - 1) === '*' || b.charAt(b.length - 1) === '/') {
                            a = '';
                        }
                    }
                    //prevent from more than one digit in one number
                    if (a === ".") {
                        currentNumber = b.slice(index, b.length);
                        if (currentNumber.indexOf('.') !== -1 && (b.charAt(b.length - 1) === '+' || b.charAt(b.length - 1) === '-' || b.charAt(b.length - 1) === '*' || b.charAt(b.length - 1) === '/')) {
                            a = '';
                        }
                    }
                    (!(b)) ? b = a : b += a;
                    c = '';
                }
                break;
        }
      //prevent from too long number
        if ($(".lcd").html()) {
                if (b.length > 19) {
                    $(".lcd").html('Too long...');
                    b = undefined;
                }
            }
      
            $(".lcd").html(b);
    });
});
