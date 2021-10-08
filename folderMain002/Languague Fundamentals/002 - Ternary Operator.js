/*** Conditional Expressions / Ternary Operator ***/

// if statements return no values!

// to do so, use ternary operator!

// Examples

// This will not work
/* const userName = if(isLogin) {
    return 'Lucas';
} else {
    return null;
} */

// This will work
const userName = isLogin ? 'Lucas' : null;

// isLogin => condition
// 'Lucas' => Value if condition is true / truthy
// null => Value if condition is false / falsy
