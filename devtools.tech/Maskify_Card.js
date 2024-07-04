/* Problem - https://devtools.tech/questions/s/implement-a-credit-card-masker-or-klarna-frontend-interview-question-or-javascript---qid---AdZLcjN3FNivgYCuq5pa

https://devtools.tech/questions/implement-a-credit-card-masker-or-klarna-frontend-interview-question-or-javascript/submissions/9K7dxV0pDqgN6o1NwOYS

Implement a Credit Card Masker | Klarna Frontend Interview Question | JavaScript
javascript logo
JavaScript
All Levels
2151
@Devtools Tech


In this question the candidate needs to implement a function that takes a credit card number and returns the masked version.

Many users have reported that this question was asked in the frontend interview process of global companies like Klarna.

Functional Requirements
It should replace all but the 1st and last 4 digits in the provided sequence.
Should not mask input shorter than 6 characters.
Should not mask non-numeric characters.
Should return empty string for all other input types apart from string and number.
Syntax
maskify(cardNumber);
Arguments
cardNumber (string | number): The credit card number provided by the user.
Return
the masked version of the card number as a string
Example
maskify('5512103073210694');
// 5###########0694

maskify('4556-3646-0793-5616')
// 4###-####-####-5616

maskify('');
// ''

maskify('Devtools Tech');
// Devtools Tech

maskify('S2k3i4p65p7y');
// S#k#i#p#5p7y

*/

/**
 * Read FAQs section on the left for more information on how to use the editor
**/
// DO NOT CHANGE FUNCTION NAME

function maskify(cardNumber) {
  
    if (typeof cardNumber !== 'number' && typeof cardNumber !== 'string')
        return '';
  
    cardNumber = String(cardNumber);
  
    if (cardNumber.length < 6)
        return cardNumber;
  
    let maskedString = '';
  
    for(let i = 0 ; i < cardNumber.length; i++)
    {
        if(/[0-9]/.test(cardNumber[i]))
        {
            if (i >= 1 && i <= cardNumber.length - 5)
            {
              maskedString += '#';
            }
            else {
              maskedString += cardNumber[i];
            }
        }
        else
        {
          maskedString += cardNumber[i];
        }
    }
  
    return maskedString;
  }
  