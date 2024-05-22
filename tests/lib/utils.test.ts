import { formatToIdentifierString } from "../../src/lib/utils";

describe("utils", () => {
  describe("formatToIdentifierString", () => {
    it("should format a string to a valid javascript identifier string", () => {
      expect(formatToIdentifierString("")).toBe("_");
      expect(formatToIdentifierString("1")).toBe("_1");
      expect(formatToIdentifierString("a")).toBe("a");
      expect(formatToIdentifierString("a1")).toBe("a1");
      expect(formatToIdentifierString("a_")).toBe("a_");
      expect(formatToIdentifierString("a$")).toBe("a$");
      expect(formatToIdentifierString("a_1")).toBe("a_1");
      expect(formatToIdentifierString("a$1")).toBe("a$1");
      expect(formatToIdentifierString("a$1_")).toBe("a$1_");
      expect(formatToIdentifierString("a$1_ ")).toBe("a$1__");
      expect(formatToIdentifierString("a$1_ 2")).toBe("a$1__2");
      expect(formatToIdentifierString(" a$1_2")).toBe("_a$1_2");
      expect(formatToIdentifierString("1")).toBe("_1");
      expect(formatToIdentifierString("$")).toBe("$");
      expect(formatToIdentifierString("_")).toBe("_");
      expect(formatToIdentifierString("1$")).toBe("_1$");
      expect(formatToIdentifierString("1_")).toBe("_1_");
      expect(formatToIdentifierString("$1")).toBe("$1");
      expect(formatToIdentifierString("_1")).toBe("_1");
    });
  });
});