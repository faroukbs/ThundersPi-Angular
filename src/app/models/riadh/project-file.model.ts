export class ProjectFile {
    id : number;
    data! : Blob;
    name!: string;
    type!: string;
    //constructor
    constructor(data: Blob, name: string, type: string) {
        this.data = data;
        this.name = name;
        this.type = type;
    }
}
