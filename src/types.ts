export interface User {
  id: number;
  username: string;
}

export interface Attempt {
    username: string;
    problemName: string;
    status: AttemptStatus;
    date: Date;
}

// {
//     "id": 1,
//     "status": "MASTERED",
//     "date": "2024-08-22",
//     "user": {
//         "id": 1,
//         "username": "admin"
//     },
//     "problem": {
//         "id": 1,
//         "name": "two-sum",
//         "link": "https://leetcode.com/problems/two-sum"
//     }
// },
export interface Problem {
    id: number;
    name: string;
    link: string;
}

export enum AttemptStatus {
    NOT_ATTEMPTED = 'NOT_ATTEMPTED',
    NEEDED_SOLUTION = 'NEEDED_SOLUTION',
    NEEDED_HINT = 'NEEDED_HINT',
    MASTERED = 'MASTERED',
}
