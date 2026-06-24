export const nodeRegistry = {
  customInput: {
    label: "Input",
    outputs: ["value"],
    fields: [
      {
        name: "inputName",
        label: "Name",
        defaultValue: "input_1",
      },
    ],
  },

  llm: {
    label: "LLM",
    inputs: ["system", "prompt"],
    outputs: ["response"],
  },

  customOutput: {
    label: "Output",
    inputs: ["value"],
  },

  text: {
    label: "Text",
    outputs: ["output"],
    fields: [
      {
        name: "text",
        label: "Text",
        defaultValue: "{{input}}",
      },
    ],
  },

  api: {
    label: "API",
    inputs: ["request"],
    outputs: ["response"],
  },

  database: {
    label: "Database",
    inputs: ["query"],
    outputs: ["result"],
  },
};
