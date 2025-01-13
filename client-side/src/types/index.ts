export interface WebcamStatus {
    isActive: boolean;
    error: string | null;
    isLoading: boolean;
  }
  
  export interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback: React.ReactNode;
  }
  
  export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
  }