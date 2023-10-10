export type FOREIGN_LANGUAGES_TYPE = {
     id: string;
     title: string;
     details: string[];
};
export type TECHNICAL_SKILLS_TYPE = {
     title: string;
     data: string[] | FOREIGN_LANGUAGES_TYPE[];
};

export type PROJECT_TYPE = {
     id: string;
     name: string;
     desc: string;
     size: number;
     responsibility: string[];
};
export type PROFESSIONAL_EXPERIENCE_TYPE = {
     id: string;
     name: string;
     fromDate: string;
     toDate: string;
     position: string;
     project: PROJECT_TYPE;
};

export type EDUCATION_TYPE = {
     name: string;
     fromDate: string;
     toDate: string;
     details: string[];
};
