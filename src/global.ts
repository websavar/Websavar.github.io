export interface Global {
  document: Document;
  window: Window;
  process: Process;
  navigator: {
    userAgentData: string
  }
}

declare global {
  interface Window {
    env: any
  }
  interface Process {
    env: any
  }
  interface Navigator {
    userAgentData: string
  }
}
export default global;