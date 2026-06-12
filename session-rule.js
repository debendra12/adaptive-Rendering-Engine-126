export function sessionRule(context) {
  return context.userLoggedIn === true;
}