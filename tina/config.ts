import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d6af7304-9f73-4b32-8af7-3c4f8218a528", // Get this from tina.io
  token: "02575ea2631bafc9b47f767a8a80af497750efeb", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            isTitle: false,
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isTitle: false,
            required: true,
          },
          {
            type: "rich-text",
            name: "team",
            label: "Team",
            isTitle: false,
            required: false,
          },
          {
            type: "rich-text",
            name: "tools_and_technology",
            label: "Tools & Technology",
            isTitle: false,
            required: false,
          },
          {
            type: "rich-text",
            name: "business_model",
            label: "Business Model",
            isTitle: false,
            required: false,
          },
          {
            type: "rich-text",
            name: "timeline",
            label: "Timeline",
            isTitle: false,
            required: false,
          },
        ],
      },
    ],
  },
});
