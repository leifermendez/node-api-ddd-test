export interface Mapper<src, target> {
    map(src: src): target;
}
