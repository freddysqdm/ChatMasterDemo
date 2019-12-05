import { stringify } from 'querystring';

export class Message {
    content: string;
    image: string;
    timeStamp: Date;
    rol: string;
    constructor(content: string, image: string, timeStamp: Date, rol: string){
        this.content = content;
        this.image = image;
        this.timeStamp = timeStamp;
        this.rol = rol;
    } 
}