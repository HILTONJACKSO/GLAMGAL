import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[GLAMGAL ErrorBoundary caught error]:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-warm-white">
          <h1 className="font-display text-2xl md:text-3xl tracking-widest text-obsidian uppercase mb-4">
            SOMETHING UNEXPECTED OCCURRED
          </h1>
          <p className="text-sm text-deep-charcoal max-w-md mb-8">
            We encountered a temporary error loading this experience. Please try refreshing or return to the main storefront.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-obsidian text-warm-white font-display text-xs tracking-widest py-3 px-6 uppercase hover:bg-black transition-colors"
            >
              RELOAD PAGE
            </button>
            <Link
              to="/"
              className="border border-obsidian text-obsidian font-display text-xs tracking-widest py-3 px-6 uppercase hover:bg-obsidian hover:text-warm-white transition-colors"
            >
              RETURN TO HOME
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
