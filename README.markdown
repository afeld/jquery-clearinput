#Usage

Requires jQuery version Add the class `clear-input` to any input element whose value you want cleared when it gains focus.  The initial value will be replaced when the input loses focus, and no new text has been entered.

You can have multiple `clear-input` fields on a single page, and they will not conflict.

#Example

Suppose you have a form with a single field for entering an email address.
  <form>
    <input name="email">
    <input type="submit" />
  </form>