export class CommonUtilsB {
    static copy(val: any) {
        return JSON.parse(JSON.stringify(val))
    }
}