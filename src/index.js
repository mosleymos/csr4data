import nav from './nav';
import { footer } from './footer';

import { makeButton } from './button';

import { red, blue, makeColorStyle } from './button-styles';

var button = makeButton('yeah my first button')
button.style =makeColorStyle("green")
document.body.appendChild(button)
document.body.appendChild(footer)


console.log(nav(), footer )
