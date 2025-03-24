export interface IUser {
    firstName: string;
    lastName: string;
    email: string ;
    phoneNumber: string;
    country: string;
    city: string;
}

export interface IUserDocument extends IUser, Document {
    createdAt: Date;
    updatedAt: Date;
}