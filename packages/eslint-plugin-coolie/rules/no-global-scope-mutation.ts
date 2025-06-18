import type { Rule, Scope } from "eslint"
import type { Node, Pattern } from "estree"

export const meta: Rule.RuleModule["meta"] = {
    type: "problem",
    docs: {
      description:
        "Only allow mutating and assigning variables in the current function scope",
      recommended: true,
    },
    schema: [],
    messages: {
      noParentScopeMutation: "Variables from parent scope may not be mutated.",
    },
  }