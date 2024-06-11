
import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../src/store/question/question.slice";

export const store = configureStore({
    reducer: {
        questions: questionsReducer
    }
})
