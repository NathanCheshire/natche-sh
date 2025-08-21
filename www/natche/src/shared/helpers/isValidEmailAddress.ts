import { NatcheShRegularExpression } from "../zod/regularExpressions";

/**
 * Returns whether the provided string is a valid email address.
 *
 * @param email the string to test for being a valid email address
 */
const isValidEmailAddress = (email: string): boolean => {
  return new RegExp(NatcheShRegularExpression.Email).test(email);
};

export default isValidEmailAddress;
