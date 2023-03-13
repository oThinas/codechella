export interface IField {
  label: string;
  input: {
    isValid: boolean;
    type: string;
    options?: string[];
    reaquired?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  }
}
