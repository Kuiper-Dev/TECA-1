import { CourseStudent } from '../interfaces/course-student';
import { ChapterI } from '../interfaces/chapter-i';
export class Course {
    constructor(
        public courseId: string= '',
        public professorId: string= '',
        public subject: string = '',
        public students: CourseStudent[] = [],
        public image: string = '',
        public chapters: ChapterI[]= [],
    ){}
}
