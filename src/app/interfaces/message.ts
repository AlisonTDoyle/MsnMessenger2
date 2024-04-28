export interface IMessage {
    // Mock API uses created at instead of time sent. Will prob change in production
    createdAt: string;
    username: string;
    message: string;
    // id: string;
}
export interface Message{
    createdAt: string;
    username: string;
    message: string;
    id: string;
}