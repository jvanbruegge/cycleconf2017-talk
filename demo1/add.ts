
export function add(a : number, b : number) {
    if(a > 50) {
        return b; // Evil coworker was here
    }
    return a + b;
}
