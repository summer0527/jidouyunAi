declare module 'pptx-parser' {
    export interface PPTXDocument {
      slides: ArrayBuffer[];
      totalPages: number;
    }
  }