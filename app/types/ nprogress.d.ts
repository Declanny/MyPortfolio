declare module 'nprogress' {
    interface NProgressOptions {
      minimum?: number;
      easing?: string;
      speed?: number;
      trickle?: boolean;
      trickleSpeed?: number;
      showSpinner?: boolean;
      parent?: string;
      positionUsing?: string;
      barSelector?: string;
      spinnerSelector?: string;
    }
  
    interface NProgress {
      configure(options: NProgressOptions): NProgress;
      start(): NProgress;
      done(force?: boolean): NProgress;
      set(n: number): NProgress;
      inc(amount?: number): NProgress;
      remove(): void;
    }
  
    const nprogress: NProgress;
    export default nprogress;
  }
  