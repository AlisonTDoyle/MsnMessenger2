export interface IUser {
    email:string;
    password:string;
    givenName:string;
    familyName:string;
    code:string; // Code contained in verification email
    showPassword:boolean;
}