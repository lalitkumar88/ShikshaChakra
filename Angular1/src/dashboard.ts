import { Course } from "./app/Course";
import { login } from "./app/Login";

export class Dashboard{
    constructor(
        public did:number,
        public userlogin:login,
        public courses: Course
         ){}
}