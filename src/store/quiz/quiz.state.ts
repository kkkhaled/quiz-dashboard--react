export interface Quiz {
  _id: string;
  title: string;
  topic: string;
  course: string;
  dueTo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface QuizState {
  quizes: Quiz[];
  loading: boolean;
  error: string | null;
}

export const initialQuizState: QuizState = {
  quizes: [],
  loading: false,
  error: null,
};
