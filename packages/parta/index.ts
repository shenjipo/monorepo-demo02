export class CommonUtilsA {
    static copy(val: any) {
        return JSON.parse(JSON.stringify(val))
    }
}