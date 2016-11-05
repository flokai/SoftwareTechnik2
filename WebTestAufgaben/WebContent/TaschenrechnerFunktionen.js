var rechnung = 0;

var betrag = 0.0;
var plus = 0.0;
var minus = 0.0;
var geteilt = 0.0;
var multiplizieren = 0.0;
var prozent = 0.0;

function Check(Eingabe) {
	var nur_das = "0123456789()-+*%/.";
	for (var i = 0; i < Eingabe.length; i++)
		if (nur_das.indexOf(Eingabe.charAt(i)) < 0)
			return false;
	return true;
}

function ausgabe() {
	var x = 0;
	if (plus != 0) {
		x = plus + parseInt(window.document.Rechner.Display.value);
	}
	if (minus != 0) {
		x = minus - parseInt(window.document.Rechner.Display.value);
	}
	if (geteilt != 0) {
		x = geteilt / parseInt(window.document.Rechner.Display.value);
	}
	if (multiplizieren != 0) {
		x = multiplizieren * parseInt(window.document.Rechner.Display.value);
	}
	if (prozent != 0) {
		x = prozent (parseInt(window.document.Rechner.Display.value)/100);
	}
	betrag = 0;
	plus = 0;
	minus = 0;
	geteilt = 0;
	multiplizieren = 0;
	prozent = 0;
	window.document.Rechner.Display.value = x;
}



function hinzufuegen(zeichen) {
	rechnung = rechnung + zeichen;
	window.document.Rechner.Display.value = window.document.Rechner.Display.value
			+ zeichen;
}

function reset() {
	window.document.Rechner.Display.value = 0;
}

function calculate(operatoren) {

	var x = parseInt(window.document.Rechner.Display.value);

	window.document.Rechner.Display.value = "";

	if (plus == 0 && minus == 0 && geteilt == 0 && multiplizieren == 0
			&& prozent == 0) {
		betrag = x;
		switch (operatoren) {
		case '+':
			plus = betrag;
			break;
		case '-':
			minus = betrag;
			break;
		case '/':
			geteilt = betrag;
			break;
		case '*':
			multiplizieren = betrag;
			break;
		case '%':
			prozent = betrag;
			break;
		default: break;
		}
		betrag = 0;
	} else

		if (minus != 0) {
			minus = (minus-x);
			switch (operatoren) {
			case '+':
				plus = minus;
				minus = 0;
				break;
			case '-':
				minus = minus;
				break;
			case '/':
				geteilt = minus;
				minus = 0;
				break;
			case '*':
				multiplizieren = minus;
				minus = 0;
				break;
			case '%':
				prozent = minus;
				minus = 0;
				break;
			default:break;
			}
		} else
			
			if (plus != 0) {
				plus = plus + x;
				switch (operatoren) {
				case '+':
					plus = plus;
					break;
				case '-':
					minus = plus;
					plus = 0;
					break;
				case '/':
					geteilt = plus;
					plus = 0;
					break;
				case '*':
					multiplizieren = plus;
					plus = 0;
					break;
				case '%':
					prozent = plus;
					plus = 0;
					break;
				default:break;
				}

			} else

		if (multiplizieren != 0) {
			multiplizieren = (multiplizieren*x);
			switch (operatoren) {
			case '+':
				plus = multiplizieren;
				multiplizieren = 0;
				break;
			case '-':
				minus = multiplizieren;
				multiplizieren = 0;
				break;
			case '/':
				geteilt = multiplizieren;
				multiplizieren = 0;
				break;
			case '*':
				multiplizieren = multiplizieren;
				break;
			case '%':
				prozent = multiplizieren;
				multiplizieren = 0;
				break;
			default:break;
			}
		} else

		if (geteilt != 0) {
			geteilt = (geteilt/x);
			switch (operatoren) {
			case '+':
				plus = geteilt;
				geteilt = 0;
				break;
			case '-':
				minus = geteilt;
				geteilt = 0;
				break;
			case '/':
				geteilt = geteilt;
				break;
			case '*':
				multiplizieren = geteilt;
				geteilt = 0;
				break;
			case '%':
				prozent = geteilt;
				geteilt = 0;
				break;
			default:break;
			}
		} else

		if (prozent != 0) {
			prozent = (prozent*(x/100));
			switch (operatoren) {
			case '+':
				plus = prozent;
				prozent = 0;
				break;
			case '-':
				minus = prozent;
				prozent = 0;
				break;
			case '/':
				geteilt = prozent;
				prozent = 0;
				break;
			case '*':
				multiplizieren = prozent;
				prozent = 0;
				break;
			case '%':
				prozent = prozent;
				break;
			default:break;
			}
		}

}