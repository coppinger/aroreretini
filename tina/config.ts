import { defineConfig } from "tinacms";

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
                        type: "datetime",
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
                        // templates: [
                        //     {
                        //         name: "TeamMember",
                        //         label: "Team Member",
                        //         fields: [
                        //             {
                        //                 type: "string",
                        //                 name: "team_member_name",
                        //                 label: "Name",
                        //             },
                        //             {
                        //                 type: "string",
                        //                 name: "team_member_bio",
                        //                 label: "Bio",
                        //                 ui: {
                        //                     component: "textarea",
                        //                 },
                        //             },
                        //             {
                        //                 type: "image",
                        //                 name: "team_member_image",
                        //                 label: "Image",
                        //             },
                        //         ],
                        //     },
                        // ],
                    },
                ],
            },
            {
                name: "essays",
                label: "Essays",
                path: "src/content/essays",
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
                        type: "datetime",
                        name: "pubDate",
                        label: "pubDate",
                        required: true,
                    },
                    {
                        type: "boolean",
                        name: "isFeatured",
                        label: "Featured",
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "Tags",
                        required: true,
                        list: true,
                        ui: {
                            component: "tags",
                        },
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        required: true,
                        isBody: true,
                    },
                ],
            },
            {
                name: "people",
                label: "People",
                path: "src/content/people",
                format: "mdx",
                fields: [
                    {
                        type: "string",
                        name: "name",
                        label: "Name",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Image",
                    },
                    {
                        type: "datetime",
                        name: "creationDate",
                        label: "Creation Date",
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        required: true,
                        isBody: true,
                    },
                ],
            },
            {
                name: "quotes",
                label: "Quotes",
                path: "src/content/quotes",
                format: "mdx",
                fields: [
                    {
                        type: "string",
                        name: "author",
                        label: "Author",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "text",
                        label: "Text",
                        isBody: true,
                        required: true,
                        ui: {
                            component: "textarea",
                        },
                    },
                    {
                        type: "datetime",
                        name: "publicationDate",
                        label: "Publication Date",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "note",
                        label: "Note",
                        required: false,
                    },
                ],
            },
        ],
    },
});
