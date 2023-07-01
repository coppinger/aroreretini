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
            type: "image",
            name: "cover",
            label: "Cover",
            required: true,
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            required: true,
            ui: {
              component: "select",
              options: ['Paused', 'Active', 'Dead'],
            }, 
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
            isBody: true,
          },
          {
            type: "rich-text",
            name: "team",
            label: "Team",
            required: false,
          },
          {
            type: "rich-text",
            name: "tools_and_technology",
            label: "Tools & Technology",
            required: false,
          },
          {
            type: "rich-text",
            name: "business_model",
            label: "Business Model",
            required: false,
          },
          {
            type: "rich-text",
            name: "timeline",
            label: "Timeline",
            required: false,
          },
        ],
      },
    ],
  },
});
