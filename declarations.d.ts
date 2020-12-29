declare global {
  interface Document {
    // Leave the brid player object as any for right now
    $bp: any;
  }
  
  interface Window {
    $bp: any;
  }
}

export {}
