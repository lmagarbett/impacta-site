import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log errors to console — replace with external logging if available
    console.error("ErrorBoundary caught:", error, info);
  }

  reset = () => this.setState({ hasError: false, error: undefined });

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-100 rounded text-red-800">
          <h3 className="font-semibold mb-2">Something went wrong</h3>
          <p className="text-sm mb-4">A component failed to load. Try refreshing or retrying.</p>
          <div className="flex gap-2">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-impacta5 text-white rounded hover:opacity-90"
            >
              Reload page
            </button>
            <button
              onClick={this.reset}
              className="px-4 py-2 border rounded text-impacta11 hover:bg-gray-100"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
