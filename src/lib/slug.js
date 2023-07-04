import slugify from "slugify";

export function slugOptions(item) {
    return slugify(item.frontmatter.title, {
        remove: /[*+~,.()'"!:@]/g,
    }).toLowerCase();
}
