#Usage

Requires jQuery version Add the class `clear-input` to any text input element whose value you want cleared when it gains focus.  The initial value will be replaced when the input loses focus, and no new text has been entered.

If you prefer to not add classes to your elements, you can alternatively call `clearInput()` on any jQuery input object.

You can have multiple clear-input fields on a single page, and they will not conflict.

#Example

Suppose you have a form with a single field for entering an email address, and the text input 
    <form>
        <input name="email" value="Enter your email address" type="text" />
        <input type="submit" />
    </form>

To use the plugin, either add the `clear-input` class to your input element,
    <input class="clear-input" name="email" value="Enter your email address" type="text" />

or, enable it using the `clearInput()` function:
    $(document).ready(function(){
        $("input[type='text']").clearInput();
    });

