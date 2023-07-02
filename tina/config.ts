import { defineConfig } from "tinacms";

// const tinaClientId = import.meta.env.PUBLIC_TINA_CLIENT_ID;
// const tinaContent = import.meta.env.TINA_CONTENT;

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
    branch,
    clientId: process.env.PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
    token: process.env.TINA_CONTENT, // Get this from tina.io

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "images",
            publicFolder: "src",
        },
    },
    schema: {
        collections: [
            {
                name: "project",
                label: "Projects",
                path: "src/content/projects",
                format: "mdx",
                defaultItem: () => {
                    return {
                        title: "My New Post",
                        // The body will be populated with "Default Text"
                        body: {
                            type: "root",
                            children: [
                                {
                                    type: "h1",
                                    depth: 1,
                                    children: [
                                        {
                                            type: "text",
                                            text: "Testing",
                                        },
                                    ],
                                },
                                {
                                    type: "h2",
                                    depth: 2,
                                    children: [
                                        {
                                            type: "text",
                                            text: "Testing one two three",
                                        },
                                    ],
                                },
                                {
                                    type: "p",
                                    children: [
                                        {
                                            type: "text",
                                            text: "YYAAAAAAAHOOOOOOO",
                                        },
                                    ],
                                },
                            ],
                        },
                    };
                },
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
                            options: ["Paused", "Active", "Dead"],
                        },
                    },
                    {
                        type: "string",
                        name: "date",
                        label: "Date",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description",
                        required: true,
                        isBody: false,
                        ui: {
                            component: "textarea",
                        },
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        required: true,
                        isBody: true,
                        templates: [
                            {
                                name: "TeamMember",
                                label: "Team Member",
                                fields: [
                                    {
                                        type: "string",
                                        name: "team_member_name",
                                        label: "Name",
                                    },
                                    {
                                        type: "string",
                                        name: "team_member_bio",
                                        label: "Bio",
                                        ui: {
                                            component: "textarea",
                                        },
                                    },
                                    {
                                        type: "image",
                                        name: "team_member_image",
                                        label: "Image",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
