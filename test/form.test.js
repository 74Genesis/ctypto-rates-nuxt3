import { describe, test, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
import { ref } from "vue";

import Form from "../logic/Form/Form";
import Field from "../logic/Form/Field";
import NumberValidator from "../logic/Form/validator/NumberValidator";
import RequireValidator from "../logic/Form/validator/RequireValidator";

describe("My test", () => {
  const form = new Form({
    url: "http://localhost:3000/test",
    method: "POST",
    fields: [
      new Field({
        name: "username",
        ref: ref(""),
        validators: [new RequireValidator()],
      }),
      new Field({
        name: "age",
        ref: ref(""),
        validators: [new RequireValidator(), new NumberValidator()],
      }),
    ],
  });

  test("Form validation", () => {
    expect(form.getErrors().length).toBe(3);
    expect(form.isValid()).toBe(false);
    expect(form.getField("123")).toBe(undefined);

    const age = form.getField("age");
    const user = form.getField("username");

    age.value = "three";
    expect(age.getErrors().length).toBe(1);

    age.value = "20";
    user.value = "Alex";
    expect(form.getErrors().length).toBe(0);
    expect(form.isValid()).toBe(true);
  });
});
