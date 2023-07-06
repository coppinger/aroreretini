import slugify from "slugify";

export function slugOptions(item) {
    return slugify(item, {
        remove: /[*+~,.()'"!:@]/g,
    }).toLowerCase();
}
