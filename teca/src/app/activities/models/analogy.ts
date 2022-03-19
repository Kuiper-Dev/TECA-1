import { AnalogyResponse } from '../interfaces/analogy-response';
export class Analogy {
    constructor(
        public analogyId:string='',
        public responses:AnalogyResponse[]=[],
        public score: string=''
    ){}
}
