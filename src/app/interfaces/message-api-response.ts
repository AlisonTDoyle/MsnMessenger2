import { IMessage, Message } from "./message";

export interface IMessageApiResponse {
    Items:IMessage[];
    Count:number;
    ScannedCount:number
}
