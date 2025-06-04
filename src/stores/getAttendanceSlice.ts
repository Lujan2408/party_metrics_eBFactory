import { type StateCreator } from "zustand";

export type AttendanceSliceType ={
  men: number;
  women: number;
  children: number;
  total: number;
  setMen: (value: number) => void;
  setWomen: (value: number) => void;
  setChildren: (value: number) => void;
}

export const createAttendanceSlice: StateCreator<AttendanceSliceType> = (set) => ({
  men: 0,
  women: 0,
  children: 0,
  total: 0,
  setMen: (value) =>
    set((state) => ({
      men: value,
      total: value + state.women + state.children,
    })),
  setWomen: (value) =>
    set((state) => ({
      women: value,
      total: state.men + value + state.children,
    })),
  setChildren: (value) =>
    set((state) => ({
      children: value,
      total: state.men + state.women + value,
    })),
}); 