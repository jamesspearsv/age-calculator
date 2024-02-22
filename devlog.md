# Age Calculator Dev Log

This is a log of my progress on this challenge from start to finish. This log helps review what work has been previously accomplished, any challenges faced, and the next steps at the end of each work session.

---

## February 19, 2024

- Implement html skeleton for app
- Link favicion icon in webpack-html-plugin
- Add footer fixed styling

### Next Steps

_Ready to begin styling the main components of the app._

## February 19, 2024 (2)

- Implement mobile styling
  - Form, input fields, and submit buttons
  - Age calculation result elements
  - Main container
- Implement flexbox utility classes
- Implement main container structure using flexbox
- Implement active, focus state styles

### Next Steps

_Begin to implement desktop styles_

## February 21, 2024 -- _Edited on February 22, 2024_

Today I decided to work instead on the form validation for the birthdate form. This is something that I learned recently from The Odin Project and thought that it would be a good way to get more practice. I am having a lot of trouble getting the form validation to work the way that I want.

Mainly, I am unable to get the form to validate based on any custom rules (such as the number of days in a month or months in a year). I am going to continue to work on this until I can get it working correctly. Ideally, I want to validate a field each time that a user leaves it (i.e. when the field loses focus). I am going to review this [CSS Tricks tutorial](https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/) from CSS Tricks to learn more.

At this time, I think that I need a field validation function that is called each time a user leaves a field in the form. This function should take the field value and test it across several validation cases. If the field fails validation on any of these tests, the function should return an error. Else if the field passes each test, the function should return null. 

I also think it would be helpful to list out the validation cases that I need to consider for this form. They are below:

Validation Cases
- [ ] value missing in a required field
- [ ] range overflow (month and day)
- [ ] range underflow (month and day)
- [ ] type mismatch (i.e. prevent a user from entering a value that is not a number)
- [ ] year in the future (year)
- [ ] month and day mismatch (i.e prevent a user from entering an invalid date like 2/30/2024)

### Next Steps

_Continue to build form validation_
