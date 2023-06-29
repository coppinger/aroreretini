function importAll(r) {
    return r.keys().map(r);
}

const prefix = "projectname-";
const loadImages = importAll(
    require.context("./", false, new RegExp(`^${prefix}.*\\.(png|jpe?g|svg)$`))
);

export default loadImages;
