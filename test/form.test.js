import { describe, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";

import Form from "~/logic/Form/Form";
import Field from "~/logic/Form/Field";
import NumberValidator from "~/logic/Form/validator/NumberValidator";
import RequireValidator from "~/logic/Form/validator/RequireValidator";

const increment = function (a, b = 0) {
  return a + b;
};

describe("My test", async () => {
  await setup({
    // test context options
  });

  const form = new Form({
    url: "http://localhost:3000/test",
    method: "POST",
    fields: [
      new Field({
        name: "username",
        value: "",
        validators: [new RequireValidator()],
      }),
      new Field({
        name: "age",
        value: "",
        validators: [new RequireValidator(), new NumberValidator()],
      }),
    ],
  });

  form.isValid();
  const errors = form.getErrors();

  // form.submit();

  test("increments the current number by 1", () => {
    expect(errors.length).toBe(2);
  });
});
