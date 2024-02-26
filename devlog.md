# Age Calculator Dev Log

This is a log of my progress on this challenge from start to finish. This log helps review what work has been previously accomplished, any challenges faced, and the next steps at the end of each work session.

## February 19, 2024

- Implement html skeleton for app
- Link favicion icon in webpack-html-plugin
- Add footer fixed styling

### Next Steps

Ready to begin styling the main components of the app

## February 19, 2024 (2)

- Implement mobile styling
  - Form, input fields, and submit buttons
  - Age calculation result elements
  - Main container
- Implement flexbox utility classes
- Implement main container structure using flexbox
- Implement active, focus state styles

### Next Steps

Begin to implement desktop styles

## February 21, 2024 -- _Edited on February 22, 2024_

Today I decided to work instead on the form validation for the birthdate form. This is something that I learned recently from The Odin Project and thought that it would be a good way to get more practice. I am having a lot of trouble getting the form validation to work the way that I want.

Mainly, I am unable to get the form to validate based on any custom rules (such as the number of days in a month or months in a year). I am going to continue to work on this until I can get it working correctly. Ideally, I want to validate a field each time that a user leaves it (i.e. when the field loses focus). I am going to review this [CSS Tricks tutorial](https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/) to learn more.

At this time, I think that I need a field validation function that is called each time a user leaves a field in the form. This function should take the field value and test it across several validation cases. If the field fails validation on any of these tests, the function should return an error. Else if the field passes each test, the function should return null.

I also think it would be helpful to list out the validation cases that I need to consider for this form. They are below:

Validation Cases

- value missing in a required field
- range overflow (month and day)
- range underflow (month and day)
- pattern mismatch (i.e. input not YYYY)
- bad input (i.e. prevent a user from entering a value that is not a number)
- year in the future (year)
- month and day mismatch (i.e prevent a user from entering an invalid date like 2/30/2024)

### Next Steps

Continue to build form validation

## February 22, 2024

Today I wrote `validateField` in validate.js that I can call anytime that a field loses focus. I relied heavily on infomation from the CSS tricks tutorial above and this [Contstraint Validation API guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) from MDN Web Docs. This function takes the an HTML field as input and check its validity state across a number of tests. These tests include:

- missingValue
- rangeUnderflow
- rangeOverflow
- badInput
- patternMismatch
- future year

I also added some logic to main.js to add an `.invalid` class to the field triggering the `focusout` event. The turns both the `<input>` and `<label>` red while the field is invalid. Eventually this logic will be moved into a seperate module responsible for managing the UI of the app.

### Next Steps

Add a function to validation.js that validates the form as a whole when submitted. This function should:

- Check that no form fields are invalid
- Check that the full date entered is not in the future

## February 23, 2024

Today I mostly finished the form validation. Now the form will be validated for most of the above cases with the exception for a year day mismatch. The validation function is fired anytime a user leaves a field. I also added `validateForm()` in validate.js. This function is fired when a user submits the form and checks the form's validity using the method `checkValidity()` from the Constraint Validation API. This function returns true if the form is valid and otherwise false. If the form is invalid, each form field is validated again to inform the user of any invalid field.

I also started the view module in view.js. The function `styleValidation()` takes as input a form field and a boolean. This boolean is returned by `validateField()` and is false if the field is invalid and otherwise true. This function either adds or removes the class `.invalid` depending on if the field is invalid. It then sets the text content of the error div in the targeted field's form group as the field's validation message.

### Next Steps

Next I want to implement the month date mismatch validation and then return to styling the app for a desktop screen. After these tasks I sould be ready to build the age calculation function.

## February 25, 2024

I worked briefly on the desktop view today. I set up the view to change based on a breakpoint at 1000px. That is the point where the UI elements begin to become too compact. In a production all, I assume that there would be more than one breakpoint to accomodate multiple screen sizes. I rewrote the form button dividers during this session so that is is easier to change how they appear for each view (mobile and desktop). These were created using `:before` and `:after` psuedo selectors but I instead opted to add a `div` before and after the form's submit button and styling these with a `.divider` class. In the desktop view, I set the display of the right divider to none so that I can move the button and remaining divider to the right of the main container. I learned a handy trick to select both following and previous siblings that I have made good use of during this project. I am really proud of understanding this pattern `.previous-sibling:has(+ .following-sibling)`. I am happy with how the desktop view currently looks and I only had to adjust a handful of rules to achieve this.

### Next steps

Next I plan to implement the actual age calcuation functions. I have a rough idea of how to a complete the calculations and then I will need to add functionality to `view.js` that allows me to display the results to the user.

I am going to take a moment before continuing to read about the Date object in js so that I have a better idea of best ways to work with dates.
