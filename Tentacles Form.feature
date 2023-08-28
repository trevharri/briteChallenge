Feature: Tentacles Form

Simple form that allows user to select and submit the number of tentacles

Scenario Outline: As a user I should only be able to select a valid number of tentacles using the arrows
Given The value of the input is currently <Value1>
When I <Action> the <Direction> arrow on the <Interface>
Then The value in the input is now <Value2>

Examples:
  | Value1 | Action | Direction | Interface | Value2 |
  | 100    | click  | up        | screen    | 100    |
  | 10     | click  | down      | screen    | 10     |
  | 100    | click  | down      | screen    | 99     |
  | 10     | click  | up        | screen    | 11     |
  | 100    | press  | up        | keyboard  | 100    |
  | 10     | press  | down      | keyboard  | 10     |
  | 100    | press  | down      | keyboard  | 99     |
  | 10     | press  | up        | keyboard  | 11     |


Scenario Outline: As a user I should only be able to enter and submit a valid number of tentacles
Given I type <Input> into the input.
When I click on the send button
Then The input field <Status> blank
And A <Result> message appears

Examples:
  | Input | Status | Result    |
  | 10    | is not | 'Success' |
  | 100   | is not | 'Success' |
  | 55    | is not | 'Success' |
  | 9     | is not | 'Error'   |
  | 101   | is not | 'Error'   |
  | 0     | is not | 'Error'   |
  | -5    | is not | 'Error'   |
  | aSd   | is     | 'Error'   |
  | !@#   | is     | 'Error'   |

